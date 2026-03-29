import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Services from './pages/Services';
import Specialties from './pages/Specialties';
import Doctors from './pages/Doctors';
import Testimonials from './pages/Testimonials';
import Appointment from './pages/Appointment';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="specialties" element={<Specialties />} />
            <Route path="doctors" element={<Doctors />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="appointment" element={<Appointment />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
