"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "./AnimationProvider";

export default function GiftGuides() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#FAEFE6] py-20 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
    >
      {/* Left - Image with arch */}
      <div className="relative flex justify-center">
        {/* Arch Frame */}
        <div className="relative w-[320px] h-[420px] md:w-[380px] md:h-[500px] rounded-t-[200px] border-[2px] overflow-hidden">
          <Image
            src="/images/Sets14.jpg"
            alt="Gift Guide"
            fill
            className="object-cover"
          />
        </div>

        {/* Earrings Circle Image */}
        <div className="absolute bottom-2 right-[-12px] md:-bottom-[-18px] md:right-18 w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-white shadow-lg">
          <Image
            src="/images/rings.svg"
            alt="Earrings"
            width={96}
            height={96}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right - Text */}
      <div>
        {/* Icon */}
        <div className="mb-2">
          <Image
            src="/images/earrings.svg"
            alt="Ring Icon"
            width={30}
            height={30}
          />
        </div>

        <p className="text-sm text-gray-600 font-semibold mb-1">
          Basic And Exquisite
        </p>
        <h2 className="text-5xl font-serif font-semibold mb-4">Gift Guides</h2>
        <p className="text-[#737373] max-w-md mb-6 leading-relaxed">
          what you need, wear how you need, celebrate with when you need, and
          keep for eternity. it&lsquo;s for great minutes, minor achievements,
          and in the middle between.
        </p>
        <Button
          variant="outline"
          className="border-black text-black px-8  hover:bg-black hover:text-white bg-transparent transition"
        >
          Shop Now →
        </Button>
      </div>
    </motion.section>
  );
}
