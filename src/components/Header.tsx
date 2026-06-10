'use client';

import { Button } from "@/components/ui/button";
import { Search, Heart, ShoppingBag, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { type FormEvent, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const iconButtonClass =
    "rounded-full border border-luxury-gold/30 text-luxury-gold hover:border-luxury-gold hover:bg-luxury-gold hover:text-luxury-black hover:shadow-md hover:shadow-luxury-gold/20 transition-all duration-300 hover:-translate-y-0.5";

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = searchTerm.trim();

    setIsSearchOpen(false);
    setIsMenuOpen(false);
    router.push(query ? `/products?search=${encodeURIComponent(query)}` : "/products");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-luxury-black border-b border-luxury-gold/25">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <div className="relative p-2 bg-gradient-to-r from-luxury-black to-luxury-gold rounded-full shadow-lg shadow-luxury-gold/20 hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse">
                <Image 
                  src="/images/logo.png" 
                  alt="Laluxury Gold" 
                  width={50} 
                  height={50} 
                  className="object-cover rounded-full cursor-pointer filter brightness-110 contrast-125" 
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-luxury-gold/25 to-luxury-black/20 animate-spin-slow"></div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center space-x-12 absolute left-1/2 transform -translate-x-1/2">
            <Link
              href="/"
              className={`text-sm hover:text-luxury-gold transition-colors pb-1 ${pathname === '/' ? 'text-luxury-gold font-medium border-b-2 border-luxury-gold' : 'text-white/75'}`}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={`text-sm hover:text-luxury-gold transition-colors pb-1 ${pathname === '/products' ? 'text-luxury-gold font-medium border-b-2 border-luxury-gold' : 'text-white/75'}`}
            >
              Products
            </Link>
            <Link
              href="/warranty"
              className={`text-sm hover:text-luxury-gold transition-colors pb-1 ${pathname === '/warranty' ? 'text-luxury-gold font-medium border-b-2 border-luxury-gold' : 'text-white/75'}`}
            >
              Warranty
            </Link>
            <Link
              href="/faq"
              className={`text-sm hover:text-luxury-gold transition-colors pb-1 ${pathname === '/faq' ? 'text-luxury-gold font-medium border-b-2 border-luxury-gold' : 'text-white/75'}`}
            >
              FAQ
            </Link>
          </nav>

          {/* Header Icons */}
          <div className="hidden md:flex items-center gap-2">
            {isSearchOpen && (
              <form onSubmit={handleSearchSubmit} className="relative">
                <input
                  autoFocus
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search jewelry"
                  className="h-9 w-48 border border-luxury-gold/40 bg-luxury-ink px-3 text-sm text-white outline-none placeholder:text-white/45 focus:border-luxury-gold"
                />
              </form>
            )}
            <Button
              variant="ghost"
              size="icon"
              className={iconButtonClass}
              onClick={() => setIsSearchOpen((value) => !value)}
              aria-label="Search products"
            >
              <Search className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={iconButtonClass}
              asChild
            >
              <a href="https://www.instagram.com/laluxurygold" target="_blank" rel="noopener noreferrer" aria-label="View Laluxury Gold on Instagram">
                <Heart className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={iconButtonClass}
              asChild
            >
              <Link href="/products" aria-label="View products">
                <ShoppingBag className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(true)}>
              <Menu className="h-6 w-6 text-luxury-gold" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-luxury-black z-50 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform ease-in-out duration-300`}>
        <div className="flex justify-end p-4">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
            <X className="h-6 w-6 text-luxury-gold" />
          </Button>
        </div>
        <nav className="flex flex-col items-center space-y-8 mt-8">
          <Link
            href="/"
            className="text-luxury-gold font-medium text-lg py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-white/75 text-lg py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/warranty"
            className="text-white/75 text-lg py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Warranty
          </Link>
          <Link
            href="/faq"
            className="text-white/75 text-lg py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </Link>
        </nav>
        {isSearchOpen && (
          <form onSubmit={handleSearchSubmit} className="mx-auto mt-8 w-full max-w-xs px-4">
            <input
              autoFocus
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search jewelry"
              className="h-11 w-full border border-luxury-gold/40 bg-luxury-ink px-3 text-sm text-white outline-none placeholder:text-white/45 focus:border-luxury-gold"
            />
          </form>
        )}
        <div className="flex justify-center space-x-4 mt-8">
          <Button
            variant="ghost"
            size="icon"
            className={iconButtonClass}
            onClick={() => setIsSearchOpen((value) => !value)}
            aria-label="Search products"
          >
            <Search className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={iconButtonClass}
            asChild
          >
            <a href="https://www.instagram.com/laluxurygold" target="_blank" rel="noopener noreferrer" aria-label="View Laluxury Gold on Instagram">
              <Heart className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={iconButtonClass}
            asChild
          >
            <Link href="/products" onClick={() => setIsMenuOpen(false)} aria-label="View products">
              <ShoppingBag className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
