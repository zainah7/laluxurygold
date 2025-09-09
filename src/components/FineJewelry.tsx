"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "./AnimationProvider";

export default function FineJewelry() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#003524] text-white py-20 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
    >
      {/* Left: Text */}
      <div>
        {/* Icon */}
        <div className="mb-2">
          <Image
            src="/images/earrings.svg"
            alt="Ring Icon"
            width={30}
            height={30}
            className="filter brightness-0 invert"
          />
        </div>

        <p className="text-sm text-gray-300 font-semibold mb-1">
          Basic And Exquisite
        </p>
        <h2 className="text-5xl font-serif font-semibold mb-4">Fine Jewelry</h2>
        <p className="text-gray-300 max-w-md mb-6 leading-relaxed">
          Since fine gems is a declaration of self to really intend what you
          need, wear how you need, celebrate with when you need, and keep for
          eternity. It&lsquo;s for great minutes, minor achievements, and in the
          middle between.
        </p>
        <Button
          variant="outline"
          className="text-white border-white hover:bg-white hover:text-black px-8 py-4 transition bg-transparent"
        >
          Shop Now →
        </Button>
      </div>

      {/* Right: Image + Arch + Circle */}
      <div className="relative flex justify-center">
        {/* Arch Container */}
        <div className="relative w-[320px] h-[420px] md:w-[380px] md:h-[500px] rounded-t-[200px] overflow-hidden border-2 border-white">
          <Image
            src="/images/Sets7.jpg"
            alt="Fine Jewelry"
            fill
            className="object-cover"
          />
        </div>

        {/* Overlapping Product Image */}
        <div className="absolute -bottom-8 left-6 md:-bottom-[-6px] md:left-18 w-24 h-24 rounded-full flex items-center justify-center shadow-md">
          <Image
            src="/images/golds.svg"
            alt="Rings"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
      </div>
    </motion.section>
  );
}
