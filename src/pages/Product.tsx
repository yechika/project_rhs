import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { Link } from "react-router-dom";

interface Product {
  category: string;
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
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    fetchProducts();
    fetchCategories();
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

  // Fetch unique categories from products table
  const fetchCategories = async () => {
    const { data } = await supabase.from("products").select("category");
    if (data) {
      const unique = Array.from(
        new Set(
          data
            .map((item: { category?: string }) => item.category)
            .filter(Boolean)
        )
      );
      setCategories(unique as string[]);
    }
  };

  // Filter products by name and category
  const filteredProducts = products.filter((product) => {
    const matchName = product.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = selectedCategory
      ? product.category === selectedCategory
      : true;
    return matchName && matchCategory;
  });

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Our Products
      </h1>

      {/* Search Bar & Category Filter */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md w-full sm:w-1/3"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md w-full sm:w-1/4"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
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
                {product.category && (
                  <span className="inline-block px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded mb-2">
                    {product.category}
                  </span>
                )}
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
