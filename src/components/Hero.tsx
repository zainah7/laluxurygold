import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Header from "./Header";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <main className="relative">
        <div className="flex flex-row h-screen">
          {/* Left side - Image Area */}
          <div className="w-1/2 relative order-2 md:order-1 h-full">
            <div className="absolute inset-0">
              <Image
                src="/images/Sets2.jpg"
                alt="Elegant woman with jewelry"
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Play button overlay - Bottom Left */}
            <div className="absolute bottom-16 left-16">
              <div className="relative">
                {/* Rotating circular text */}
                <div className="absolute inset-0 w-24 h-24 animate-spin-slow">
                  <Image
                    src="/images/lifetime.svg"
                    alt="Lifetime Love Always"
                    width={96}
                    height={96}
                    className="w-full h-full"
                  />
                </div>
                {/* Play button in center */}
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/35 transition-all duration-300">
                    <Play
                      className="h-5 w-5 text-white ml-0.5"
                      fill="currentColor"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Icons - Left Side */}
            <div className="absolute left-8 top-1/2 transform -translate-y-1/2 block">
              <div className="flex flex-col space-y-8">
                <div className="w-6 h-6 flex items-center justify-center cursor-pointer">
                  <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                </div>
                <div className="w-6 h-6 flex items-center justify-center cursor-pointer">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                </div>
                <div className="w-6 h-6 flex items-center justify-center cursor-pointer">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                </div>
                <div className="w-6 h-6 flex items-center justify-center cursor-pointer">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-1/2 bg-emerald-900 flex items-center order-1 md:order-2 h-full">
            <div className="text-white px-8 sm:px-16 py-20">
              <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-serif mb-8 leading-none font-normal">
                Look Book
              </h1>
              <p className="text-base leading-relaxed opacity-90 mb-12 max-w-xs">
                It&apos;s for great minutes, minor achievements,<br />
                and in the middle between.
              </p>
              <Link 
                href="https://www.instagram.com/laluxurygold" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-white hover:opacity-80 transition-opacity group text-base font-normal"
              >
                Shop Now
                <span className="ml-4 transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}