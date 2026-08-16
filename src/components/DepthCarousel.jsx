import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';
import './DepthCarousel.css';

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
const normalizeItem = item => (typeof item === 'string' ? { image: item, alt: '' } : item);

const DepthCarousel = ({
  items = [], cardWidth = 430, cardHeight = 330, radius = 22, tint = '#050b18',
  depth = 190, spread = 74, tilt = 18, tiltDirection = 'right', perspective = 1400,
  visibleCards = 3, falloff = 0.2, blur = 5, duration = 700, ease = 'power3.out',
  autoplay = true, autoplayDelay = 4200, loop = true, showControls = true,
  showIndicators = true, onChange, className = ''
}) => {
  const data = useMemo(() => (Array.isArray(items) ? items : []).map(normalizeItem), [items]);
  const count = data.length;
  const rootRef = useRef(null);
  const cardRefs = useRef([]);
  const overlayRefs = useRef([]);
  const posRef = useRef(0);
  const focusRef = useRef(0);
  const tweenRef = useRef(null);
  const scaleRef = useRef(1);
  const cfgRef = useRef({});
  const onChangeRef = useRef(onChange);
  const dragRef = useRef(null);
  const wheelTimerRef = useRef(null);
  const autoTimerRef = useRef(null);
  const reducedRef = useRef(false);
  const [active, setActive] = useState(0);

  onChangeRef.current = onChange;
  cfgRef.current = { count, depth, spread, tilt, tiltDirection, visibleCards, falloff, blur, duration, ease, loop, cardWidth, autoplayDelay };

  const layout = useCallback(pos => {
    const cfg = cfgRef.current;
    if (!cfg.count) return;
    const direction = cfg.tiltDirection === 'left' ? -1 : 1;
    for (let i = 0; i < cfg.count; i += 1) {
      const element = cardRefs.current[i];
      if (!element) continue;
      let distance = i - pos;
      if (cfg.loop && cfg.count > 1) {
        distance = ((distance % cfg.count) + cfg.count) % cfg.count;
        if (distance > cfg.count / 2) distance -= cfg.count;
      }
      const back = Math.max(0, distance);
      const shown = Math.abs(distance) <= cfg.visibleCards + 0.5;
      const translateZ = -cfg.depth * distance;
      const translateX = direction * cfg.spread * distance;
      const rotateY = direction * cfg.tilt * clamp(distance, 0, 1);
      let opacity = distance < 0 ? Math.max(0, 1 + distance) : 1;
      if (!shown) opacity = 0;
      const brightness = Math.max(0.18, 1 - back * cfg.falloff);
      const blurPixels = cfg.blur > 0 ? Math.min(cfg.blur, (back / Math.max(1, cfg.visibleCards)) * cfg.blur) : 0;
      element.style.transform = `translate(-50%, -50%) scale(${scaleRef.current}) translateX(${translateX.toFixed(2)}px) translateZ(${translateZ.toFixed(2)}px) rotateY(${rotateY.toFixed(3)}deg)`;
      element.style.opacity = opacity.toFixed(3);
      element.style.filter = `brightness(${brightness.toFixed(3)}) blur(${blurPixels.toFixed(2)}px)`;
      element.style.zIndex = String(Math.round(2000 - distance * 20));
      element.style.pointerEvents = shown && opacity > 0.05 ? 'auto' : 'none';
      if (overlayRefs.current[i]) overlayRefs.current[i].style.opacity = clamp(back * cfg.falloff * 1.25, 0, 0.86).toFixed(3);
    }
  }, []);

  const notify = useCallback(index => {
    setActive(index);
    onChangeRef.current?.(index, data[index]);
  }, [data]);

  const tweenTo = useCallback((target, animate) => {
    tweenRef.current?.kill();
    const cfg = cfgRef.current;
    const proxy = { position: posRef.current };
    tweenRef.current = gsap.to(proxy, {
      position: target,
      duration: animate && !reducedRef.current ? cfg.duration / 1000 : 0,
      ease: cfg.ease,
      onUpdate: () => { posRef.current = proxy.position; layout(proxy.position); },
      onComplete: () => {
        if (cfg.count > 0) posRef.current = ((posRef.current % cfg.count) + cfg.count) % cfg.count;
        layout(posRef.current);
      }
    });
  }, [layout]);

  const setFocus = useCallback((rawIndex, animate = true) => {
    const cfg = cfgRef.current;
    if (!cfg.count) return;
    const index = cfg.loop ? ((rawIndex % cfg.count) + cfg.count) % cfg.count : clamp(rawIndex, 0, cfg.count - 1);
    let delta = index - posRef.current;
    if (cfg.loop && cfg.count > 1) {
      delta = ((delta % cfg.count) + cfg.count) % cfg.count;
      if (delta > cfg.count / 2) delta -= cfg.count;
    }
    tweenTo(posRef.current + delta, animate);
    if (index !== focusRef.current) { focusRef.current = index; notify(index); }
  }, [notify, tweenTo]);

  const navigateBy = useCallback(step => setFocus(focusRef.current + step, true), [setFocus]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    const observer = new ResizeObserver(entries => {
      const needed = cfgRef.current.cardWidth + Math.abs(cfgRef.current.spread) * 2 + 100;
      scaleRef.current = clamp(entries[0].contentRect.width / needed, 0.48, 1);
      layout(posRef.current);
    });
    observer.observe(root);
    return () => observer.disconnect();
  }, [layout]);

  useEffect(() => {
    const element = rootRef.current;
    if (!element) return undefined;
    const onWheel = event => {
      if (cfgRef.current.count < 2) return;
      event.preventDefault();
      const raw = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
      posRef.current += clamp(raw / (cfgRef.current.cardWidth * 0.9), -0.6, 0.6);
      layout(posRef.current);
      clearTimeout(wheelTimerRef.current);
      wheelTimerRef.current = setTimeout(() => setFocus(Math.round(posRef.current), true), 130);
    };
    element.addEventListener('wheel', onWheel, { passive: false });
    return () => element.removeEventListener('wheel', onWheel);
  }, [layout, setFocus]);

  const onPointerDown = useCallback(event => {
    if (cfgRef.current.count < 2) return;
    tweenRef.current?.kill();
    dragRef.current = { x: event.clientX, startPos: posRef.current, lastX: event.clientX, lastTime: performance.now(), velocity: 0, moved: false, id: event.pointerId };
  }, []);

  const onPointerMove = useCallback(event => {
    const drag = dragRef.current;
    if (!drag) return;
    const stepPixels = Math.max(cfgRef.current.cardWidth * 0.55 * scaleRef.current, 40);
    const deltaX = event.clientX - drag.x;
    if (!drag.moved && Math.abs(deltaX) > 4) { drag.moved = true; rootRef.current?.setPointerCapture(drag.id); }
    if (!drag.moved) return;
    const now = performance.now();
    drag.velocity = (event.clientX - drag.lastX) / Math.max(now - drag.lastTime, 1);
    drag.lastX = event.clientX;
    drag.lastTime = now;
    posRef.current = drag.startPos - deltaX / stepPixels;
    layout(posRef.current);
  }, [layout]);

  const onPointerEnd = useCallback(() => {
    const drag = dragRef.current;
    if (!drag) return;
    dragRef.current = null;
    if (!drag.moved) return;
    const stepPixels = Math.max(cfgRef.current.cardWidth * 0.55 * scaleRef.current, 40);
    setFocus(Math.round(posRef.current - (drag.velocity * 180) / stepPixels), true);
  }, [setFocus]);

  useEffect(() => {
    reducedRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!autoplay || reducedRef.current || count < 2) return undefined;
    const root = rootRef.current;
    let paused = false;
    const pause = () => { paused = true; };
    const resume = () => { paused = false; };
    autoTimerRef.current = window.setInterval(() => !paused && navigateBy(1), Math.max(autoplayDelay, 600));
    root?.addEventListener('mouseenter', pause);
    root?.addEventListener('mouseleave', resume);
    root?.addEventListener('focusin', pause);
    root?.addEventListener('focusout', resume);
    return () => {
      clearInterval(autoTimerRef.current);
      root?.removeEventListener('mouseenter', pause);
      root?.removeEventListener('mouseleave', resume);
      root?.removeEventListener('focusin', pause);
      root?.removeEventListener('focusout', resume);
    };
  }, [autoplay, autoplayDelay, count, navigateBy]);

  useEffect(() => layout(posRef.current), [layout, depth, spread, tilt, tiltDirection, visibleCards, falloff, blur, cardWidth, cardHeight, radius, count]);
  useEffect(() => () => { tweenRef.current?.kill(); clearTimeout(wheelTimerRef.current); clearInterval(autoTimerRef.current); }, []);

  const handleKeyDown = event => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); navigateBy(-1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); navigateBy(1); }
  };

  return (
    <div ref={rootRef} className={`depth-carousel ${className}`.trim()} style={{ '--dc-perspective': `${perspective}px` }} role="region" aria-roledescription="carousel" aria-label="Featured projects" tabIndex={0} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerEnd} onPointerCancel={onPointerEnd} onKeyDown={handleKeyDown}>
      <div className="depth-carousel__stage">
        {data.map((item, index) => (
          <div key={item.image} className="depth-carousel__card" ref={element => { cardRefs.current[index] = element; }} style={{ width: cardWidth, height: cardHeight, borderRadius: radius }} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${count}: ${item.alt || 'Project image'}`} aria-hidden={active !== index} onClick={() => setFocus(index, true)}>
            <img className="depth-carousel__img" src={item.image} alt={item.alt || ''} draggable={false} />
            <span className="depth-carousel__tint" ref={element => { overlayRefs.current[index] = element; }} style={{ background: tint }} />
          </div>
        ))}
      </div>
      {showControls && count > 1 && <><button type="button" className="depth-carousel__arrow depth-carousel__arrow--prev" aria-label="Show previous project" onClick={() => navigateBy(-1)}>‹</button><button type="button" className="depth-carousel__arrow depth-carousel__arrow--next" aria-label="Show next project" onClick={() => navigateBy(1)}>›</button></>}
      {showIndicators && count > 1 && <div className="depth-carousel__dots" role="tablist" aria-label="Choose a project">{data.map((item, index) => <button key={item.image} type="button" role="tab" aria-selected={active === index} aria-label={`Show ${item.alt || `project ${index + 1}`}`} className={`depth-carousel__dot${active === index ? ' is-active' : ''}`} onClick={() => setFocus(index, true)} />)}</div>}
    </div>
  );
};

export default DepthCarousel;
