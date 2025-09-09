"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer 
      className="bg-emerald-900 text-white py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
            hidden: {}
          }}
        >
          {/* Logo */}
          <motion.div 
            className="flex justify-center md:justify-start"
            variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <Image
              src="/images/logo.png"
              alt="Laluxury Gold"
              width={60}
              height={60}
              className="md:w-20 md:h-20 object-contain rounded-full mt-1 hover:scale-110 transition-transform duration-300"
            />
          </motion.div>

          {/* Brand Text */}
          <motion.div 
            className="text-center md:text-left"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h3 className="text-xl md:text-2xl font-serif mb-3 md:mb-4">Laluxury Gold</h3>
            <p className="text-white/80 text-sm md:text-base max-w-md leading-relaxed mx-auto md:mx-0">
              Exquisite fine jewelry crafted with passion. Discover timeless pieces for life&lsquo;s precious moments.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="text-center md:text-left"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h4 className="text-base md:text-lg font-medium mb-4 md:mb-6">Quick Links</h4>
            <ul className="space-y-2 md:space-y-4">
              <li><Link href="/" className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300 block text-sm md:text-base">Home</Link></li>
              <li><Link href="/products" className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300 block text-sm md:text-base">Products</Link></li>
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div 
            className="text-center md:text-left"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h4 className="text-base md:text-lg font-medium mb-4 md:mb-6">Support</h4>
            <ul className="space-y-2 md:space-y-4">
              <li><Link href="/returns-exchange" className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300 block text-sm md:text-base">Returns & Exchange</Link></li>
              <li><Link href="/warranty" className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300 block text-sm md:text-base">Warranty</Link></li>
              <li><Link href="/faq" className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300 block text-sm md:text-base">FAQ</Link></li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Social Media & Copyright */}
        <motion.div 
          className="border-t border-white/20 pt-8 md:pt-12 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          <motion.div 
            className="flex gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
              hidden: {}
            }}
          >
            <motion.a 
              href="https://instagram.com/laluxurygold" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              variants={{ hidden: { opacity: 0, scale: 0 }, visible: { opacity: 1, scale: 1 } }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image src="/icons/Instagram.svg" alt="Instagram" width={16} height={16} className="md:w-[18px] md:h-[18px] filter invert" />
            </motion.a>
            <motion.a 
              href="https://tiktok.com/@laluxurygold" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              variants={{ hidden: { opacity: 0, scale: 0 }, visible: { opacity: 1, scale: 1 } }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-white font-bold text-xs">TT</span>
            </motion.a>
            <motion.a 
              href="https://snapchat.com/add/laluxurygold" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              variants={{ hidden: { opacity: 0, scale: 0 }, visible: { opacity: 1, scale: 1 } }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-white text-xs md:text-sm">👻</span>
            </motion.a>
            <motion.a 
              href="https://twitter.com/laluxurygold" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              variants={{ hidden: { opacity: 0, scale: 0 }, visible: { opacity: 1, scale: 1 } }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image src="/icons/logo-twitter.svg" alt="Twitter" width={16} height={16} className="md:w-[18px] md:h-[18px] filter invert" />
            </motion.a>
            <motion.a 
              href="https://api.whatsapp.com/send?phone=2348149734675" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              variants={{ hidden: { opacity: 0, scale: 0 }, visible: { opacity: 1, scale: 1 } }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-white text-xs md:text-sm">💬</span>
            </motion.a>
          </motion.div>
          
          <div className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} Laluxury Gold. All rights reserved.
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
