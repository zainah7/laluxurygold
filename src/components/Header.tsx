'use client';

import { Button } from "@/components/ui/button";
import { Search, Heart, ShoppingBag, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <div className="relative p-2 bg-gradient-to-r from-emerald-900 to-emerald-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse">
                <Image 
                  src="/images/logo.png" 
                  alt="Laluxury Gold" 
                  width={50} 
                  height={50} 
                  className="object-cover rounded-full cursor-pointer filter brightness-110 contrast-125" 
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-700/20 to-emerald-900/20 animate-spin-slow"></div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center space-x-12 absolute left-1/2 transform -translate-x-1/2">
            <Link
              href="/"
              className={`text-sm hover:text-gray-600 transition-colors pb-1 ${pathname === '/' ? 'text-gray-900 font-medium border-b-2 border-emerald-600' : 'text-gray-600'}`}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={`text-sm hover:text-gray-600 transition-colors pb-1 ${pathname === '/products' ? 'text-gray-900 font-medium border-b-2 border-emerald-600' : 'text-gray-600'}`}
            >
              Products
            </Link>
            <Link
              href="/warranty"
              className={`text-sm hover:text-gray-600 transition-colors pb-1 ${pathname === '/warranty' ? 'text-gray-900 font-medium border-b-2 border-emerald-600' : 'text-gray-600'}`}
            >
              Warranty
            </Link>
            <Link
              href="/faq"
              className={`text-sm hover:text-gray-600 transition-colors pb-1 ${pathname === '/faq' ? 'text-gray-900 font-medium border-b-2 border-emerald-600' : 'text-gray-600'}`}
            >
              FAQ
            </Link>
          </nav>

          {/* Header Icons */}
          <div className="hidden md:flex items-center space-x-1">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-800 hover:bg-gray-100 rounded-full"
            >
              <Search className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-800 hover:bg-gray-100 rounded-full"
            >
              <Heart className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-800 hover:bg-gray-100 rounded-full"
            >
              <ShoppingBag className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(true)}>
              <Menu className="h-6 w-6 text-gray-800" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-white z-50 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform ease-in-out duration-300`}>
        <div className="flex justify-end p-4">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
            <X className="h-6 w-6 text-gray-800" />
          </Button>
        </div>
        <nav className="flex flex-col items-center space-y-8 mt-8">
          <Link
            href="/"
            className="text-gray-900 font-medium text-lg py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-gray-600 text-lg py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/warranty"
            className="text-gray-600 text-lg py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Warranty
          </Link>
          <Link
            href="/faq"
            className="text-gray-600 text-lg py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </Link>
        </nav>
        <div className="flex justify-center space-x-4 mt-8">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-800 hover:bg-gray-100 rounded-full"
          >
            <Search className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-800 hover:bg-gray-100 rounded-full"
          >
            <Heart className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-800 hover:bg-gray-100 rounded-full"
          >
            <ShoppingBag className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}