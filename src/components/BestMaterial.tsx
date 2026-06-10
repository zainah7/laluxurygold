"use client";

import Image from "next/image";
import { motion } from "./AnimationProvider";

const details = [
  {
    title: "Polished finish",
    copy: "Warm gold tones selected to hold attention without overpowering the wearer.",
  },
  {
    title: "Secure styling",
    copy: "Clasps, links, and settings are checked so each piece feels ready to wear.",
  },
  {
    title: "Occasion ready",
    copy: "From bridal dressing to dinner looks, the collection is curated for real moments.",
  },
];

function BestMaterial() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white px-4 py-16 md:py-20"
    >
      <div className="container mx-auto grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-luxury-gold-dark">
            Craft & Care
          </p>
          <h2 className="max-w-xl font-serif text-4xl leading-tight text-luxury-black md:text-5xl">
            Designed to shine now and stay beautiful later.
          </h2>
          <p className="mt-5 max-w-lg leading-8 text-gray-600">
            Laluxury Gold focuses on pieces that feel special in the hand, graceful on the body, and easy to care for after the occasion ends.
          </p>

          <div className="mt-8 divide-y divide-luxury-gold/20 border-y border-luxury-gold/20">
            {details.map((detail) => (
              <div key={detail.title} className="grid gap-2 py-5 sm:grid-cols-[0.35fr_0.65fr]">
                <h3 className="font-semibold text-luxury-black">{detail.title}</h3>
                <p className="text-sm leading-7 text-gray-600">{detail.copy}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[420px] bg-luxury-gold-soft">
          <Image
            src="/images/golden-rings.svg"
            alt="Golden wedding rings"
            fill
            className="object-contain p-10"
            quality={100}
          />
          <div className="absolute bottom-6 left-6 bg-luxury-black px-5 py-4 text-white">
            <p className="text-xs uppercase tracking-[0.16em] text-luxury-gold">Signature detail</p>
            <p className="mt-1 font-serif text-2xl">Made to be kept</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default BestMaterial;
