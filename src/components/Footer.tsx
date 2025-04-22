export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Shop</h3>
                    <ul className="mt-4 space-y-4">
                        <li><a href="#" className="text-base text-gray-400 hover:text-white">All Products</a></li>
                        <li><a href="#" className="text-base text-gray-400 hover:text-white">New Arrivals</a></li>
                        <li><a href="#" className="text-base text-gray-400 hover:text-white">Featured</a></li>
                        <li><a href="#" className="text-base text-gray-400 hover:text-white">Deals & Promotions</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Customer Service</h3>
                    <ul className="mt-4 space-y-4">
                        <li><a href="#" className="text-base text-gray-400 hover:text-white">Contact Us</a></li>
                        <li><a href="#" className="text-base text-gray-400 hover:text-white">FAQs</a></li>
                        <li><a href="#" className="text-base text-gray-400 hover:text-white">Shipping & Returns</a></li>
                        <li><a href="#" className="text-base text-gray-400 hover:text-white">Order Tracking</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">About</h3>
                    <ul className="mt-4 space-y-4">
                        <li><a href="#" className="text-base text-gray-400 hover:text-white">Our Story</a></li>
                        <li><a href="#" className="text-base text-gray-400 hover:text-white">Careers</a></li>
                        <li><a href="#" className="text-base text-gray-400 hover:text-white">Terms & Conditions</a></li>
                        <li><a href="#" className="text-base text-gray-400 hover:text-white">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
            
            <div className="mt-12 border-t border-gray-700 pt-8">
                <p className="text-base text-gray-400 text-center">
                    &copy; 2025 MyStore. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
  );
}