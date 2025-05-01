import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Carousel.css";

const images = [
  {
    url: "https://www.distributorfluke.com/~img/1-d90be-3845_457-t3845_134.webp",
    title: "Premium Products at Your Fingertips",
    description: "Discover the latest trends and shop from thousands of products with fast delivery and excellent customer service.",
  },
  {
    url: "https://www.distributorfluke.com/~img/distributor_fluke_indonesia-f7994-3845_558-t3845_134.webp",
    title: "Quality You Can Trust",
    description: "We provide only the highest quality products from trusted manufacturers.",
  },
  {
    url: "https://www.distributorfluke.com/~img/slide_1-37191-3845_519-t3845_134.webp",
    title: "Expert Support",
    description: "Our team of experts is ready to assist you with any questions.",
  },
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);

  const handleSlideChange = (newIndex: number, direction: 'left' | 'right') => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection(direction);
    setCurrentIndex(newIndex);
    setTimeout(() => {
      setIsAnimating(false);
      setSlideDirection(null);
    }, 500);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    handleSlideChange(newIndex, 'right');
  };

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    handleSlideChange(newIndex, 'left');
  };

  return (
    <div className="carousel-container relative overflow-hidden">
      <div 
        className={`hero-bg relative h-full transition-all duration-500
          ${slideDirection === 'left' ? 'slide-left' : ''}
          ${slideDirection === 'right' ? 'slide-right' : ''}
        `}
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%), 
                           url('${images[currentIndex].url}')`,
        }}
      >
        <div className="max-w-7xl mx-auto h-full">
          <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto text-center animate-fadeIn">
              <h1 className="text-xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl px-8">
                {images[currentIndex].title}
              </h1>
              <p className="mt-4 text-base sm:text-lg text-yellow-200 max-w-2xl mx-auto sm:mt-6 px-4">
                {images[currentIndex].description}
              </p>
              <div className="mt-6 sm:mt-10 flex justify-center space-x-4">
                <a
                  href="/products"
                  className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md shadow-sm text-stone-900 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-stone-900 opacity-70"></div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="nav-button nav-button-left absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors duration-200 z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="nav-button nav-button-right absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors duration-200 z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(
              index,
              index > currentIndex ? 'right' : 'left'
            )}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentIndex ? 'bg-white w-4' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
