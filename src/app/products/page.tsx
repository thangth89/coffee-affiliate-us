// src/app/products/page.tsx
import React from 'react';
import ProductCard from '@/components/product/ProductCard';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import ProductReviews from '@/components/sections/ProductReviews';

// Type definition cho sản phẩm
export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  reviews: number | string;
  rating: number; // Thêm field rating
  image: string;
  isNew?: boolean;
  affiliateLink: string;
}

const ProductsPage = () => {
  // Dữ liệu sản phẩm - dễ dàng thêm sản phẩm mới
  const products: Product[] = [
    {
      id: 1,
      name: "MHW-3BOMBER Manual Coffee Grinder Numerical External Setting Stainless Steel Conical Burr Fit Drip Coffee Espresso Barista Gifts",
      description: "External Scale Adjustment:Offers precise external scale adjustment for versatile coffee brewing...",
      price: "171.89",
      originalPrice: "176.89",
      reviews: "3000+ sold",
      rating: 5, // 5 sao đầy
      image: "images/products/mayxay.webp",
      isNew: true,
      affiliateLink: "https://s.click.aliexpress.com/e/_oBKckkt"
    },
    {
      id: 2,
      name: "MHW-3BOMBER Pour Over Coffee Kits with Dripper Coffee Pot Coffee Grinder Scale Portable Handbag Outdoor Barista Christmas Gifts",
      description: "8pcs Coffee Set",
      price: "290.59",
      originalPrice: "593.04",
      reviews: "10,000+ sold",
      rating: 4.8, // 4.5 sao (có nửa sao)
      image: "images/products/combo.webp",
      affiliateLink: "https://s.click.aliexpress.com/e/_omQpIiV"
    },
    {
      id: 3,
      name: "MHW-3BOMBER Pour Over Coffee Kettle 400ml/600ml Stainless Steel Gooseneck Tea Water Pot Chic Cafe Barista Kitchen Accessories",
      description: "Coffee Kettle 400ml/600ml",
      price: "38.14",
      originalPrice: "43.14",
      reviews: "2,000+ sold",
      rating: 4.9, // Gần 5 sao
      image: "images/products/amdun.webp",
      affiliateLink: "https://s.click.aliexpress.com/e/_ophqCTr"
    },
    {
      id: 4,
      name: "MHW-3BOMBER Glass Coffee Filter Cups and Espresso Filter Paper Set Reusable Cone Pour Over Coffee Dripper Filters Accessorie",
      description: "Glass Coffee Filter Cups and Espresso Filter Paper Set",
      price: "25.14",
      originalPrice: "51.30",
      reviews: "4,000+ slod",
      rating: 4, // 4 sao đầy
      image: "images/products/Cocloc.webp",
      affiliateLink: "https://s.click.aliexpress.com/e/_omqrXI5"
    },
    {
      id: 5,
      name: "MHW-3BOMBER 500ml Coffee Server Glass Coffee Pot Espresso Dripper Pour Over Maker Brewer Pot Clear Chic Home Kitchen Accessories",
      description: "Brand Guarantee: 30 Days Money Back,MHW-3BOMBER's 30-day money back ...",
      price: "14.02",
      originalPrice: "21.52",
      reviews: "5,000+ slod",
      rating: 4.3, // 4.3 sao
      image: "images/products/cocdung.webp",
      affiliateLink: "https://s.click.aliexpress.com/e/_ooMBlAN"
    }
  ];
// Sample reviews data cho phần cuối trang
  const reviewsData = [
    {
      id: 1,
      rating: 5,
      title: "excellent favorite grinder",
      content: "Excellent construction quality. I will still test",
      author: "A***o",
      date: "02 Jul 2025",
      helpful: 5,
      verified: true,
      country: "US",
      avatar: "images/avatars/avatarschung.webp",
      images: ["images/reviews/review1.webp"],
    },
    {
      id: 2,
      rating: 5,
      title: "",
      content: "The product arrived quickly and well-packaged. Excellent quality. I have tested it and it is excellent.",
      author: "W***",
      date: "03 Apr 2025",
      helpful: 3,
      verified: true,
      country: "US",
      avatar: "images/avatars/avatar2.webp",
      images: [
       "images/reviews/review2_1.webp",
        "images/reviews/review2_2.webp",
        "images/reviews/review2_3.webp",
        "images/reviews/review2_4.webp",
        ],
    },
    {
      id: 3,
      rating: 4,
      title: "",
      content: "Great product, fast delivery and good quality. Only issue is it's slightly noisy but overall satisfied with the purchase.",
      author: "M***e",
      date: "15 Mar 2025",
      helpful: 2,
      verified: true,
      country: "US",
      avatar: "https://via.placeholder.com/40x40/F59E0B/FFFFFF?text=M"
    },
    {
      id: 4,
      rating: 5,
      title: "",
      content: "Perfect grinder for home use. Consistent grind size and easy to clean.",
      author: "J***n",
      date: "28 Feb 2025",
      helpful: 1,
      verified: true,
      country: "US",
      avatar: "https://via.placeholder.com/40x40/EF4444/FFFFFF?text=J"
    },
    {
      id: 5,
      rating: 4,
      title: "",
      content: "Good quality product, works as expected. Delivery was fast.",
      author: "S***h",
      date: "20 Jan 2025",
      helpful: 0,
      verified: true,
      country: "US",
      avatar: "https://via.placeholder.com/40x40/8B5CF6/FFFFFF?text=S"
    },
    {
      id: 6,
      rating: 5,
      title: "Amazing coffee set!",
      content: "The complete coffee kit is perfect for outdoor camping. Everything you need is included and the quality is outstanding.",
      author: "C***k",
      date: "10 Jan 2025",
      helpful: 4,
      verified: true,
      country: "US",
      avatar: "https://via.placeholder.com/40x40/6366F1/FFFFFF?text=C"
    },
    {
      id: 7,
      rating: 4,
      title: "",
      content: "Good kettle, perfect pour control. Heats up quickly and looks elegant.",
      author: "D***n",
      date: "05 Jan 2025",
      helpful: 2,
      verified: true,
      country: "US",
      avatar: "https://via.placeholder.com/40x40/EC4899/FFFFFF?text=D"
    },
    {
      id: 8,
      rating: 5,
      title: "",
      content: "Filter cups work perfectly. Easy to clean and brew great coffee every time.",
      author: "E***y",
      date: "28 Dec 2024",
      helpful: 1,
      verified: true,
      country: "US",
      avatar: "https://via.placeholder.com/40x40/F59E0B/FFFFFF?text=E"
    }
  ];
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Products Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard 
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </main>
     {/* <FeaturedProducts /> // Thêm field rating */}
     {/* Customer Reviews Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Customer Reviews</h2>
            <p className="text-gray-600">See what our customers are saying about our coffee products</p>
          </div>
          <ProductReviews reviews={reviewsData} />
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;



























