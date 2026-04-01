import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Services from './pages/Services';
import Specialists from './pages/Specialists';
import Doctors from './pages/Doctors';
import Testimonials from './pages/Testimonials';
import Appointment from './pages/Appointment';
import Contact from './pages/Contact';

// Scroll to top when route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="services" element={<Services />} />
              <Route path="specialties" element={<Specialists />} />
              <Route path="doctors" element={<Doctors />} />
              <Route path="testimonials" element={<Testimonials />} />
              <Route path="appointment" element={<Appointment />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
