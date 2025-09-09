"use client";

import { RotateCcw, Shield, Clock, CheckCircle, XCircle, Mail, Phone, MessageCircle } from "lucide-react";
import Header from "@/components/Header";

export default function ReturnsExchangePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-900 to-emerald-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <RotateCcw className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Returns & Exchange</h1>
          <p className="text-white/90 text-xl max-w-2xl mx-auto leading-relaxed">30-day hassle-free returns and exchanges with full satisfaction guarantee</p>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* 30-Day Guarantee */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-12 h-12 text-emerald-600" />
              </div>
              <h2 className="text-4xl font-serif mb-4 text-gray-900">30-Day Guarantee</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">Not completely satisfied? Return your jewelry within 30 days for a full refund or exchange</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Eligible for Return</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Unworn jewelry</span>
                      <p className="text-sm text-gray-600">Items in pristine, original condition</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Original packaging</span>
                      <p className="text-sm text-gray-600">All boxes, pouches, and materials included</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Certificate included</span>
                      <p className="text-sm text-gray-600">Authentication and warranty documents</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Within 30 days</span>
                      <p className="text-sm text-gray-600">From delivery date confirmation</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <XCircle className="w-8 h-8 text-red-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Not Eligible</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <XCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Custom/personalized items</span>
                      <p className="text-sm text-gray-600">Engraved or specially made pieces</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Worn or damaged items</span>
                      <p className="text-sm text-gray-600">Shows signs of wear or damage</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Missing packaging</span>
                      <p className="text-sm text-gray-600">Without original boxes or certificates</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Final sale items</span>
                      <p className="text-sm text-gray-600">Clearance and promotional items</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Exchange Process */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif mb-4 text-gray-900">Simple Exchange Process</h2>
              <p className="text-gray-600 text-lg">Three easy steps to exchange or return your jewelry</p>
            </div>
            <div className="relative">
              {/* Connection Line */}
              <div className="hidden md:block absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
                <div className="flex justify-between px-16">
                  <div className="w-px h-32 bg-gradient-to-b from-emerald-300 to-transparent"></div>
                  <div className="w-px h-32 bg-gradient-to-b from-emerald-300 to-transparent"></div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 relative z-10">
                <div className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold">1</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-200 rounded-full animate-pulse"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Contact Us</h3>
                  <p className="text-gray-600 leading-relaxed">Email us with your order number and reason for exchange. We'll guide you through the process.</p>
                </div>
                
                <div className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold">2</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-200 rounded-full animate-pulse"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Ship Back</h3>
                  <p className="text-gray-600 leading-relaxed">Use our prepaid return label to send the item back safely and securely to our facility.</p>
                </div>
                
                <div className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold">3</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-200 rounded-full animate-pulse"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Receive New Item</h3>
                  <p className="text-gray-600 leading-relaxed">Get your exchange or full refund processed within 5-7 business days of receipt.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Refund Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif mb-6">Refund Information</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-emerald-900 pl-4">
                <h4 className="font-medium mb-1">Processing Time</h4>
                <p className="text-gray-600 text-sm">Refunds are processed within 5-7 business days after we receive your return.</p>
              </div>
              <div className="border-l-4 border-emerald-900 pl-4">
                <h4 className="font-medium mb-1">Refund Method</h4>
                <p className="text-gray-600 text-sm">Refunds will be issued to the original payment method used for purchase.</p>
              </div>
              <div className="border-l-4 border-emerald-900 pl-4">
                <h4 className="font-medium mb-1">Shipping Costs</h4>
                <p className="text-gray-600 text-sm">Original shipping costs are non-refundable unless the return is due to our error.</p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section>
            <div className="bg-gradient-to-r from-emerald-900 to-emerald-800 rounded-3xl p-8 md:p-12 text-white text-center">
              <h3 className="text-3xl font-serif mb-6">Need Help with Returns?</h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Our dedicated customer service team is here to make your return or exchange process as smooth as possible</p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="group">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Email Support</h4>
                  <p className="text-white/80 mb-2">returns@laluxurygold.com</p>
                  <p className="text-white/60 text-sm">Response within 24 hours</p>
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
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}