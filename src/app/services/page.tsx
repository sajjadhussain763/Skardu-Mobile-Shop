'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Wrench, Shield, Zap, RotateCcw, Search, MessageCircle } from 'lucide-react';
import { SHOP_CONFIG } from '@/lib/config';

const services = [
  {
    icon: Wrench,
    title: "Expert Repair Services",
    desc: "From broken screens to battery replacements, we fix all major brands using 100% original parts.",
    features: ["Screen Replacement", "Battery Change", "Water Damage Fix", "Charging Port Repair"],
    color: "bg-blue-500"
  },
  {
    icon: Shield,
    title: "Warranty & Protection",
    desc: "Every purchase and repair at Noor Mobile Mall comes with a peace-of-mind warranty.",
    features: ["7-Day Check Warranty", "Software Support", "Original Parts Only", "Expert Evaluation"],
    color: "bg-green-500"
  },
  {
    icon: RotateCcw,
    title: "Exchange Policy",
    desc: "Want to upgrade? Bring your old phone and get the best value towards your next device.",
    features: ["Fair Price Evaluation", "Instant Cash", "Trade-in Bonuses", "Data Transfer Setup"],
    color: "bg-purple-500"
  },
  {
    icon: Search,
    title: "Authenticity Check",
    desc: "We verify every used device in our stock to ensure it's original and not blacklisted.",
    features: ["IMEI Verification", "Hardware Diagnostics", "Body Condition Rating", "Battery Health Check"],
    color: "bg-amber-500"
  }
];

export default function ServicesPage() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-dark text-white py-24 relative overflow-hidden">
         <div className="absolute top-0 right-0 p-32 blur-3xl opacity-20 pointer-events-none">
            <div className="aspect-square w-[500px] rounded-full bg-primary" />
          </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold mb-8"
          >
            Professional <span className="text-primary italic">Services</span>
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Your premium mobile destination. Our expert team is dedicated to keeping your digital life running smoothly.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-border group hover:border-primary transition-all"
            >
              <div className={`${service.color} text-white p-5 rounded-3xl w-fit mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                <service.icon className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-extrabold mb-6">{service.title}</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                {service.desc}
              </p>
              <ul className="grid grid-cols-2 gap-4">
                {service.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm font-bold text-dark">
                    <Zap className="h-4 w-4 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Repair CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-secondary rounded-[3rem] p-12 md:p-20 text-center">
          <h2 className="text-4xl font-extrabold mb-6">Broken Screen? No Problem.</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Book your repair service in advance and get it done in under 60 minutes. We use genuine components only.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href={SHOP_CONFIG.whatsappUrl}
              className="bg-primary text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:shadow-xl transition-all"
            >
              <MessageCircle className="h-6 w-6" />
              Chat on WhatsApp
            </a>
            <button className="bg-dark text-white px-10 py-5 rounded-2xl font-bold hover:bg-black transition-all">
              Call (+92) 331 5564008
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
