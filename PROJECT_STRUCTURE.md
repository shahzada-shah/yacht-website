# Yacht Booking Platform - Project Structure

## Overview
A professional React + TypeScript application for luxury yacht bookings. Built with modern best practices, featuring comprehensive state management, localStorage persistence, and full mobile responsiveness.

## Technology Stack
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS with custom utilities
- **Icons**: Lucide React
- **Routing**: React Router DOM v7
- **State Management**: React Context API
- **Database**: Supabase (PostgreSQL)
- **Data Persistence**: localStorage for cart and favorites

## Folder Structure

```
src/
├── components/
│   ├── layout/          # Layout components (Header, Footer, Navigation)
│   ├── sections/        # Page sections (Hero, YachtListings, etc.)
│   └── ui/              # Reusable UI components (YachtCard, CartDropdown, etc.)
├── context/             # React Context providers for global state
│   ├── CartContext.tsx      # Shopping cart state with localStorage
│   └── FavoritesContext.tsx # Favorites state with localStorage
├── pages/               # Top-level page components
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── ServicesPage.tsx
│   ├── FAQPage.tsx
│   └── YachtDetailPage.tsx
├── types/               # TypeScript type definitions
│   ├── index.ts         # General types
│   └── database.ts      # Supabase database types
├── lib/                 # Library configurations
│   └── supabase.ts      # Supabase client setup
├── App.tsx              # Root component with routing
├── main.tsx             # Application entry point
└── index.css            # Global styles and custom animations
```

## Architecture Principles

### 1. Component Organization
Components are organized by their responsibility:

- **layout/**: Components that define page structure (Header, Footer, Sidebar)
- **sections/**: Large content sections that compose pages (Hero, Features, Testimonials)
- **ui/**: Small, reusable UI primitives (Button, Input, Card, Logo)

### 2. State Management
The application uses React Context API for global state:

- **CartContext**: Manages shopping cart with localStorage persistence
- **FavoritesContext**: Manages favorite yachts with localStorage persistence

Both contexts provide:
- Type-safe interfaces
- Automatic localStorage sync
- Error handling for storage operations
- Comprehensive helper functions

### 3. Type Safety
All components use TypeScript with comprehensive type definitions:
- Interface documentation with JSDoc comments
- Prop type definitions for all components
- Shared types in `src/types/` directory
- Database types generated from Supabase schema

### 4. Mobile-First Responsive Design
All components are fully responsive using Tailwind's breakpoint system:
- Mobile: Base styles (default)
- Tablet: `sm:` prefix (640px+)
- Desktop: `md:` prefix (768px+), `lg:` prefix (1024px+)

Dropdowns transform to full-screen on mobile for better UX.

## Component Documentation

### Layout Components

#### Header (`components/layout/Header.tsx`)
The main application header with navigation and action buttons.

**Features:**
- Fixed positioning with backdrop blur effect
- Responsive design
- Shopping cart, favorites, and user account actions

**Usage:**
```tsx
import { Header } from './components/layout/Header';

<Header />
```

#### Navigation (`components/layout/Navigation.tsx`)
Navigation menu with active state management.

**Features:**
- Active link highlighting
- Smooth scroll navigation
- Responsive (hidden on mobile by default)

### UI Components

#### Logo (`components/ui/Logo.tsx`)
Brand logo with hover animation.

**Features:**
- Interactive hover effect
- Consistent branding
- Anchor icon from lucide-react

### Section Components

#### Hero (`components/sections/Hero.tsx`)
Landing page hero section with geometric background.

**Features:**
- Full viewport height
- Animated entrance effects
- Geometric SVG background pattern
- Call-to-action buttons
- Scroll indicator animation

## Styling Approach

### Tailwind CSS
The project uses Tailwind CSS for styling with custom utilities defined in `index.css`.

### Custom Animations
Custom animations are defined in the `@layer utilities` section:
- `animate-fade-in` - Simple fade in effect
- `animate-fade-in-up` - Fade in with upward motion
- `animate-fade-in-delay` - Delayed fade in
- `animate-fade-in-delay-2` - Further delayed fade in

### Design System
- **Spacing**: 8px base unit (Tailwind default)
- **Colors**: Grayscale palette with focus on readability
- **Typography**: System font stack with antialiasing
- **Transitions**: 200ms duration for interactive elements

## Best Practices

### 1. Component Naming
- Use PascalCase for component files
- Export components as named exports
- Use descriptive, self-documenting names

### 2. Props and Types
- Define prop interfaces for all components
- Use TypeScript for type safety
- Document complex prop types

### 3. State Management
- Use local state for component-specific data
- Consider context for shared state (to be added)
- Keep state close to where it's used

### 4. Performance
- Lazy load routes and heavy components (when adding routing)
- Optimize images and assets
- Use React.memo() for expensive renders

### 5. Accessibility
- Use semantic HTML elements
- Include ARIA labels for icon buttons
- Ensure keyboard navigation works
- Maintain color contrast ratios

## Development Workflow

### Running the Project
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
npm run typecheck  # Check TypeScript types
```

### Adding New Components

1. Determine component category (layout/sections/ui)
2. Create component file in appropriate folder
3. Add TypeScript interfaces for props
4. Export component as named export
5. Document component usage

**Example:**
```tsx
// src/components/ui/Button.tsx
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export const Button = ({ children, variant = 'primary', onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-4 font-semibold rounded-lg transition-colors duration-200 ${
        variant === 'primary' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      {children}
    </button>
  );
};
```

## Data Persistence Strategy

### localStorage Implementation
Both cart and favorites use localStorage for persistence:

1. **Initialization**: Load from localStorage on mount
2. **Sync**: Save to localStorage on every state change
3. **Error Handling**: Graceful fallback to empty state
4. **Keys**:
   - `yacht-booking-cart`
   - `yacht-booking-favorites`

### Supabase Integration
Database schema defined in `supabase/migrations/`:
- Yachts table
- Bookings table
- Users table (future auth)
- Row Level Security (RLS) policies

## Best Practices Implemented

### 1. Code Organization
- Single Responsibility Principle
- Clear separation of concerns
- Modular, reusable components
- Consistent file naming (PascalCase)

### 2. TypeScript Standards
- Interface definitions for all props
- JSDoc comments for documentation
- Type-safe context APIs
- No `any` types (except metadata objects)

### 3. Performance Optimization
- Lazy route loading capability
- Conditional rendering for dropdowns
- Efficient re-render prevention
- localStorage debouncing via useEffect

### 4. Accessibility
- Semantic HTML elements
- ARIA labels for icon buttons
- Keyboard navigation support
- Color contrast compliance
- Focus states on interactive elements

### 5. Mobile Responsiveness
- Mobile-first approach
- Touch-friendly button sizes (min 44px)
- Full-screen modals on mobile
- Responsive typography and spacing
- Tested across breakpoints

### 6. Error Handling
- Try-catch for localStorage operations
- Graceful degradation
- User-friendly error states
- Console error logging

## Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev)
- [Supabase Documentation](https://supabase.com/docs)
