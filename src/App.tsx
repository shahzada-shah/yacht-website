import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Loader } from './components/ui/Loader';
import { HomePage } from './pages/HomePage';
import { YachtDetailPage } from './pages/YachtDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { FAQPage } from './pages/FAQPage';

/**
 * App Component
 *
 * Root application component that sets up routing and layout structure.
 * Features initial page load animation and route transition loading states.
 * Uses React Router for client-side navigation with a consistent header/footer layout.
 * Implements smooth scroll to top on route changes.
 *
 * @component
 * @returns {JSX.Element} The main application component with routing configuration
 */
function App() {
  const location = useLocation();

  /**
   * Initial loading state for page load animation
   */
  const [initialLoading, setInitialLoading] = useState(true);

  /**
   * Fade out state for smooth transitions
   */
  const [isFadingOut, setIsFadingOut] = useState(false);

  /**
   * Handle initial page load with smooth fade out
   */
  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 1200);

    const removeTimer = setTimeout(() => {
      setInitialLoading(false);
    }, 1800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  /**
   * Scroll to top on route changes
   */
  useEffect(() => {
    if (!initialLoading) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  }, [location.pathname, initialLoading]);

  if (initialLoading) {
    return (
      <div className={`transition-opacity duration-500 ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}>
        <Loader />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">

      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/yacht/:id" element={<YachtDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
