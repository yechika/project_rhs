import { useEffect, useState } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { Admin } from "./Admin";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  original_link?: string;
}

interface HomeProps {
  isAdmin: boolean;
}

export function Home({ isAdmin }: HomeProps) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(3);

    if (data) {
      setProducts(data);
    }
  };

  if (isAdmin) {
    return <Admin />;
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 text-center">
          Featured Products
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
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
              <p className="mt-2 text-gray-600 text-sm line-clamp-2">
                {product.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-xl font-bold text-black">
                  Rp
                  {product.price.toLocaleString("id-ID", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
                {product.original_link && (
                  <a
                    href={product.original_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-stone-900 bg-yellow-400 hover:bg-yellow-500 transition-colors duration-200"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Site
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link
          to="/products"
          className="inline-flex items-center text-stone-900 hover:text-yellow-900 font-medium px-6 py-3 rounded-md bg-yellow-400 border border-yellow-400 hover:bg-yellow-500 transition-colors duration-200"
        >
          View All Products
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
