"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "./AnimationProvider";

export default function FineJewelry() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-luxury-black px-4 py-16 text-white md:py-24"
    >
      <div className="container mx-auto grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="grid grid-cols-2 gap-4">
          <div className="relative h-[430px] overflow-hidden border border-luxury-gold/30">
            <Image
              src="/images/Sets7.jpg"
              alt="Fine gold jewelry set"
              fill
              className="object-cover"
            />
          </div>
          <div className="grid gap-4">
            <div className="relative h-[205px] overflow-hidden border border-luxury-gold/30">
              <Image
                src="/images/earrings2.png"
                alt="Gold earrings"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[205px] overflow-hidden border border-luxury-gold/30">
              <Image
                src="/images/Wristwatch2.jpg"
                alt="Luxury gold wristwatch"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="max-w-xl lg:pl-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-luxury-gold">
            Fine Jewelry
          </p>
          <h2 className="font-serif text-4xl leading-tight md:text-6xl">
            Pieces that finish the look, not just fill the box.
          </h2>
          <p className="mt-6 text-base leading-8 text-luxury-gold-soft/76">
            From delicate earrings to bold bridal sets, each Laluxury Gold piece is chosen for shine, shape, and how beautifully it photographs in real life.
          </p>

          <div className="mt-8 grid gap-5 border-y border-luxury-gold/20 py-6 sm:grid-cols-3">
            <div>
              <p className="font-serif text-3xl text-luxury-gold">01</p>
              <p className="mt-1 text-sm text-white/65">Statement sets</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-luxury-gold">02</p>
              <p className="mt-1 text-sm text-white/65">Daily rings</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-luxury-gold">03</p>
              <p className="mt-1 text-sm text-white/65">Gift-ready pieces</p>
            </div>
          </div>

          <Link
            href="/products"
            className="mt-8 inline-flex h-11 items-center justify-center border border-luxury-gold px-6 text-sm font-semibold text-luxury-gold transition hover:bg-luxury-gold hover:text-luxury-black"
          >
            Browse Fine Jewelry
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
