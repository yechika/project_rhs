import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { useAuth } from './hooks/useAuth';
import Carousel from './components/Carousel';
import { Product } from './pages/Product';
import Contacts from './pages/Contacts';
import Banner from './components/Banner';

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

function App() {
  const { user } = useAuth();
  const isAdmin = !!user;
  const location = useLocation();

  const showCarousel = location.pathname === '/' && !isAdmin;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow pt-20">
        {showCarousel && <Carousel />}
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex flex-col gap-y-10">
                <Home isAdmin={isAdmin} />
                {!isAdmin && <Banner />}
                {!isAdmin && <Contacts />}
              </div>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Product />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}

export default AppWrapper;
