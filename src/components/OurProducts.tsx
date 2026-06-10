"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "./AnimationProvider";

const featuredProducts = [
  {
    name: "Bridal Jewelry Set",
    category: "Sets",
    src: "/images/Sets5.jpg",
    alt: "Bridal jewelry set",
  },
  {
    name: "Diamond Solitaire Ring",
    category: "Rings",
    src: "/images/Ring.jpg",
    alt: "Diamond solitaire ring",
  },
  {
    name: "Cuban Link Chain",
    category: "Chains",
    src: "/images/Chains.jpg",
    alt: "Gold chain",
  },
  {
    name: "Luxury Gold Watch",
    category: "Watches",
    src: "/images/Wristwatch1.jpg",
    alt: "Luxury gold watch",
  },
];

export default function OurProducts() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white px-4 py-16 md:py-20"
      id="our-products"
    >
      <div className="container mx-auto">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-luxury-gold-dark">
              Featured Collection
            </p>
            <h2 className="font-serif text-4xl text-luxury-black md:text-5xl">
              Start with the pieces everyone notices.
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex h-11 items-center justify-center border border-luxury-black px-6 text-sm font-semibold text-luxury-black transition hover:bg-luxury-black hover:text-luxury-gold md:self-auto"
          >
            View All Products
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <Link
              href="/products"
              key={product.name}
              className="group border border-luxury-gold/20 bg-white"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-luxury-gold-soft">
                <Image
                  src={product.src}
                  alt={product.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-luxury-gold-dark">
                  {product.category}
                </p>
                <h3 className="mt-2 font-serif text-2xl text-luxury-black">{product.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
