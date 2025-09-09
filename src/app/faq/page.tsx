"use client";

import { useState } from "react";
import { HelpCircle, Mail, Phone, MessageCircle, ChevronDown, Search, Star } from "lucide-react";
import { motion } from "framer-motion";
import Header from "../../components/Header";

const faqs = [
  {
    category: "Orders & Shipping",
    questions: [
      {
        q: "How long does shipping take?",
        a: "Standard shipping takes 5-7 business days, while express shipping takes 2-3 business days. International orders may take 7-18 business days depending on location."
      },
      {
        q: "Do you offer free shipping?",
        a: "Yes! We offer free standard shipping on all orders over $100 within the United States."
      },
      {
        q: "Can I track my order?",
        a: "Absolutely! You'll receive a tracking number via email once your order ships. You can track your package on our website or the carrier's site."
      }
    ]
  },
  {
    category: "Products & Quality",
    questions: [
      {
        q: "Are your diamonds certified?",
        a: "Yes, all our diamonds come with certificates from reputable grading institutes like GIA, AGS, or EGL, ensuring authenticity and quality."
      },
      {
        q: "What metals do you use?",
        a: "We use only premium metals including 14k and 18k gold (white, yellow, and rose), platinum, and sterling silver."
      },
      {
        q: "Can I customize jewelry pieces?",
        a: "Yes! We offer custom design services. Contact our design team to discuss your vision and we'll create a unique piece just for you."
      }
    ]
  },
  {
    category: "Returns & Exchanges",
    questions: [
      {
        q: "What is your return policy?",
        a: "We offer a 30-day return policy. Items must be unworn, in original condition, and include all original packaging and certificates."
      },
      {
        q: "How do I return an item?",
        a: "Contact our customer service team with your order number. We'll provide a prepaid return label and guide you through the process."
      },
      {
        q: "Can I exchange for a different size?",
        a: "Yes! We offer free exchanges for different sizes within 30 days of purchase, subject to availability."
      }
    ]
  },
  {
    category: "Care & Maintenance",
    questions: [
      {
        q: "How should I clean my jewelry?",
        a: "Use a soft cloth for daily cleaning. For deeper cleaning, use warm soapy water and a soft brush. We also offer professional cleaning services."
      },
      {
        q: "How often should I have my jewelry inspected?",
        a: "We recommend professional inspection every 6 months to check prongs, settings, and overall condition. This service is free under our warranty."
      },
      {
        q: "What's covered under warranty?",
        a: "Our lifetime warranty covers manufacturing defects, prong re-tipping, stone tightening, and professional cleaning. Normal wear and accidental damage are not covered."
      }
    ]
  }
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      faq => 
        faq.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Header */}
      <motion.header 
        className="bg-gradient-to-r from-emerald-900 to-emerald-800 text-white py-20 relative overflow-hidden"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <HelpCircle className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-6xl font-serif mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p 
            className="text-white/90 text-xl max-w-2xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Find answers to common questions about our jewelry and services
          </motion.p>
          
          {/* Search Bar */}
          <motion.div 
            className="max-w-md mx-auto relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-white/60" />
            </div>
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
            />
          </motion.div>
        </div>
      </motion.header>

      {/* Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          {/* Popular Questions */}
          <motion.section 
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex justify-center items-center mb-4">
                <Star className="w-8 h-8 text-amber-500 mr-2" />
                <h2 className="text-3xl font-serif text-gray-900">Most Popular Questions</h2>
              </div>
              <p className="text-gray-600 text-lg">Quick answers to our most frequently asked questions</p>
            </motion.div>
            
            <motion.div 
              className="grid md:grid-cols-2 gap-6 mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
                hidden: {}
              }}
            >
              <motion.div 
                className="bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                <h3 className="font-bold text-lg mb-2 text-emerald-900">Do you offer free shipping?</h3>
                <p className="text-gray-700">Yes! Free standard shipping on orders over $100 within the US.</p>
              </motion.div>
              <motion.div 
                className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                <h3 className="font-bold text-lg mb-2 text-blue-900">What's your return policy?</h3>
                <p className="text-gray-700">30-day returns on unworn items in original condition and packaging.</p>
              </motion.div>
              <motion.div 
                className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                <h3 className="font-bold text-lg mb-2 text-purple-900">Are your diamonds certified?</h3>
                <p className="text-gray-700">Yes, all diamonds come with certificates from GIA, AGS, or EGL.</p>
              </motion.div>
              <motion.div 
                className="bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                <h3 className="font-bold text-lg mb-2 text-amber-900">How long is the warranty?</h3>
                <p className="text-gray-700">Lifetime warranty on craftsmanship plus 1-year extended coverage.</p>
              </motion.div>
            </motion.div>
          </motion.section>

          {/* FAQ Categories */}
          {filteredFaqs.length === 0 && searchTerm ? (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-500 mb-2">No results found</h3>
              <p className="text-gray-400">Try searching with different keywords</p>
            </div>
          ) : (
            filteredFaqs.map((category, categoryIndex) => (
              <section key={categoryIndex} className="mb-16">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                    <HelpCircle className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h2 className="text-3xl font-serif text-emerald-900">{category.category}</h2>
                </div>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const itemId = `${categoryIndex}-${faqIndex}`;
                    const isOpen = openItems.includes(itemId);
                    
                    return (
                      <div key={faqIndex} className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                        <button
                          onClick={() => toggleItem(itemId)}
                          className="w-full text-left p-6 hover:bg-gray-50 transition-colors flex justify-between items-center rounded-2xl"
                        >
                          <h3 className="font-medium text-gray-900 pr-4 text-lg">{faq.q}</h3>
                          <ChevronDown className={`w-6 h-6 text-emerald-600 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-6">
                            <div className="border-t border-gray-100 pt-4">
                              <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            ))
          )}

          {/* Contact Section */}
          <section className="mt-20">
            <div className="bg-gradient-to-r from-emerald-900 to-emerald-800 rounded-3xl p-8 md:p-12 text-white text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <HelpCircle className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-serif mb-6">Still Have Questions?</h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Our expert customer service team is ready to provide personalized assistance for all your jewelry needs</p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="group">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Email Support</h4>
                  <p className="text-white/80 mb-2">support@laluxurygold.com</p>
                  <p className="text-white/60 text-sm">Detailed responses within 24 hours</p>
                </div>
                
                <div className="group">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Phone Support</h4>
                  <p className="text-white/80 mb-2">+234 814 973 4675</p>
                  <p className="text-white/60 text-sm">Mon-Fri 9AM-6PM EST</p>
                </div>
                
                <a href="https://api.whatsapp.com/send?phone=2348149734675" target="_blank" rel="noopener noreferrer" className="group">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">WhatsApp</h4>
                  <p className="text-white/80 mb-2">Chat with us</p>
                  <p className="text-white/60 text-sm">Quick responses</p>
                </a>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-white/70 text-sm">Average response time: Under 2 hours during business hours</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}