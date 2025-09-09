"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "./AnimationProvider";
import { useState } from "react";

const products = {
  topSeller: [
    { id: 1, src: "/images/product-1.svg", alt: "Earrings" },
    { id: 2, src: "/images/product-2.png", alt: "Ring" },
    { id: 3, src: "/images/product-3.png", alt: "Necklace" },
    { id: 4, src: "/images/product-4.png", alt: "Diamond Ring" },
  ],
  sale: [
    { id: 5, src: "/images/product-1.svg", alt: "Sale Earrings" },
    { id: 6, src: "/images/product-3.png", alt: "Sale Ring" },
  ],
  topRated: [
    { id: 7, src: "/images/product-2.png", alt: "Top Rated Necklace" },
    { id: 8, src: "/images/product-3.png", alt: "Top Rated Bracelet" },
  ],
  featured: [
    { id: 9, src: "/images/product-4.png", alt: "Featured Ring" },
    { id: 10, src: "/images/product-2.png", alt: "Featured Earrings" },
  ],
};

export default function OurProducts() {
  const [activeTab, setActiveTab] = useState<keyof typeof products>("topSeller");

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white py-20 text-center"
      id="our-products"
    >
      <p className="text-base font-medium text-[#79593D] mb-1">
        Basic And Exquisite
      </p>
      <h2 className="text-3xl md:text-5xl font-moneta mb-6">Our Products</h2>

      {/* Functional Tabs */}
      <div className="flex justify-center space-x-4 mb-10 text-sm font-medium">
        <button
          onClick={() => setActiveTab("topSeller")}
          className={`pb-1 ${activeTab === "topSeller"
            ? "text-black border-b-2 border-black"
            : "text-gray-400 hover:text-black"
            }`}
        >
          Top Seller
        </button>
        <button
          onClick={() => setActiveTab("sale")}
          className={`pb-1 ${activeTab === "sale"
            ? "text-black border-b-2 border-black"
            : "text-gray-400 hover:text-black"
            }`}
        >
          Sale
        </button>
        <button
          onClick={() => setActiveTab("topRated")}
          className={`pb-1 ${activeTab === "topRated"
            ? "text-black border-b-2 border-black"
            : "text-gray-400 hover:text-black"
            }`}
        >
          Top Rated
        </button>
        <button
          onClick={() => setActiveTab("featured")}
          className={`pb-1 ${activeTab === "featured"
            ? "text-black border-b-2 border-black"
            : "text-gray-400 hover:text-black"
            }`}
        >
          Featured
        </button>
      </div>

      {/* Product Grid */}
      <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          visible: { transition: { staggerChildren: 0.18 } },
          hidden: {}
        }}
      >
        {products[activeTab].map((product: { id: number; src: string; alt: string }) => (
          <motion.div
            key={product.id}
            className="bg-[#FFFFFF] rounded-lg shadow-lg p-4"
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="relative w-full aspect-square mb-2">
              <Image
                src={product.src}
                alt={product.alt}
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Button */}
      <div className="mt-10">
        <Button variant="outline">Shop Now →</Button>
      </div>
    </motion.section>
  );
}
