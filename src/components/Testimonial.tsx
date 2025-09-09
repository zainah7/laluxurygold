"use client";


import { motion } from "./AnimationProvider";
import Image from "next/image";

export default function Testimonial() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="grid grid-cols-1 md:grid-cols-2 min-h-[400px]"
    >
      {/* Left: Image */}
      <div className="relative w-full h-[300px] md:h-auto">
        <Image
          src="/images/472741959_18477162709030501_3225292658738078759_n.jpg"
          alt="Exquisite Jewelry Collection"
          fill
          className="object-cover"
        />
      </div>

      {/* Right: Testimonial */}
      <div className="bg-[#003524] text-white flex flex-col justify-center p-8 md:p-14">
        {/* Quote icon and stars */}
        <div className="flex items-center mb-4">
          <Image
            src="/images/stars.svg"
            alt="5-star rating"
            width={100}
            height={24}
          />
        </div>

        {/* Testimonial text */}
        <p className="text-base md:text-xl italic mb-8 leading-relaxed">
          &#34;The craftsmanship is absolutely stunning! Every piece from Laluxury Gold 
          tells a story of elegance and sophistication. The attention to detail in 
          their jewelry is unmatched, and I receive compliments every time I wear 
          their pieces. This is truly luxury jewelry at its finest.&ldquo;
        </p>

      </div>
    </motion.section>
  );
}
