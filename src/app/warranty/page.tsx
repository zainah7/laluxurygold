"use client";

import { Shield, Star, Wrench, Clock, CheckCircle, XCircle, Mail, Phone, MessageCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";

export default function WarrantyPage() {
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
              <Shield className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-6xl font-serif mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Warranty Protection
          </motion.h1>
          <motion.p 
            className="text-white/90 text-xl max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Lifetime craftsmanship guarantee with comprehensive coverage for your precious jewelry
          </motion.p>
        </div>
      </motion.header>

      {/* Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Warranty Coverage */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif mb-4 text-gray-900">Comprehensive Coverage</h2>
              <p className="text-gray-600 text-lg">Two levels of protection for your investment</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative bg-gradient-to-br from-emerald-50 to-emerald-100 border-2 border-emerald-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300">
                <div className="absolute top-6 right-6">
                  <div className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center">
                    <Sparkles className="w-4 h-4 mr-1" />
                    LIFETIME
                  </div>
                </div>
                <div className="mb-6">
                  <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mb-6">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-emerald-900">Lifetime Warranty</h3>
                  <p className="text-gray-700 mb-6">Complete protection for the life of your jewelry</p>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Manufacturing defects</span>
                      <p className="text-sm text-gray-600">Full repair or replacement</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Prong re-tipping</span>
                      <p className="text-sm text-gray-600">Keep stones secure</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Stone tightening</span>
                      <p className="text-sm text-gray-600">Professional maintenance</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Rhodium plating</span>
                      <p className="text-sm text-gray-600">White gold refinishing</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Professional cleaning</span>
                      <p className="text-sm text-gray-600">Restore original brilliance</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300">
                <div className="absolute top-6 right-6">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    1 YEAR
                  </div>
                </div>
                <div className="mb-6">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                    <Star className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-blue-900">Extended Coverage</h3>
                  <p className="text-gray-700 mb-6">Additional services for the first year</p>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Chain & bracelet repair</span>
                      <p className="text-sm text-gray-600">Link and clasp fixes</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Clasp replacement</span>
                      <p className="text-sm text-gray-600">Secure closure systems</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Ring sizing (one time)</span>
                      <p className="text-sm text-gray-600">Perfect fit guarantee</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Minor stone replacement</span>
                      <p className="text-sm text-gray-600">Small accent stones</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Earring back replacement</span>
                      <p className="text-sm text-gray-600">Secure backing systems</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* What's Not Covered */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif mb-6">What's Not Covered</h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <ul className="space-y-2 text-gray-700">
                <li>• Normal wear and tear</li>
                <li>• Damage from accidents or misuse</li>
                <li>• Lost or stolen jewelry</li>
                <li>• Damage from chemicals or extreme conditions</li>
                <li>• Alterations by non-authorized jewelers</li>
                <li>• Scratches on precious metals (normal patina)</li>
              </ul>
            </div>
          </section>

          {/* Warranty Process */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif mb-4 text-gray-900">Warranty Process</h2>
              <p className="text-gray-600 text-lg">Four simple steps to warranty service</p>
            </div>
            
            <div className="relative">
              {/* Connection Lines */}
              <div className="hidden lg:block absolute top-16 left-0 right-0">
                <div className="flex justify-center">
                  <div className="w-3/4 h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent"></div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-8 h-8" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-emerald-200 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-emerald-800">1</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold mb-2">Contact</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Email us with photos and detailed description of the issue</p>
                </div>
                
                <div className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-blue-800">2</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold mb-2">Evaluate</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Our experts assess the warranty claim and approve service</p>
                </div>
                
                <div className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Shield className="w-8 h-8" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-purple-200 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-purple-800">3</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold mb-2">Ship</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Send item using our secure, prepaid shipping label</p>
                </div>
                
                <div className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Wrench className="w-8 h-8" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-amber-200 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-amber-800">4</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold mb-2">Repair</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Receive your expertly repaired jewelry within 7-10 days</p>
                </div>
              </div>
            </div>
          </section>

          {/* Care Instructions */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif mb-6">Care Instructions</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-medium mb-3">Daily Care</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Remove before swimming</li>
                  <li>• Avoid harsh chemicals</li>
                  <li>• Store separately</li>
                  <li>• Clean with soft cloth</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-medium mb-3">Professional Cleaning</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Every 6 months</li>
                  <li>• Ultrasonic cleaning</li>
                  <li>• Prong inspection</li>
                  <li>• Free with warranty</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-medium mb-3">Storage Tips</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Individual pouches</li>
                  <li>• Dry environment</li>
                  <li>• Away from sunlight</li>
                  <li>• Secure location</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section>
            <div className="bg-gradient-to-r from-emerald-900 to-emerald-800 rounded-3xl p-8 md:p-12 text-white text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Shield className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-serif mb-6">Warranty Support Team</h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Our dedicated warranty specialists are here to ensure your jewelry receives the best care and service</p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="group">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Email Support</h4>
                  <p className="text-white/80 mb-2">warranty@laluxurygold.com</p>
                  <p className="text-white/60 text-sm">Detailed claim processing</p>
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