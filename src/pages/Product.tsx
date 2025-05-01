import { useEffect, useState } from "react";
import {  Search } from "lucide-react";
import { supabase } from "../lib/supabase";
import { Link } from "react-router-dom";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  original_link?: string;
}

export function Product() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });

    if (data) {
      setProducts(data);
    }
  };

  // Filter products by name (case-insensitive)
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Our Products
      </h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-10">
        <div className="relative w-full max-w-md">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <Search className="h-5 w-5" />
          </span>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="block w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white text-gray-900 placeholder-gray-400 shadow-sm transition"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="flex flex-nowrap gap-8 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="min-w-[280px] bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={
                  product.image_url ||
                  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
                }
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {product.name}
                </h3>
                <p className="mt-2 text-gray-600 text-sm line-clamp-3">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-base font-semibold text-stone-900">
                    Rp
                    {product.price.toLocaleString("id-ID", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                  <Link
                    to={`/products/${product.id}`}
                    className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-500"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
          {filteredProducts.length === 0 && (
            <div className="w-full text-center text-gray-500 py-12 col-span-full">
              No products found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
