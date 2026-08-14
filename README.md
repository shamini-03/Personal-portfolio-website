# Shamini Dharmasena - Portfolio Website

This is the portfolio website for Shamini Dharmasena, an Aspiring Business Analyst, built with React, Vite, Tailwind CSS, and Framer Motion.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Open a terminal in the project directory.
2. Run the following command to install the required dependencies:
   ```bash
   npm install
   ```

### Running Locally

To start the development server and view the website locally, run:
```bash
npm run dev
```
Then, open your browser and go to the URL provided in the terminal (usually `http://localhost:5173/`).

## How to Edit Content

All of your portfolio data is stored in the `src/data` folder. You can easily update your information without touching the UI components.

- `src/data/personal.js`: Update your name, titles, intro, about text, email, social links, and the paths to your CV and photo.
- `src/data/skills.js`: Update your skills categories and lists.
- `src/data/projects.js`: Add or modify your featured projects, including screenshots and links.
- `src/data/education.js`: Update your degree and school information.
- `src/data/experience.js`: Add your internships, exhibitions, and volunteer work.
- `src/data/achievements.js`: Add your certifications and awards.

## Adding Your Assets (Images & CV)

Before deploying, you need to add your actual images and files to the `public/assets` folder. The folder structure is already set up:

- **Profile Photo:** Place your photo in `public/assets/` and name it `profile-photo.jpg` (or update the filename in `src/data/personal.js`).
- **CV Document:** Place your PDF CV in `public/assets/` and name it `Shamini_Dharmasena_CV.pdf` (or update the filename in `src/data/personal.js`).
- **Project Screenshots:** Place your project screenshots in `public/assets/projects/` and ensure the paths in `src/data/projects.js` match (e.g., `/assets/projects/egg-farm.jpg`).
- **Certificates:** Place certificate images in `public/assets/achievements/` and update `src/data/achievements.js`.

## Deployment

### Deploying to Vercel (Recommended)

1. Create a free account on [Vercel](https://vercel.com/).
2. Push your code to a GitHub repository.
3. In Vercel, click "Add New..." -> "Project".
4. Import your GitHub repository.
5. Vercel will automatically detect that it's a Vite (React) project. Click **Deploy**.

### Deploying to GitHub Pages

1. In your `vite.config.js`, add a `base` property with your repository name:
   ```javascript
   export default defineConfig({
     base: '/your-repo-name/',
     // ...
   })
   ```
2. Install the `gh-pages` package:
   ```bash
   npm install gh-pages --save-dev
   ```
3. In `package.json`, add a deploy script:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist",
     // ...
   }
   ```
4. Run the deploy script:
   ```bash
   npm run deploy
   ```
