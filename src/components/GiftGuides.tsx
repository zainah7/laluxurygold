"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "./AnimationProvider";

const occasions = [
  {
    title: "For Her Day",
    copy: "Elegant sets and earrings that feel personal without trying too hard.",
    image: "/images/Sets14.jpg",
  },
  {
    title: "For Bridal Moments",
    copy: "Gold pieces with enough presence for ceremonies, portraits, and entrances.",
    image: "/images/Sets13.jpg",
  },
  {
    title: "For Everyday Shine",
    copy: "Rings and chains that make a simple outfit look considered.",
    image: "/images/ring8.png",
  },
];

export default function GiftGuides() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-luxury-gold-soft px-4 py-16 md:py-20"
    >
      <div className="container mx-auto">
        <div className="mb-10 grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-luxury-gold-dark">
              Curated Picks
            </p>
            <h2 className="font-serif text-4xl text-luxury-black md:text-5xl">
              Jewelry for the moment she will remember.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-luxury-ink/70">
            Choose from bridal sets, refined earrings, polished rings, and gold chains made to suit celebrations, gifting, and daily luxury.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {occasions.map((item) => (
            <Link
              key={item.title}
              href="/products"
              className="group block border border-luxury-gold/25 bg-white"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-luxury-gold-soft">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-2xl text-luxury-black">{item.title}</h3>
                <p className="mt-2 min-h-14 text-sm leading-6 text-gray-600">{item.copy}</p>
                <span className="mt-5 inline-flex text-sm font-semibold text-luxury-gold-dark">
                  Explore pieces →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
