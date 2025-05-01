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
import { AboutUs } from './pages/AboutUs';
import { Yap } from './components/Yap';
import { ProductDetails } from './pages/ProductDetails';

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
                {!isAdmin && <Yap />}
                <Home isAdmin={isAdmin} />
                {!isAdmin && <Banner />}
                {!isAdmin && <Contacts />}
              </div>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about_us" element={<AboutUs/>} />
        </Routes>
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}

export default AppWrapper;
