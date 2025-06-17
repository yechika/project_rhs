import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { useAuth } from "./hooks/useAuth";
import Carousel from "./components/Carousel";
import { Product } from "./pages/Product";
import Contacts from "./pages/Contacts";
import Banner from "./components/Banner";
import { AboutUs } from "./pages/AboutUs";
import { Yap } from "./components/Yap";
import { ProductDetails } from "./pages/ProductDetails";

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

  const showCarousel = location.pathname === "/" && !isAdmin;

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
                {!isAdmin && (
                  <a
                    href="https://wa.me/6281234567890" // Ganti dengan nomor WhatsApp Anda
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed z-50 bottom-6 right-6 bg-green-500 hover:bg-green-600 rounded-full shadow-lg p-4 flex items-center justify-center transition-colors"
                    aria-label="Chat via WhatsApp"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      height={32}
                      fill="white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.471-.148-.67.15-.197.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.151-.174.2-.298.3-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.617h-.001a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.455 4.436-9.89 9.893-9.89 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.896 6.991c-.003 5.456-4.438 9.891-9.893 9.891m8.413-18.306A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.304-1.681a11.86 11.86 0 0 0 5.742 1.463h.005c6.554 0 11.889-5.335 11.892-11.893a11.82 11.82 0 0 0-3.48-8.463" />
                    </svg>
                  </a>
                )}
              </div>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about_us" element={<AboutUs />} />
        </Routes>
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}

export default AppWrapper;
