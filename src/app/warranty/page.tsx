"use client";

import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Phone } from "lucide-react";

const lifetimeCoverage = [
  "Manufacturing defects",
  "Stone tightening",
  "Prong inspection and re-tipping",
  "Professional cleaning",
  "White gold rhodium refresh where applicable",
];

const firstYearCoverage = [
  "One-time ring resizing",
  "Clasp checks and replacement",
  "Chain and bracelet link repair",
  "Earring back replacement",
  "Minor accent-stone service",
];

const exclusions = [
  "Normal wear from daily use",
  "Accidental damage, dents, or heavy impact",
  "Lost or stolen jewelry",
  "Damage caused by chemicals, water exposure, or heat",
  "Work completed by another jeweler",
];

const process = [
  {
    title: "Send photos",
    copy: "Share clear photos, your order details, and a short note about what needs attention.",
  },
  {
    title: "We review it",
    copy: "Our team checks the piece and confirms whether the service falls under warranty.",
  },
  {
    title: "Service begins",
    copy: "Once approved, we guide you through delivery and complete the repair or care service.",
  },
  {
    title: "Receive it back",
    copy: "Your jewelry is cleaned, checked, and prepared before it is returned to you.",
  },
];

export default function WarrantyPage() {
  return (
    <div className="min-h-screen bg-white text-luxury-black">
      <Header />

      <main>
        <section className="border-b border-luxury-gold/20 bg-luxury-black px-4 py-20 text-white">
          <div className="container mx-auto grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-end">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-luxury-gold">
                Warranty Care
              </p>
              <h1 className="max-w-3xl font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
                Jewelry should be worn, loved, and looked after.
              </h1>
            </div>
            <p className="max-w-xl text-base leading-8 text-luxury-gold-soft/80 md:text-lg">
              Laluxury Gold offers craftsmanship support for eligible pieces, plus care guidance to keep your jewelry looking beautiful over time. If something feels loose, dull, or out of place, reach out before it becomes a bigger issue.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-luxury-gold-dark">
                Coverage
              </p>
              <h2 className="font-serif text-3xl md:text-4xl">What we help with</h2>
              <p className="mt-4 max-w-md leading-7 text-gray-600">
                Warranty service is based on the condition of the item and the nature of the issue. These are the care areas we review most often.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <article className="border border-luxury-gold/25 p-6">
                <div className="mb-6 flex items-baseline justify-between border-b border-luxury-gold/20 pb-4">
                  <h3 className="font-serif text-2xl">Lifetime</h3>
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-luxury-gold-dark">
                    Craft
                  </span>
                </div>
                <ul className="space-y-3">
                  {lifetimeCoverage.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-gray-700">
                      <span className="mt-2 h-1.5 w-1.5 flex-none bg-luxury-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>

              <article className="border border-luxury-gold/25 p-6">
                <div className="mb-6 flex items-baseline justify-between border-b border-luxury-gold/20 pb-4">
                  <h3 className="font-serif text-2xl">First Year</h3>
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-luxury-gold-dark">
                    Service
                  </span>
                </div>
                <ul className="space-y-3">
                  {firstYearCoverage.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-gray-700">
                      <span className="mt-2 h-1.5 w-1.5 flex-none bg-luxury-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-luxury-gold-soft px-4 py-14">
          <div className="container mx-auto grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-luxury-gold-dark">
                Process
              </p>
              <h2 className="font-serif text-3xl md:text-4xl">Simple and personal</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {process.map((step, index) => (
                <div key={step.title} className="border-t border-luxury-gold/50 pt-5">
                  <span className="text-sm font-semibold text-luxury-gold-dark">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-luxury-black">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-gray-700">{step.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto grid gap-10 px-4 py-16 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-luxury-gold-dark">
              Care Notes
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">A few things to avoid</h2>
            <p className="mt-4 max-w-md leading-7 text-gray-600">
              Fine jewelry lasts longer when it is treated gently. Remove pieces before swimming, exercise, heavy cleaning, or applying perfume and lotion.
            </p>
          </div>

          <div className="border border-luxury-gold/25 p-6">
            <h3 className="mb-5 font-serif text-2xl">Not covered</h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {exclusions.map((item) => (
                <li key={item} className="border-l border-luxury-gold/60 pl-4 text-sm leading-6 text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="container mx-auto px-4 pb-20">
          <div className="grid gap-8 border border-luxury-gold/25 bg-luxury-black p-6 text-white md:grid-cols-[1fr_1.2fr] md:p-10">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-luxury-gold">
                Need Service?
              </p>
              <h2 className="font-serif text-3xl">Talk to us before sending your piece.</h2>
              <p className="mt-4 leading-7 text-luxury-gold-soft/75">
                We will review the issue first and guide you on the next step, so your jewelry gets the right care.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <a href="mailto:warranty@laluxurygold.com" className="border border-luxury-gold/30 p-4 transition hover:border-luxury-gold">
                <Mail className="mb-4 h-5 w-5 text-luxury-gold" />
                <p className="font-semibold">Email</p>
                <p className="mt-1 text-sm text-luxury-gold-soft/70">warranty@laluxurygold.com</p>
              </a>
              <a href="tel:+2348149734675" className="border border-luxury-gold/30 p-4 transition hover:border-luxury-gold">
                <Phone className="mb-4 h-5 w-5 text-luxury-gold" />
                <p className="font-semibold">Phone</p>
                <p className="mt-1 text-sm text-luxury-gold-soft/70">+234 814 973 4675</p>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=2348149734675"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-luxury-gold/30 p-4 transition hover:border-luxury-gold"
              >
                <MessageCircle className="mb-4 h-5 w-5 text-luxury-gold" />
                <p className="font-semibold">WhatsApp</p>
                <p className="mt-1 text-sm text-luxury-gold-soft/70">Send photos</p>
              </a>
            </div>

            <div className="md:col-span-2">
              <a href="https://api.whatsapp.com/send?phone=2348149734675" target="_blank" rel="noopener noreferrer">
                <Button className="bg-luxury-gold text-luxury-black hover:bg-luxury-gold-muted">
                  Start a Warranty Request
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
