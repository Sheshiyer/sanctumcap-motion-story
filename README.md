# SanctumCap - Real Estate Investment Platform

A modern, interactive website for SanctumCap, a strategic real estate investment company. This website showcases the company's global investment opportunities, proven performance metrics, and investor partnerships through an elegant, motion-rich user interface.

## 🏢 About SanctumCap

SanctumCap is a real estate investment company focused on strategic opportunities worldwide. The website features:

- **Global Investment Network** - Interactive visualization of worldwide investment opportunities with golden accent styling
- **Investment Metrics** - Real-time data displays with animated counters and golden gradient effects
- **Proven Performance** - Track record visualization with performance statistics
- **Company Journey** - Timeline of growth and achievements
- **Investor & Developer Partnerships** - Showcase of strategic alliances with solid background styling
- **GDP Growth Analytics** - Economic data visualization with interactive charts
- **Contact & Investment Opportunities** - Direct engagement channels

## ✨ Recent Updates

- **Golden Accent Styling** - Applied consistent golden gradient effects to key text elements
- **Background Improvements** - Updated component backgrounds to solid colors for better visual consistency
- **Navigation Enhancement** - Verified all navigation items correspond to existing sections
- **Performance Optimization** - Improved component styling and hover effects

## 🚀 Features

- **Modern UI/UX** - Built with React, TypeScript, and Tailwind CSS
- **Interactive Animations** - Powered by Framer Motion and GSAP
- **Responsive Design** - Optimized for all device sizes
- **Performance Optimized** - Fast loading with Vite build system
- **Accessible Components** - Built with Radix UI primitives
- **Data Visualization** - Interactive charts with Recharts

## 🛠️ Technology Stack

### Core Technologies
- **Frontend Framework**: React 18.3.1 with TypeScript 5.5.3
- **Build Tool**: Vite 5.4.1 for fast development and optimized builds
- **Styling**: Tailwind CSS 3.4.11 with custom design system
- **Animations**: Framer Motion 12.23.0 & GSAP 3.13.0 for smooth interactions

### UI & Components
- **Component Library**: shadcn/ui with Radix UI primitives
- **Icons**: Lucide React 0.462.0 icon library
- **Charts & Visualization**: Recharts 3.0.2 for investment metrics
- **Theming**: next-themes for dark/light mode support

### Development & Quality
- **Routing**: React Router DOM 6.26.2 for navigation
- **Form Handling**: React Hook Form 7.53.0 with Zod 3.23.8 validation
- **State Management**: TanStack Query 5.56.2 for server state
- **Code Quality**: ESLint 9.9.0 with TypeScript ESLint
- **Development**: Hot Module Replacement, SWC for fast compilation

## 📦 Installation & Setup

### Prerequisites

- Node.js (v18 or higher) - [Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- npm or yarn package manager

### Local Development

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd sanctumcap-motion-story

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

### Available Scripts

```sh
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Build for development environment
npm run build:dev

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components (Button, Card, etc.)
│   ├── HeroSection.tsx # Landing hero section with animated metrics
│   ├── GlobalInvestorMap.tsx # Interactive world map with golden "INVESTOR" text
│   ├── ProvenPerformance.tsx # Performance metrics with golden "PERFORMANCE" text
│   ├── InvestmentMetrics.tsx # Investment data with animated counters
│   ├── CompanyJourney.tsx    # Timeline component (id="journey")
│   ├── InvestorPartners.tsx  # Partner showcase (id="investors")
│   ├── GDPGrowthChart.tsx   # Economic charts and data visualization
│   ├── DeveloperPartners.tsx # Developer network (id="developers")
│   ├── ContactSection.tsx   # Contact form (id="contact")
│   └── Navigation.tsx       # Main navigation with verified section links
├── pages/              # Route components
│   └── Index.tsx       # Main page layout
├── hooks/              # Custom React hooks
├── lib/                # Utilities and configurations
│   └── utils.ts        # Utility functions
├── assets/             # Static assets (images, logos)
└── main.tsx           # Application entry point
```

## 🔍 Development Notes

### Component Architecture
- All major sections have corresponding `id` attributes for navigation
- Golden gradient text effects are consistently applied to key terms
- Background styling uses solid colors with transparency for visual hierarchy
- Navigation items are verified to match existing sections

### Styling Conventions
- Use `bg-midnight/95` for main card containers
- Use `bg-slate-600/30` for icon containers with hover effects
- Apply golden gradients with `bg-gradient-to-r from-gold via-gold-400 to-sandstone bg-clip-text text-transparent`
- Maintain consistent spacing and typography throughout components

## 🎨 Design System

The project uses a sophisticated design system featuring:

### Color Palette
- **Primary Gold**: `#D4AF37` with gradient variations (`from-gold via-gold-400 to-sandstone`)
- **Background**: Midnight blue (`bg-midnight`) with transparency variations (`bg-midnight/95`)
- **Accent Colors**: Slate (`bg-slate-600/30`), Platinum, Sandstone
- **Text**: Golden gradients for emphasis, white/slate for readability

### Typography & Styling
- **Headings**: Arial Black with golden gradient text effects (`bg-clip-text text-transparent`)
- **Body Text**: System fonts optimized for readability
- **Emphasis**: Golden gradient spans for key terms ("INVESTOR", "PERFORMANCE")

### Visual Effects
- **Backgrounds**: Solid colors with transparency for better visual hierarchy
- **Animations**: Framer Motion for smooth page transitions and GSAP for complex animations
- **Hover States**: Subtle color transitions and scaling effects
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## 🚀 Deployment Options

### Lovable Platform
Visit the [Lovable Project](https://lovable.dev/projects/77e53e8e-f301-44c2-8b84-501e48a14a56) and click Share → Publish.

### Manual Deployment
```sh
# Build for production
npm run build

# Deploy the dist/ folder to your hosting provider
```

## 🔧 Development Workflow

### Using Lovable (Recommended)
- Visit the [Lovable Project](https://lovable.dev/projects/77e53e8e-f301-44c2-8b84-501e48a14a56)
- Make changes through natural language prompts
- Changes are automatically committed to the repository

### Using Local IDE
- Clone and set up the project locally
- Make changes in your preferred editor
- Push changes to sync with Lovable

### Using GitHub
- Edit files directly in the GitHub interface
- Use GitHub Codespaces for a full development environment

## 🌐 Custom Domain Setup

You can connect a custom domain to your SanctumCap website:

1. Navigate to Project > Settings > Domains in Lovable
2. Click "Connect Domain"
3. Follow the DNS configuration steps

For detailed instructions: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## 📄 License

© 2024 SanctumCap. All rights reserved.

## 🤝 Contributing

This project is maintained through the Lovable platform. To contribute:

1. Access the [Lovable Project](https://lovable.dev/projects/77e53e8e-f301-44c2-8b84-501e48a14a56)
2. Use natural language prompts to suggest improvements
3. Changes will be automatically reviewed and integrated

## 📞 Support

For technical support or questions about the SanctumCap platform:

- Visit the website's contact section
- Use the Lovable project interface for development questions
- Check the project documentation for common issues

---

*Built with ❤️ using React, TypeScript, and modern web technologies*
