import { motion } from 'framer-motion';

const SectionHeading = ({ title, subtitle }) => {
  return (
    <div className="mb-12 md:mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {title}
          <span className="text-primary">.</span>
        </h2>
        {subtitle && (
          <p className="text-text-secondary text-lg max-w-2xl">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default SectionHeading;
