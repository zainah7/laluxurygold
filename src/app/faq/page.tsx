"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Mail, MessageCircle, Phone, Search } from "lucide-react";
import Header from "../../components/Header";

const faqs = [
  {
    category: "Orders & Shipping",
    intro: "Delivery, tracking, and how your order moves after confirmation.",
    questions: [
      {
        q: "How long does shipping take?",
        a: "Standard shipping usually takes 5-7 business days. Express delivery takes 2-3 business days. International delivery times vary by location.",
      },
      {
        q: "Do you offer free shipping?",
        a: "Yes. Free standard shipping is available on qualifying orders. If a promotion is active, it will be confirmed before checkout or order payment.",
      },
      {
        q: "Can I track my order?",
        a: "Yes. Once your order is dispatched, you will receive tracking details so you can follow the delivery progress.",
      },
    ],
  },
  {
    category: "Products & Quality",
    intro: "Materials, finish, and what to expect from each Laluxury Gold piece.",
    questions: [
      {
        q: "Are your diamonds certified?",
        a: "Where certification applies, stones are supplied with the relevant documentation. For a specific piece, contact us and we will confirm the details before purchase.",
      },
      {
        q: "What metals do you use?",
        a: "Our collection focuses on premium gold jewelry, with select pieces available in different finishes. Product details can be confirmed before order placement.",
      },
      {
        q: "Can I customize jewelry pieces?",
        a: "Yes. Custom requests are reviewed based on design, size, material, and availability. Send a reference or describe what you want and our team will guide you.",
      },
    ],
  },
  {
    category: "Returns & Exchanges",
    intro: "What happens if a piece needs to be returned, exchanged, or resized.",
    questions: [
      {
        q: "What is your return policy?",
        a: "Returns are reviewed within 30 days for unworn items in original condition, with packaging and any included documents intact.",
      },
      {
        q: "How do I return an item?",
        a: "Contact our team with your order details and reason for return. We will review the request and explain the next step.",
      },
      {
        q: "Can I exchange for a different size?",
        a: "Yes, where stock and item condition allow. Size exchanges are easiest when requested soon after receiving your order.",
      },
    ],
  },
  {
    category: "Care & Warranty",
    intro: "Keeping your gold clean, polished, and secure over time.",
    questions: [
      {
        q: "How should I clean my jewelry?",
        a: "Wipe pieces with a soft cloth after wear. Avoid perfume, lotion, harsh chemicals, swimming, and heavy activity while wearing fine jewelry.",
      },
      {
        q: "How often should I inspect my jewelry?",
        a: "We recommend checking clasps, prongs, and stones every few months. If anything feels loose, stop wearing the piece and contact us.",
      },
      {
        q: "What is covered under warranty?",
        a: "Warranty support covers eligible craftsmanship concerns and selected care services. Accidental damage, loss, and work done by another jeweler are not covered.",
      },
    ],
  },
];

const quickLinks = [
  "Shipping time",
  "Returns",
  "Customization",
  "Warranty",
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>(["0-0"]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState(faqs[0].category);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return faqs
      .filter((section) => !term || section.category === activeCategory)
      .map((section) => ({
        ...section,
        questions: section.questions.filter(
          (faq) =>
            !term ||
            faq.q.toLowerCase().includes(term) ||
            faq.a.toLowerCase().includes(term) ||
            section.category.toLowerCase().includes(term)
        ),
      }))
      .filter((section) => section.questions.length > 0);
  }, [activeCategory, searchTerm]);

  const totalQuestions = faqs.reduce((count, section) => count + section.questions.length, 0);

  return (
    <div className="min-h-screen bg-white text-luxury-black">
      <Header />

      <main>
        <section className="bg-luxury-black px-4 py-20 text-white">
          <div className="container mx-auto grid gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-end">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-luxury-gold">
                Client Notes
              </p>
              <h1 className="max-w-3xl font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
                Answers before you choose your next piece.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-luxury-gold-soft/78 md:text-lg">
                A quiet guide to ordering, caring for, and shopping Laluxury Gold jewelry. Search below or browse by topic.
              </p>
            </div>

            <div className="border border-luxury-gold/30 p-5">
              <label htmlFor="faq-search" className="mb-3 block text-sm font-medium text-luxury-gold">
                Search questions
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-luxury-gold" />
                <input
                  id="faq-search"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Try returns, sizing, warranty..."
                  className="h-12 w-full border border-luxury-gold/30 bg-luxury-ink pl-10 pr-4 text-sm text-white outline-none placeholder:text-white/45 focus:border-luxury-gold"
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {quickLinks.map((link) => (
                  <button
                    key={link}
                    onClick={() => setSearchTerm(link)}
                    className="border border-luxury-gold/25 px-3 py-1.5 text-xs text-luxury-gold-soft/80 transition hover:border-luxury-gold hover:text-luxury-gold"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto grid gap-12 px-4 py-16 lg:grid-cols-[260px_1fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-luxury-gold-dark">
              Topics
            </p>
            <div className="border-y border-luxury-gold/25">
              {faqs.map((section) => {
                const isActive = activeCategory === section.category;

                return (
                  <button
                    key={section.category}
                    onClick={() => {
                      setActiveCategory(section.category);
                      setSearchTerm("");
                    }}
                    className={`flex w-full items-center justify-between border-b border-luxury-gold/15 py-4 text-left text-sm transition last:border-b-0 ${
                      isActive ? "text-luxury-black" : "text-gray-500 hover:text-luxury-gold-dark"
                    }`}
                  >
                    <span>{section.category}</span>
                    <span className={isActive ? "text-luxury-gold-dark" : "text-gray-300"}>
                      {section.questions.length}
                    </span>
                  </button>
                );
              })}
            </div>
            <p className="mt-5 text-sm leading-6 text-gray-500">
              {totalQuestions} answers across ordering, quality, returns, and care.
            </p>
          </aside>

          <div>
            {filteredFaqs.length === 0 ? (
              <div className="border border-luxury-gold/25 bg-luxury-gold-soft p-8">
                <h2 className="font-serif text-3xl">No answer found</h2>
                <p className="mt-3 max-w-xl leading-7 text-gray-600">
                  Try a different keyword, or send us a message and we will help with the exact piece or order you have in mind.
                </p>
              </div>
            ) : (
              filteredFaqs.map((section, sectionIndex) => (
                <section key={section.category} className="mb-14 last:mb-0">
                  <div className="mb-6 grid gap-3 border-b border-luxury-gold/25 pb-5 md:grid-cols-[0.35fr_0.65fr]">
                    <h2 className="font-serif text-3xl">{section.category}</h2>
                    <p className="max-w-xl text-sm leading-7 text-gray-600">{section.intro}</p>
                  </div>

                  <div className="divide-y divide-luxury-gold/20">
                    {section.questions.map((faq, faqIndex) => {
                      const itemId = `${sectionIndex}-${faqIndex}`;
                      const isOpen = openItems.includes(itemId);

                      return (
                        <article key={faq.q} className="py-1">
                          <button
                            onClick={() => toggleItem(itemId)}
                            className="flex w-full items-center justify-between gap-6 py-5 text-left"
                          >
                            <span className="text-lg font-medium text-luxury-black">{faq.q}</span>
                            <span className="flex h-8 w-8 flex-none items-center justify-center border border-luxury-gold/35 text-luxury-gold-dark">
                              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                            </span>
                          </button>
                          {isOpen && (
                            <div className="max-w-3xl pb-6 pr-10">
                              <p className="leading-7 text-gray-600">{faq.a}</p>
                            </div>
                          )}
                        </article>
                      );
                    })}
                  </div>
                </section>
              ))
            )}
          </div>
        </section>

        <section className="container mx-auto px-4 pb-20">
          <div className="grid gap-8 border border-luxury-gold/25 bg-luxury-gold-soft p-6 md:grid-cols-[0.9fr_1.1fr] md:p-10">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-luxury-gold-dark">
                Still unsure?
              </p>
              <h2 className="font-serif text-3xl md:text-4xl">Ask us about the exact piece.</h2>
              <p className="mt-4 max-w-lg leading-7 text-gray-600">
                Send a photo, product name, or screenshot from Instagram and we will help with availability, sizing, care, or ordering.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <a href="mailto:support@laluxurygold.com" className="border border-luxury-gold/30 bg-white p-4 transition hover:border-luxury-gold">
                <Mail className="mb-4 h-5 w-5 text-luxury-gold-dark" />
                <p className="font-semibold">Email</p>
                <p className="mt-1 text-sm text-gray-600">support@laluxurygold.com</p>
              </a>
              <a href="tel:+2348149734675" className="border border-luxury-gold/30 bg-white p-4 transition hover:border-luxury-gold">
                <Phone className="mb-4 h-5 w-5 text-luxury-gold-dark" />
                <p className="font-semibold">Phone</p>
                <p className="mt-1 text-sm text-gray-600">+234 814 973 4675</p>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=2348149734675"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-luxury-gold/30 bg-white p-4 transition hover:border-luxury-gold"
              >
                <MessageCircle className="mb-4 h-5 w-5 text-luxury-gold-dark" />
                <p className="font-semibold">WhatsApp</p>
                <p className="mt-1 text-sm text-gray-600">Quick message</p>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
