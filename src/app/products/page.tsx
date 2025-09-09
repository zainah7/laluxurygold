"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "../../components/AnimationProvider";
import { useState } from "react";
import Header from "../../components/Header";

const products = {
  topSeller: [
    { id: 1, src: "/images/product-1.svg", alt: "Gold Chain Necklace", name: "Luxury Gold Chain" },
    { id: 2, src: "/images/product-2.png", alt: "Diamond Ring Set", name: "Diamond Engagement Set" },
    { id: 3, src: "/images/product-3.png", alt: "Gold Bracelet", name: "Elegant Gold Bracelet" },
    { id: 4, src: "/images/product-4.png", alt: "Pearl Earrings", name: "Classic Pearl Earrings" },
  ],
  ring: [
    { id: 5, src: "/images/Ring.jpg", alt: "Diamond Ring", name: "Diamond Solitaire Ring" },
    { id: 6, src: "/images/ring5.png", alt: "Gold Ring", name: "Statement Gold Ring" },
    { id: 7, src: "/images/ring6.png", alt: "Wedding Ring", name: "Wedding Band Set" },
    { id: 8, src: "/images/ring7.png", alt: "Engagement Ring", name: "Vintage Engagement Ring" },
  ],

  earrings: [
    { id: 13, src: "/images/earrings.png", alt: "Diamond Earrings", name: "Diamond Stud Earrings" },
    { id: 14, src: "/images/earrings2.png", alt: "Gold Earrings", name: "Gold Hoop Earrings" },
    { id: 15, src: "/images/earrings3.png", alt: "Pearl Earrings", name: "Pearl Drop Earrings" },
    { id: 16, src: "/images/earrings4.png", alt: "Chandelier Earrings", name: "Chandelier Earrings" },
  ],
  wristwatch: [
    { id: 17, src: "/images/Wristwatch1.jpg", alt: "Gold Watch", name: "Luxury Gold Watch" },
    { id: 18, src: "/images/Wristwatch2.jpg", alt: "Diamond Watch", name: "Diamond Bezel Watch" },
    { id: 19, src: "/images/Wristwatch3.jpg", alt: "Rose Gold Watch", name: "Rose Gold Timepiece" },
    { id: 20, src: "/images/Wristwatch4.jpg", alt: "Classic Watch", name: "Classic Wristwatch" },
  ],
  sets: [
    { id: 21, src: "/images/Sets5.jpg", alt: "Jewelry Set", name: "Bridal Jewelry Set" },
    { id: 22, src: "/images/Sets13.jpg", alt: "Earring Set", name: "Diamond Earring Set" },
    { id: 23, src: "/images/Sets3.jpg", alt: "Ring Set", name: "Wedding Ring Set" },
    { id: 24, src: "/images/Sets4.jpg", alt: "Bracelet Set", name: "Gold Bracelet Set" },
  ],
  chains: [
    { id: 25, src: "/images/Chains.jpg", alt: "Gold Chain", name: "Cuban Link Chain" },
    { id: 26, src: "/images/Chains2.jpg", alt: "Silver Chain", name: "Silver Rope Chain" },
    { id: 27, src: "/images/Chains3.jpg", alt: "Diamond Chain", name: "Diamond Tennis Chain" },
    { id: 28, src: "/images/Chains4.jpg", alt: "Pendant Chain", name: "Pendant Chain Set" },
  ],
};

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState<keyof typeof products>("topSeller");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white py-8 px-4 text-center mt-16"
      >
        <p className="text-base font-medium text-[#79593D] mb-1">
          Basic And Exquisite
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-moneta mb-6">Our Products</h2>

        {/* Functional Tabs */}
        <div className="flex justify-center flex-wrap gap-x-3 sm:gap-x-6 gap-y-2 mb-8 sm:mb-10 text-xs sm:text-sm font-medium">
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
            onClick={() => setActiveTab("ring")}
            className={`pb-1 ${activeTab === "ring"
              ? "text-black border-b-2 border-black"
              : "text-gray-400 hover:text-black"
              }`}
          >
            Ring
          </button>

          <button
            onClick={() => setActiveTab("earrings")}
            className={`pb-1 ${activeTab === "earrings"
              ? "text-black border-b-2 border-black"
              : "text-gray-400 hover:text-black"
              }`}
          >
            Earrings
          </button>
          <button
            onClick={() => setActiveTab("wristwatch")}
            className={`pb-1 ${activeTab === "wristwatch"
              ? "text-black border-b-2 border-black"
              : "text-gray-400 hover:text-black"
              }`}
          >
            Wristwatch
          </button>
          <button
            onClick={() => setActiveTab("sets")}
            className={`pb-1 ${activeTab === "sets"
              ? "text-black border-b-2 border-black"
              : "text-gray-400 hover:text-black"
              }`}
          >
            Sets
          </button>
          <button
            onClick={() => setActiveTab("chains")}
            className={`pb-1 ${activeTab === "chains"
              ? "text-black border-b-2 border-black"
              : "text-gray-400 hover:text-black"
              }`}
          >
            Chains
          </button>
        </div>

        {/* Product Grid */}
        <motion.div 
          key={activeTab}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 px-2 sm:px-4 md:px-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.18 } },
            hidden: {}
          }}
        >
          {products[activeTab].map((product: { id: number; src: string; alt: string; name: string }) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src={product.src}
                  alt={product.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />

              </div>
              <div className="p-2 sm:p-3 md:p-4">
                <h3 className="font-medium text-gray-900 text-xs sm:text-sm">{product.name}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <div className="mt-8 sm:mt-12">
          <a href="https://www.instagram.com/laluxurygold" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-sm sm:text-base hover:bg-emerald-50 hover:border-emerald-600 hover:text-emerald-600 transition-colors">
              View All Products →
            </Button>
          </a>
        </div>
      </motion.section>
    </div>
  );
}