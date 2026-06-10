"use client";

import { motion } from "framer-motion";
import { RotateCcw, Clock, CheckCircle, XCircle, Mail, Phone, MessageCircle, ArrowRight } from "lucide-react";
import Header from "@/components/Header";

export default function ReturnsExchangePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-luxury-black text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-luxury-gold/10 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-luxury-gold uppercase tracking-[0.3em] text-sm font-semibold mb-6">
              Customer Excellence
            </p>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
              Returns & <span className="italic">Exchanges</span>
            </h1>
            <p className="text-luxury-gold-soft/80 text-xl leading-relaxed mb-10 border-l-2 border-luxury-gold/40 pl-6">
              Your satisfaction is our ultimate pursuit. We offer a seamless 30-day window for returns and exchanges, ensuring your Laluxury Gold experience is as flawless as our jewelry.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#process" className="bg-luxury-gold text-luxury-black px-8 py-4 font-semibold text-sm tracking-widest uppercase hover:bg-luxury-gold-muted transition-colors inline-flex items-center group">
                Start a Return
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#policy" className="border border-luxury-gold/50 text-luxury-gold px-8 py-4 font-semibold text-sm tracking-widest uppercase hover:bg-luxury-gold hover:text-luxury-black transition-all inline-flex items-center">
                Full Policy
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          
          {/* Eligibility Section */}
          <section id="policy" className="mb-32">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid md:grid-cols-[0.8fr_1.2fr] gap-16 items-start"
            >
              <div>
                <h2 className="text-4xl font-serif text-luxury-black mb-6">Return Eligibility</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  To maintain the highest standards of quality and hygiene, we require returned items to meet specific criteria. Each piece undergoes a rigorous inspection by our master jewelers upon return.
                </p>
                <div className="p-8 bg-luxury-gold-soft border border-luxury-gold/20 rounded-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <Clock className="w-8 h-8 text-luxury-gold-dark" />
                    <h3 className="font-serif text-xl">30-Day Window</h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Returns and exchanges must be initiated within 30 calendar days from the date of delivery confirmation.
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <motion.div variants={itemVariants} className="space-y-6">
                  <h3 className="text-luxury-gold-dark font-semibold tracking-wider text-sm uppercase pb-2 border-b border-luxury-gold/20 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Requirements
                  </h3>
                  <ul className="space-y-6">
                    {[
                      { title: "Pristine Condition", desc: "Must be unworn and without any signs of wear or damage." },
                      { title: "Original Packaging", desc: "All original boxes, pouches, and shipping materials." },
                      { title: "Certificates", desc: "Authenticity and warranty documents must be included." },
                      { title: "Security Tags", desc: "Must remain attached and untampered if applicable." }
                    ].map((item, idx) => (
                      <li key={idx} className="group">
                        <span className="font-serif text-lg text-luxury-black block mb-1 group-hover:text-luxury-gold-dark transition-colors">{item.title}</span>
                        <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-6">
                  <h3 className="text-red-800/70 font-semibold tracking-wider text-sm uppercase pb-2 border-b border-red-100 flex items-center gap-2">
                    <XCircle className="w-4 h-4" /> Non-Returnable
                  </h3>
                  <ul className="space-y-6">
                    {[
                      { title: "Bespoke & Custom", desc: "Personalized engravings or custom-made designs." },
                      { title: "Final Sale Items", desc: "Items explicitly marked as final sale or clearance." },
                      { title: "Tampered Goods", desc: "Items that show signs of resizing or repair elsewhere." },
                      { title: "Missing Documents", desc: "Returns missing their original grading certificates." }
                    ].map((item, idx) => (
                      <li key={idx} className="group">
                        <span className="font-serif text-lg text-luxury-black block mb-1 group-hover:text-red-800/70 transition-colors">{item.title}</span>
                        <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Process Section */}
          <section id="process" className="mb-32 relative">
            <div className="text-center mb-16">
              <span className="text-luxury-gold font-semibold uppercase tracking-widest text-xs">The Experience</span>
              <h2 className="text-4xl md:text-5xl font-serif text-luxury-black mt-4">Simple, Refined Process</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-0 border border-luxury-gold/20 divide-y md:divide-y-0 md:divide-x divide-luxury-gold/20">
              {[
                { 
                  num: "01", 
                  title: "Initiate Request", 
                  desc: "Contact our concierge team with your order details and reason for the return or exchange.",
                  icon: <Mail className="w-6 h-6" />
                },
                { 
                  num: "02", 
                  title: "Secure Shipment", 
                  desc: "We provide a fully insured, prepaid return label. Secure your item in its original luxury packaging.",
                  icon: <RotateCcw className="w-6 h-6" />
                },
                { 
                  num: "03", 
                  title: "Inspection & Finalization", 
                  desc: "Upon receipt, our experts verify the item. Refunds or exchanges are processed within 5 business days.",
                  icon: <CheckCircle className="w-6 h-6" />
                }
              ].map((step, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ backgroundColor: "rgba(255, 248, 225, 0.5)" }}
                  className="p-12 transition-colors duration-500"
                >
                  <div className="text-luxury-gold/40 text-6xl font-serif mb-6">{step.num}</div>
                  <div className="flex items-center gap-3 mb-4 text-luxury-gold-dark">
                    {step.icon}
                    <h3 className="text-xl font-serif text-luxury-black">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Refund Information */}
          <section className="mb-32 bg-luxury-ink text-white p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-luxury-gold/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="grid md:grid-cols-2 gap-16 relative z-10">
              <div>
                <h2 className="text-4xl font-serif mb-8">Refund Transparency</h2>
                <div className="space-y-8">
                  {[
                    { q: "How long does it take?", a: "Once your return is received and inspected, we process refunds within 5-7 business days." },
                    { q: "How will I be refunded?", a: "Credits are issued to the original payment method used during your purchase." },
                    { q: "What about shipping costs?", a: "Original shipping fees are non-refundable unless the return is due to a product defect." }
                  ].map((item, idx) => (
                    <div key={idx} className="border-l border-luxury-gold/30 pl-6">
                      <h4 className="font-serif text-lg mb-2 text-luxury-gold-muted">{item.q}</h4>
                      <p className="text-white/70 text-sm leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center border border-luxury-gold/20 bg-luxury-black/40 backdrop-blur-sm p-12">
                 <div className="text-center">
                    <RotateCcw className="w-16 h-16 text-luxury-gold mx-auto mb-6 opacity-50" />
                    <p className="font-serif text-xl text-luxury-gold-soft">Hassle-free transitions</p>
                 </div>
              </div>
            </div>
          </section>

          {/* Contact Concierge */}
          <section>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-serif text-luxury-black mb-6">Bespoke Support</h2>
              <p className="text-gray-600">Our concierge team is available to assist you with every aspect of your return or exchange to ensure a graceful experience.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  icon: <Mail className="w-5 h-5" />, 
                  title: "Email Concierge", 
                  val: "concierge@laluxurygold.com", 
                  note: "Response within 24 hours" 
                },
                { 
                  icon: <Phone className="w-5 h-5" />, 
                  title: "Private Line", 
                  val: "+234 814 973 4675", 
                  note: "Mon–Fri, 9AM–6PM" 
                },
                { 
                  icon: <MessageCircle className="w-5 h-5" />, 
                  title: "WhatsApp", 
                  val: "Instant Messaging", 
                  href: "https://api.whatsapp.com/send?phone=2348149734675",
                  note: "Fastest response time" 
                }
              ].map((item, idx) => (
                <div key={idx} className="border border-luxury-gold/20 p-8 text-center group hover:border-luxury-gold transition-colors">
                  <div className="w-12 h-12 bg-luxury-gold-soft text-luxury-gold-dark rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-luxury-gold group-hover:text-luxury-black transition-all">
                    {item.icon}
                  </div>
                  <h4 className="font-serif text-lg mb-2">{item.title}</h4>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-luxury-black font-semibold block mb-1 hover:text-luxury-gold transition-colors">
                      {item.val}
                    </a>
                  ) : (
                    <p className="text-luxury-black font-semibold mb-1">{item.val}</p>
                  )}
                  <p className="text-xs text-gray-500 uppercase tracking-widest">{item.note}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}