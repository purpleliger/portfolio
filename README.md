# Cybersecurity Professional Portfolio

A modern, responsive portfolio website showcasing the professional experience, certifications, and expertise of Mustafa Muhammad, a cybersecurity leader with 14+ years of experience in OT Security, incident response, and security governance.

## About This Website

This portfolio presents a comprehensive overview of a cybersecurity professional's career, including:

- **Professional Experience**: Detailed work history spanning OT/SCADA security, endpoint protection, incident response, and security operations
- **Educational Background**: Academic credentials including MBA, BSc in Computer Science, and specialized OT training
- **Certifications**: Professional certifications including CISSP (ISC2) and Government of Canada Security Clearance
- **Volunteer Work**: Community engagement in cybersecurity working groups and professional development
- **Projects**: Showcase of technical projects and security implementations

The site emphasizes expertise in:
- Operational Technology (OT) Cybersecurity for Critical Infrastructure
- Security Information and Event Management (SIEM)
- Endpoint Detection and Response (EDR)
- Incident Response and Threat Hunting
- Security Governance and Compliance (NIST CSF, IEC 62443, APTA)

---

## Technology Stack

This portfolio is built with modern web technologies focused on performance, maintainability, and user experience:

### Frontend Framework
- **React 19.2.0** - Modern component-based UI library with latest features and optimizations
- **TypeScript 5.9.3** - Type-safe JavaScript for robust, maintainable code

### Build Tools & Development
- **Vite 7.2.4** - Next-generation frontend tooling for fast development and optimized builds
- **ESLint 9.39.1** - Code quality and consistency enforcement with TypeScript-specific rules

### Styling & Theming
- **Custom CSS** - Handcrafted styles for pixel-perfect design control
- **React Context API** - Theme management system for seamless dark/light mode switching

### Deployment & Hosting
- **GitHub Pages** - Static site hosting with automated deployment
- **gh-pages** - Deployment automation tool

### Code Quality Tools
- **TypeScript ESLint** - Enhanced linting for TypeScript code
- **React Hooks Linting** - Ensures proper React patterns and best practices

---

## Project Structure

```
portfolio/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Navbar/         # Navigation with theme toggle
│   │   ├── Hero/           # Header section with introduction
│   │   ├── Experience/     # Professional experience timeline
│   │   ├── Education/      # Academic credentials
│   │   ├── Volunteer/      # Community engagement
│   │   ├── Projects/       # Portfolio projects
│   │   └── Footer/         # Site footer with contact info
│   ├── contexts/           # React Context providers
│   │   └── ThemeContext.tsx  # Theme management
│   ├── data/               # Content and data
│   │   └── portfolioData.ts  # Professional information
│   ├── types/              # TypeScript type definitions
│   │   └── portfolio.types.ts
│   ├── App.tsx             # Main application component
│   └── main.tsx            # Application entry point
├── public/                 # Static assets
│   ├── 404.html           # GitHub Pages SPA routing
│   └── .nojekyll          # Disables Jekyll processing
└── vite.config.ts         # Vite configuration
```

---

## Getting Started

### Prerequisites

- Node.js (version 16 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/purpleliger/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

---

## Available Scripts

### Development
```bash
npm run dev
```
Starts the Vite development server with hot module replacement (HMR)

### Build
```bash
npm run build
```
Compiles TypeScript and builds the production-ready application to the `dist/` folder

### Preview
```bash
npm run preview
```
Locally preview the production build

### Lint
```bash
npm run lint
```
Run ESLint to check code quality and identify issues

### Deploy
```bash
npm run deploy
```
Build and deploy the application to GitHub Pages

---

## Deployment

This portfolio is configured for deployment to GitHub Pages with automated SPA routing support.

### Deploy to GitHub Pages

1. Ensure you're on the main branch with all changes committed
2. Run the deployment command:
```bash
npm run deploy
```

3. The site will be built and deployed to the `gh-pages` branch automatically
4. Enable GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages / (root)

The site will be available at: `https://purpleliger.github.io/portfolio/`

### SPA Routing on GitHub Pages

The portfolio includes special configuration for Single Page Application routing:
- `public/404.html` - Handles routing for direct URL access
- SPA redirect script in `index.html` - Processes URL parameters
- Vite base path configuration for GitHub Pages subdirectory

---

## Features

### Responsive Design
- Mobile-first approach ensuring optimal viewing on all devices
- Adaptive layouts for desktop, tablet, and mobile screens

### Theme Switching
- Light and dark mode support
- User preference persistence across sessions
- Smooth theme transitions

### Performance Optimized
- Code splitting and lazy loading
- Minified assets for faster load times
- Optimized bundle size with vendor chunking

### SEO Friendly
- Semantic HTML structure
- Meta tags for search engines
- Open Graph tags for social media sharing

### Security Headers
- Content Security Policy (CSP)
- X-Frame-Options protection
- Additional security headers configured

---

## Customization

### Update Content

Edit the portfolio data in `src/data/portfolioData.ts` to update:
- Professional experience
- Education and certifications
- Volunteer work
- Projects

### Styling

Modify component-specific CSS files in `src/components/[Component]/[Component].css` or global styles in `src/index.css` and `src/App.css`.

### Theme Colors

Update theme colors in `src/index.css` CSS variables:
```css
:root {
  --primary-color: #your-color;
  --background-color: #your-color;
  /* etc. */
}
```

---

## Browser Support

This portfolio supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## License

This project is created for professional portfolio purposes.

---

## Contact

**Mustafa Muhammad**  
Cybersecurity Professional | CISSP  
Email: m.muhammad.cyber@gmail.com

---

**Live Site**: https://purpleliger.github.io/portfolio/
