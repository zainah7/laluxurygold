"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "../../components/AnimationProvider";
import { useEffect, useMemo, useState } from "react";
import Header from "../../components/Header";
import { ArrowUpRight, Instagram, MessageCircle, Search, Sparkles } from "lucide-react";

const instagramUrl = "https://www.instagram.com/laluxurygold";
const whatsappUrl = "https://api.whatsapp.com/send?phone=2348149734675";

const categories = [
  { id: "all", label: "All" },
  { id: "sets", label: "Sets" },
  { id: "rings", label: "Rings" },
  { id: "earrings", label: "Earrings" },
  { id: "chains", label: "Chains" },
  { id: "watches", label: "Watches" },
  { id: "bridal", label: "Bridal" },
] as const;

type Category = (typeof categories)[number]["id"];

const categoryHighlights = [
  {
    label: "Statement Sets",
    src: "/images/Sets13.jpg",
    category: "sets",
    copy: "Coordinated gold looks for weddings, events, and standout evenings.",
  },
  {
    label: "Rings",
    src: "/images/Ring.jpg",
    category: "rings",
    copy: "Everyday bands, engagement styles, and bold finishing pieces.",
  },
  {
    label: "Chains",
    src: "/images/Chains3.jpg",
    category: "chains",
    copy: "Layer-ready chains with polished shine and clean detail.",
  },
  {
    label: "Wristwatches",
    src: "/images/Wristwatch1.jpg",
    category: "watches",
    copy: "Luxury timepieces with a refined gold presence.",
  },
] satisfies Array<{
  label: string;
  src: string;
  category: Category;
  copy: string;
}>;

const products = [
  { id: 1, category: "sets", src: "/images/Sets1.jpg", alt: "Gold jewelry set", name: "Royal Gold Set", detail: "Necklace and earrings set" },
  { id: 2, category: "sets", src: "/images/Sets2.jpg", alt: "Elegant jewelry set", name: "Luxe Occasion Set", detail: "Polished event-ready finish" },
  { id: 3, category: "sets", src: "/images/Sets3.jpg", alt: "Wedding ring set", name: "Wedding Ring Set", detail: "Classic matching rings" },
  { id: 4, category: "sets", src: "/images/Sets4.jpg", alt: "Gold bracelet set", name: "Gold Bracelet Set", detail: "Layered wrist styling" },
  { id: 5, category: "sets", src: "/images/Sets5.jpg", alt: "Bridal jewelry set", name: "Bridal Jewelry Set", detail: "Ceremony-ready sparkle" },
  { id: 6, category: "sets", src: "/images/Sets7.jpg", alt: "Fine jewelry set", name: "Fine Jewelry Set", detail: "Elegant complete look" },
  { id: 7, category: "sets", src: "/images/Sets8.jpg", alt: "Gold occasion set", name: "Golden Occasion Set", detail: "Warm gold detailing" },
  { id: 8, category: "sets", src: "/images/Sets9.jpg", alt: "Luxury jewelry set", name: "Luxury Gift Set", detail: "Perfect for gifting" },
  { id: 9, category: "bridal", src: "/images/Sets10.jpg", alt: "Bridal gold set", name: "Signature Bridal Set", detail: "For traditional celebrations" },
  { id: 10, category: "bridal", src: "/images/Sets11.jpg", alt: "Gold wedding set", name: "Wedding Day Glow", detail: "Statement wedding styling" },
  { id: 11, category: "bridal", src: "/images/Sets12.jpg", alt: "Bridal necklace set", name: "Heirloom Bridal Set", detail: "Timeless gold elegance" },
  { id: 12, category: "bridal", src: "/images/Sets13.jpg", alt: "Diamond earring set", name: "Diamond Earring Set", detail: "Detailed bridal accents" },
  { id: 13, category: "bridal", src: "/images/Sets14.jpg", alt: "Gift guide jewelry", name: "Celebration Gift Set", detail: "Made for memorable days" },
  { id: 14, category: "bridal", src: "/images/Sets15.jpg", alt: "Bridal gold collection", name: "Golden Bride Collection", detail: "Rich ceremonial finish" },
  { id: 15, category: "rings", src: "/images/Ring.jpg", alt: "Diamond ring", name: "Diamond Solitaire Ring", detail: "Clean, classic sparkle" },
  { id: 16, category: "rings", src: "/images/ring5.png", alt: "Gold ring", name: "Statement Gold Ring", detail: "Bold shine for daily wear" },
  { id: 17, category: "rings", src: "/images/ring6.png", alt: "Wedding band set", name: "Wedding Band Set", detail: "Smooth matching bands" },
  { id: 18, category: "rings", src: "/images/ring7.png", alt: "Engagement ring", name: "Vintage Engagement Ring", detail: "Romantic detailed setting" },
  { id: 19, category: "rings", src: "/images/ring8.png", alt: "Gold fashion ring", name: "Luxury Fashion Ring", detail: "A polished finishing touch" },
  { id: 20, category: "earrings", src: "/images/earrings.png", alt: "Diamond earrings", name: "Diamond Stud Earrings", detail: "Simple everyday brilliance" },
  { id: 21, category: "earrings", src: "/images/earrings2.png", alt: "Gold hoop earrings", name: "Gold Hoop Earrings", detail: "Soft shine, easy styling" },
  { id: 22, category: "earrings", src: "/images/earrings3.png", alt: "Pearl drop earrings", name: "Pearl Drop Earrings", detail: "Graceful evening detail" },
  { id: 23, category: "earrings", src: "/images/earrings4.png", alt: "Chandelier earrings", name: "Chandelier Earrings", detail: "Statement party finish" },
  { id: 24, category: "chains", src: "/images/Chains.jpg", alt: "Gold chain", name: "Cuban Link Chain", detail: "Bold and structured" },
  { id: 25, category: "chains", src: "/images/Chains2.jpg", alt: "Rope chain", name: "Rope Chain", detail: "Classic layered texture" },
  { id: 26, category: "chains", src: "/images/Chains3.jpg", alt: "Diamond tennis chain", name: "Diamond Tennis Chain", detail: "Clean shimmer line" },
  { id: 27, category: "chains", src: "/images/Chains4.jpg", alt: "Pendant chain", name: "Pendant Chain Set", detail: "Minimal gold presence" },
  { id: 28, category: "chains", src: "/images/Chains5.jpg", alt: "Luxury chain", name: "Luxury Link Chain", detail: "Made for layering" },
  { id: 29, category: "chains", src: "/images/Chains6.jpg", alt: "Gold necklace chain", name: "Golden Necklace Chain", detail: "Smooth everyday shine" },
  { id: 30, category: "watches", src: "/images/Wristwatch1.jpg", alt: "Gold watch", name: "Luxury Gold Watch", detail: "Refined wrist statement" },
  { id: 31, category: "watches", src: "/images/Wristwatch2.jpg", alt: "Diamond bezel watch", name: "Diamond Bezel Watch", detail: "Sparkle around the dial" },
  { id: 32, category: "watches", src: "/images/Wristwatch3.jpg", alt: "Rose gold watch", name: "Rose Gold Timepiece", detail: "Soft gold tone" },
  { id: 33, category: "watches", src: "/images/Wristwatch4.jpg", alt: "Classic wristwatch", name: "Classic Wristwatch", detail: "Polished daily luxury" },
] satisfies Array<{
  id: number;
  category: Exclude<Category, "all">;
  src: string;
  alt: string;
  name: string;
  detail: string;
}>;

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const query = params.get("search");

    if (query) {
      setSearchTerm(query);
    }
  }, []);

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory = activeCategory === "all" || product.category === activeCategory;
      const matchesSearch =
        !normalizedSearch ||
        product.name.toLowerCase().includes(normalizedSearch) ||
        product.detail.toLowerCase().includes(normalizedSearch) ||
        product.category.toLowerCase().includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-luxury-black px-4 pb-14 pt-16 text-white"
      >
        <div className="container mx-auto grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 border border-luxury-gold/35 px-4 py-2 text-sm text-luxury-gold">
              <Sparkles className="h-4 w-4" />
              Instagram inspired collection
            </div>
            <h1 className="mb-6 font-serif text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
              Shop Laluxury Gold pieces made for every occasion.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-luxury-gold-soft/80 md:text-lg">
              Explore rings, sets, chains, earrings, and timepieces curated from the Laluxury Gold collection. See more styles and new arrivals on Instagram.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                <Button className="bg-luxury-gold text-luxury-black hover:bg-luxury-gold-muted">
                  <Instagram className="h-4 w-4" />
                  View Instagram
                </Button>
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black">
                  <MessageCircle className="h-4 w-4" />
                  Ask for Price
                </Button>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {categoryHighlights.map((category) => (
              <button
                key={category.label}
                onClick={() => setActiveCategory(category.category)}
                className="group relative min-h-[210px] overflow-hidden border border-luxury-gold/25 text-left"
              >
                <Image
                  src={category.src}
                  alt={category.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
                <div className="absolute bottom-0 p-4">
                  <p className="mb-2 text-lg font-semibold text-luxury-gold">{category.label}</p>
                  <p className="text-xs leading-relaxed text-white/80">{category.copy}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </motion.section>

      <section className="container mx-auto px-4 py-14">
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-1 text-sm font-semibold text-luxury-gold-dark">
              Basic And Exquisite
            </p>
            <h2 className="font-serif text-3xl text-luxury-black md:text-5xl">Our Products</h2>
          </div>

          <div className="relative w-full lg:max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-luxury-gold-dark" />
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search jewelry"
              className="w-full border border-luxury-gold/30 bg-white py-3 pl-10 pr-4 text-sm text-luxury-black outline-none transition focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20"
            />
          </div>
        </div>

        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((category) => {
            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`border px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "border-luxury-black bg-luxury-black text-luxury-gold"
                    : "border-luxury-gold/30 bg-white text-luxury-black hover:border-luxury-gold hover:text-luxury-gold-dark"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <motion.div
          key={`${activeCategory}-${searchTerm}`}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            visible: { transition: { staggerChildren: 0.08 } },
            hidden: {},
          }}
        >
          {filteredProducts.map((product) => (
            <motion.article
              key={product.id}
              className="group overflow-hidden border border-luxury-gold/20 bg-white shadow-lg shadow-luxury-gold/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <div className="relative aspect-square overflow-hidden bg-luxury-gold-soft">
                <Image
                  src={product.src}
                  alt={product.alt}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute left-3 top-3 bg-luxury-black px-3 py-1 text-xs font-medium capitalize text-luxury-gold">
                  {product.category}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-luxury-black">{product.name}</h3>
                <p className="mt-1 min-h-10 text-sm leading-relaxed text-gray-600">{product.detail}</p>
                <div className="mt-4 flex items-center gap-2">
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 bg-luxury-black px-3 py-2 text-xs font-medium text-luxury-gold transition hover:bg-luxury-ink"
                  >
                    <Instagram className="h-3.5 w-3.5" />
                    Instagram
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center border border-luxury-gold/40 px-3 py-2 text-xs font-medium text-luxury-black transition hover:border-luxury-black hover:bg-luxury-gold-soft"
                    aria-label={`Ask about ${product.name}`}
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="border border-luxury-gold/30 bg-luxury-gold-soft p-10 text-center">
            <h3 className="mb-2 text-xl font-semibold text-luxury-black">No products found</h3>
            <p className="text-gray-600">Try another category or search term.</p>
          </div>
        )}

        <div className="mt-14 bg-luxury-black p-8 text-center text-white md:p-12">
          <p className="mb-3 text-sm font-semibold uppercase text-luxury-gold">
            New pieces arrive first on Instagram
          </p>
          <h3 className="mx-auto mb-5 max-w-2xl font-serif text-3xl md:text-4xl">
            Follow Laluxury Gold for fresh drops, styling videos, and real customer looks.
          </h3>
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
            <Button className="bg-luxury-gold text-luxury-black hover:bg-luxury-gold-muted">
              Visit @laluxurygold
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
