'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Smartphone, ShieldCheck, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-32 lg:pb-40">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-3xl opacity-20 pointer-events-none">
        <div className="aspect-square w-[600px] rounded-full bg-gradient-to-br from-primary to-accent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full text-primary text-sm font-bold mb-6">
              <Zap className="h-4 w-4" />
              <span>Premium Mobile Experience</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-dark mb-6 leading-[1.1]">
              Upgrade to the <span className="text-primary text-gradient">Latest</span> Flagships
            </h1>
            <p className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed">
              Explore our curated collection of new and certified used mobiles. From the latest iPhones to Samsung flagships, we have it all at Noor Mobile Mall.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/shop"
                className="bg-primary text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20"
              >
                Shop Now
                <ChevronRight className="h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="bg-secondary text-dark px-8 py-4 rounded-2xl font-bold flex items-center justify-center border border-border hover:bg-white transition-all"
              >
                View Services
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-8 border-t border-border pt-8">
              <div className="flex flex-col">
                <span className="text-2xl font-bold">100%</span>
                <span className="text-xs text-muted-foreground uppercase tracking-widest">Original</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold">Fast</span>
                <span className="text-xs text-muted-foreground uppercase tracking-widest">Repair</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold">24/7</span>
                <span className="text-xs text-muted-foreground uppercase tracking-widest">Support</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 bg-gradient-to-tr from-secondary to-white p-4 rounded-[3rem] shadow-2xl border border-white/50 backdrop-blur-sm">
              <img
                src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=1000&auto=format&fit=crop"
                alt="Latest Smartphone"
                className="rounded-[2.5rem] w-full object-cover shadow-inner"
              />
            </div>
            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-2xl border border-border flex items-center gap-4"
            >
              <div className="bg-green-100 p-3 rounded-xl">
                <ShieldCheck className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="font-bold text-dark">Warranty Included</p>
                <p className="text-xs text-muted-foreground">On all new devices</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
