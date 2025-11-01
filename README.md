# ⛵ Luxury Yacht Booking Platform

A modern, full-stack web application for browsing and booking luxury yacht charters. Built with React, TypeScript, and Supabase, featuring a clean UI, real-time data management, and comprehensive yacht listing functionality.

## 🚀 Live Demo

Visit the live application: [Coming Soon]

## 📸 Screenshots

[Add screenshots of your application here]

## ✨ Key Features

### User Experience
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Dynamic Yacht Listings** - Browse available yachts with detailed specifications
- **Advanced Search & Filtering** - Filter by location, price, capacity, and dates
- **Interactive Yacht Details** - Comprehensive yacht pages with image galleries, specifications, crew info, and reviews
- **Shopping Cart System** - Add multiple yachts to cart with booking management
- **Favorites System** - Save and manage favorite yacht listings
- **Customer Reviews** - Read authentic reviews and ratings
- **FAQ System** - Contextual help and information

### Technical Features
- **Real-time Database** - Supabase PostgreSQL with Row Level Security (RLS)
- **Type-Safe Development** - Full TypeScript implementation
- **Context API** - Global state management for cart and favorites
- **React Router** - Client-side routing with smooth transitions
- **Component Architecture** - Modular, reusable component design
- **Loading States** - Elegant loading animations and transitions
- **Image Optimization** - Efficient image loading and display

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development with full IDE support
- **Vite** - Lightning-fast build tool and dev server
- **React Router v7** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, consistent icon library

### Backend & Database
- **Supabase** - Backend-as-a-Service with PostgreSQL
- **PostgreSQL** - Relational database with complex queries
- **Row Level Security (RLS)** - Fine-grained access control
- **Database Migrations** - Version-controlled schema management

### Development Tools
- **ESLint** - Code quality and consistency
- **TypeScript ESLint** - TypeScript-specific linting
- **PostCSS** - CSS transformation and optimization
- **Git** - Version control with clean commit history

## 📋 Database Schema

The application uses a well-structured relational database:

- **yachts** - Core yacht listings with specifications and pricing
- **yacht_images** - Multiple images per yacht with ordering
- **crew_members** - Crew information for each yacht
- **reviews** - Customer reviews and ratings
- **faqs** - Frequently asked questions per yacht

All tables implement Row Level Security for secure data access.

## 🏗️ Project Structure

```
yacht-website/
├── src/
│   ├── components/
│   │   ├── layout/          # Header, Footer, Navigation
│   │   ├── sections/        # Page sections (Hero, Listings, etc.)
│   │   └── ui/              # Reusable UI components
│   ├── context/             # React Context providers
│   ├── pages/               # Route pages
│   ├── types/               # TypeScript type definitions
│   └── lib/                 # Utilities and configs
├── supabase/
│   └── migrations/          # Database schema migrations
└── public/                  # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git
- Supabase account (for database)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shahzada-shah/yacht-website.git
   cd yacht-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run database migrations**
   
   Apply the schema to your Supabase project using the Supabase CLI or dashboard.

5. **Start development server**
   ```bash
   npm run dev
   ```
   
   The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview  # Preview production build locally
```

## 💻 Skills Demonstrated

### Frontend Development
- Modern React patterns (hooks, context, custom hooks)
- TypeScript for type-safe development
- Responsive design with mobile-first approach
- Component composition and reusability
- State management with Context API
- Client-side routing and navigation
- Performance optimization techniques

### Backend & Database
- PostgreSQL database design and normalization
- SQL migration management
- Row Level Security implementation
- RESTful API integration
- Data modeling for complex relationships

### Development Practices
- Clean, maintainable code structure
- Git version control with meaningful commits
- Type-safe development workflow
- Component-driven development
- Modern build tools and optimization
- ESLint for code quality

### UI/UX Design
- Modern, elegant user interface
- Intuitive navigation and user flows
- Smooth animations and transitions
- Accessibility considerations
- Responsive design across devices

## 📝 Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
npm run typecheck  # Check TypeScript types
```

## 🔮 Future Enhancements

- [ ] User authentication and profiles
- [ ] Real-time booking availability calendar
- [ ] Payment integration (Stripe)
- [ ] Email notifications
- [ ] Admin dashboard for yacht management
- [ ] Advanced search filters
- [ ] Map view for yacht locations
- [ ] Multi-language support

## 📧 Contact

**Developer:** Kazi Shahzada Shah  
**GitHub:** [@shahzada-shah](https://github.com/shahzada-shah)  
**Project Repository:** [yacht-website](https://github.com/shahzada-shah/yacht-website)

---

*This project showcases modern full-stack web development skills including React, TypeScript, database design, and responsive UI implementation. Built as a demonstration of production-ready code and best practices.*
