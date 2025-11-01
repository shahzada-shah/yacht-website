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
   * Blur-in animation state for smooth transitions
   */
  const [isBlurringIn, setIsBlurringIn] = useState(false);

  /**
   * Handle initial page load with smooth blur-in transition
   */
  useEffect(() => {
    const blurTimer = setTimeout(() => {
      setIsBlurringIn(true);
    }, 1000);

    const removeTimer = setTimeout(() => {
      setInitialLoading(false);
    }, 1600);

    return () => {
      clearTimeout(blurTimer);
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
      <div 
        className={`fixed inset-0 z-[100] transition-all duration-700 ease-out ${
          isBlurringIn ? 'opacity-0 blur-lg scale-105' : 'opacity-100 blur-0 scale-100'
        }`}
      >
        <Loader />
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen flex flex-col animate-blur-in"
      style={{
        animation: 'blurIn 0.8s ease-out forwards'
      }}
    >
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
