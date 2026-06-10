"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "./Header";

const heroSlides = [
  {
    src: "/images/Sets2.jpg",
    alt: "Laluxury Gold statement jewelry set",
    eyebrow: "Statement Sets",
    title: "Gold for grand entrances",
  },
  {
    src: "/images/Sets7.jpg",
    alt: "Elegant woman wearing Laluxury Gold jewelry",
    eyebrow: "Styled In Gold",
    title: "A portrait of soft luxury",
  },
  {
    src: "/images/Sets1.jpg",
    alt: "Radiant luxury gold jewelry collection from Laluxury Gold",
    eyebrow: "Radiant Luxury",
    title: "Embrace your golden glow",
  },
  {
    src: "/images/Sets8.jpg",
    alt: "Stunning gold jewelry showcase from Laluxury Gold",
    eyebrow: "Golden Elegance",
    title: "Where gold meets grace",
  },
];

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  const goToPreviousSlide = () => {
    setActiveSlide((current) =>
      current === 0 ? heroSlides.length - 1 : current - 1
    );
  };

  const goToNextSlide = () => {
    setActiveSlide((current) => (current + 1) % heroSlides.length);
  };

  return (
    <div className="min-h-screen bg-luxury-black text-white">
      <Header />

      <main className="relative overflow-hidden">
        <section className="container mx-auto grid min-h-[calc(100vh-64px)] gap-10 px-4 py-14 md:grid-cols-[0.9fr_1.1fr] md:items-center lg:gap-16">
          <div className="max-w-2xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-luxury-gold">
              Laluxury Gold
            </p>
            <h1 className="font-serif text-5xl leading-[0.98] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
              Gold that speaks before you do.
            </h1>
            <p className="mt-7 max-w-lg text-base leading-8 text-luxury-gold-soft/78 md:text-lg">
              Fine gold jewelry, bridal sets, rings, watches, and chains selected for moments that deserve presence.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="inline-flex h-11 items-center justify-center bg-luxury-gold px-6 text-sm font-semibold text-luxury-black transition hover:bg-luxury-gold-muted"
              >
                Shop Collection
              </Link>
              <Link
                href="https://www.instagram.com/laluxurygold"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center border border-luxury-gold/50 px-6 text-sm font-semibold text-luxury-gold transition hover:border-luxury-gold hover:bg-luxury-gold hover:text-luxury-black"
              >
                View Instagram
              </Link>
            </div>

            <div className="mt-12 grid max-w-lg grid-cols-3 border-y border-luxury-gold/20 py-5 text-sm">
              <div>
                <p className="font-serif text-2xl text-luxury-gold">18k</p>
                <p className="mt-1 text-white/60">Gold looks</p>
              </div>
              <div className="border-x border-luxury-gold/20 px-5">
                <p className="font-serif text-2xl text-luxury-gold">Bridal</p>
                <p className="mt-1 text-white/60">Sets available</p>
              </div>
              <div className="pl-5">
                <p className="font-serif text-2xl text-luxury-gold">Ready</p>
                <p className="mt-1 text-white/60">To style</p>
              </div>
            </div>
          </div>

          <div className="relative min-h-[520px]">
            <div className="relative h-[520px] overflow-hidden border border-luxury-gold/35 bg-luxury-ink">
              {heroSlides.map((slide, index) => (
                <div
                  key={slide.src}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    activeSlide === index ? "opacity-100" : "opacity-0"
                  }`}
                  aria-hidden={activeSlide !== index}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    priority={index === 0}
                    sizes="(min-width: 768px) 55vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
              ))}

              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-luxury-gold">
                  {heroSlides[activeSlide].eyebrow}
                </p>
                <p className="mt-2 max-w-sm font-serif text-3xl leading-tight text-white">
                  {heroSlides[activeSlide].title}
                </p>
              </div>

              <div className="absolute right-4 top-4 flex gap-2">
                <button
                  type="button"
                  onClick={goToPreviousSlide}
                  className="flex h-10 w-10 items-center justify-center border border-luxury-gold/50 bg-luxury-black/65 text-luxury-gold backdrop-blur transition hover:bg-luxury-gold hover:text-luxury-black"
                  aria-label="Previous hero image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={goToNextSlide}
                  className="flex h-10 w-10 items-center justify-center border border-luxury-gold/50 bg-luxury-black/65 text-luxury-gold backdrop-blur transition hover:bg-luxury-gold hover:text-luxury-black"
                  aria-label="Next hero image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-4">
              <div className="flex gap-2">
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.src}
                    type="button"
                    onClick={() => setActiveSlide(index)}
                    className={`h-1.5 transition-all ${
                      activeSlide === index
                        ? "w-10 bg-luxury-gold"
                        : "w-5 bg-luxury-gold/30 hover:bg-luxury-gold/60"
                    }`}
                    aria-label={`Show ${slide.eyebrow}`}
                  />
                ))}
              </div>
              <p className="text-sm text-luxury-gold-soft/60">
                {String(activeSlide + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
