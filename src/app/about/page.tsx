'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Award, Users, Target } from 'lucide-react';
import { SHOP_CONFIG } from '@/lib/config';

export default function AboutPage() {
  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-dark">
        <img
          src="https://images.unsplash.com/photo-1556740734-754f46a20c45?q=80&w=1600&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover opacity-40 scale-110"
          alt="Shop interior"
        />
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-8xl font-black mb-6 tracking-tight"
          >
            OUR STORY
          </motion.h1>
          <p className="text-xl md:text-2xl font-medium text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Delivering excellence in mobile technology since 2015. Rawalpindi's most trusted gadget hub.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: 'Happy Customers', value: '10k+', icon: Users },
              { label: 'Years Experience', value: '8+', icon: Award },
              { label: 'Product Range', value: '500+', icon: Target }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-border text-center group hover:bg-primary transition-all duration-500">
                <stat.icon className="h-10 w-10 mx-auto mb-6 text-primary group-hover:text-white transition-colors" />
                <h3 className="text-4xl font-black mb-2 group-hover:text-white transition-colors">{stat.value}</h3>
                <p className="text-muted-foreground font-bold uppercase tracking-widest text-xs group-hover:text-primary-foreground/70 transition-colors">{stat.label}</p>
              </div>
            ))}
         </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Quality You Can <span className="text-primary">Trust</span>, Service You'll Love.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Noor Mobile Mall was founded with a simple goal: to provide the people of Rawalpindi with high-quality mobile devices and accessories at fair prices. We understand that a phone is more than just a gadget; it's your connection to the world.
              </p>
              <div className="space-y-4">
                 {[
                   "100% Genuine Products",
                   "Professional In-House Repairs",
                   "Instant Cash for Used Mobiles",
                   "Lifetime Software Support"
                 ].map((text, i) => (
                   <div key={i} className="flex items-center gap-3 font-bold text-dark">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      {text}
                   </div>
                 ))}
              </div>
           </div>
           <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1596558450255-7c0b7be9d56a?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl border border-border hidden md:block">
                 <p className="text-sm font-black text-primary uppercase mb-2">Since 2015</p>
                 <p className="text-2xl font-bold">Leading Mobile Shop in 6th Road</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
