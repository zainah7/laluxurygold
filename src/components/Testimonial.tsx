"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "./AnimationProvider";

export default function Testimonial() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-luxury-black px-4 py-16 text-white md:py-20"
    >
      <div className="container mx-auto grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div className="relative min-h-[420px] overflow-hidden border border-luxury-gold/30">
          <Image
            src="/images/472741959_18477162709030501_3225292658738078759_n.jpg"
            alt="Laluxury Gold jewelry collection"
            fill
            className="object-cover"
          />
        </div>

        <div className="max-w-2xl md:pl-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-luxury-gold">
            Worn Beautifully
          </p>
          <blockquote className="font-serif text-3xl leading-tight md:text-5xl">
            “Every piece should feel like it belongs to the moment, whether it is a wedding, a dinner, or a regular day made finer.”
          </blockquote>
          <p className="mt-6 max-w-xl leading-8 text-luxury-gold-soft/75">
            Follow Laluxury Gold on Instagram for new arrivals, customer looks, and real styling inspiration.
          </p>
          <Link
            href="https://www.instagram.com/laluxurygold"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex h-11 items-center justify-center bg-luxury-gold px-6 text-sm font-semibold text-luxury-black transition hover:bg-luxury-gold-muted"
          >
            Follow on Instagram
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
