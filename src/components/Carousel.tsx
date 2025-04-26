import "./Carousel.css";

function Carousel() {
  return (
    <div className="hero-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-20 pt-48 sm:pb-40 sm:pt-60 lg:pb-48 lg:pt-64 px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center animate-fadeIn">
            <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
              Premium Products at Your Fingertips
            </h1>
            <p className="mt-4 text-lg text-yellow-200 max-w-2xl mx-auto sm:mt-6 sm:text-xl">
              Discover the latest trends and shop from thousands of products
              with fast delivery and excellent customer service.
            </p>
            <div className="mt-10 flex justify-center space-x-4">
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-stone-900 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
              >
                Shop Now
              </a>  
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-stone-900 opacity-70"></div>
    </div>
  );
}

export default Carousel;
