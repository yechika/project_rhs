import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { supabase } from "../lib/supabase";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  original_link?: string;
}

export function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">Product not found</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <Link
          to="/products"
          className="inline-flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Products
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0 md:w-1/2">
            <img
              src={
                product.image_url ||
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
              }
              alt={product.name}
              className="h-96 w-full object-cover md:h-full"
            />
          </div>
          <div className="p-8 md:w-1/2">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>
            <p className="text-xl font-bold text-gray-900 mb-4">
              Rp
              {product.price.toLocaleString("id-ID", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
            <div className="prose max-w-none mb-6">
              {product.description.split('\n').map((line, index) => (
                line ? (
                  <p key={index} className="text-gray-600 mb-2">
                    {line}
                  </p>
                ) : <br key={index} />
              ))}
            </div>
            {product.original_link && (
              <a
                href={product.original_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-500"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Visit Site
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}