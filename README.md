# AutomateHQ Website

A modern React-based website for AutomateHQ, showcasing AI automation services and solutions.

## 🚀 Deployment

This website is configured for deployment on GitHub Pages. The deployment is automated via GitHub Actions.

### Prerequisites

1. Ensure your repository is named exactly: `AutomateHQ-Website-Github`
2. Enable GitHub Pages in your repository settings
3. Set the source to "GitHub Actions"

### Automatic Deployment

The website will automatically deploy when you push to the `main` branch. The GitHub Actions workflow will:

1. Install dependencies
2. Build the project
3. Deploy to GitHub Pages

### Manual Deployment

If you need to deploy manually:

```bash
npm install
npm run build
```

The built files will be in the `dist` directory.

## 🛠️ Development

```bash
npm install
npm run dev
```

## 📝 Notes

- The website uses HashRouter for GitHub Pages compatibility
- Contact form submissions are simulated on GitHub Pages (no backend)
- All animations and visual effects are preserved
- The site is fully responsive and optimized for performance

## 🔧 Configuration

- Base path: `/AutomateHQ-Website-Github/`
- Router: HashRouter (for GitHub Pages compatibility)
- Build tool: Vite
- Styling: Tailwind CSS
- Animations: Framer Motion 