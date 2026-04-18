'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import { SHOP_CONFIG } from '@/lib/config';

export default function ContactPage() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-secondary py-24 text-center">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">Get In <span className="text-primary">Touch</span></h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions or need a repair quote? Reach out to us via any of the channels below.
            </p>
         </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-border">
               <div className="bg-blue-100 p-4 rounded-2xl w-fit mb-6">
                  <Phone className="h-6 w-6 text-blue-600" />
               </div>
               <h3 className="text-xl font-bold mb-2">WhatsApp & Call</h3>
               <p className="text-muted-foreground mb-4">Direct contact for quick enquiries</p>
               <p className="text-2xl font-black text-dark">{SHOP_CONFIG.whatsapp}</p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-border">
               <div className="bg-green-100 p-4 rounded-2xl w-fit mb-6">
                  <MapPin className="h-6 w-6 text-green-600" />
               </div>
               <h3 className="text-xl font-bold mb-2">Our Location</h3>
               <p className="text-muted-foreground mb-4">Visit our shop in Rawalpindi</p>
               <p className="font-bold text-dark leading-relaxed">{SHOP_CONFIG.address}</p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-border">
               <div className="bg-purple-100 p-4 rounded-2xl w-fit mb-6">
                  <Clock className="h-6 w-6 text-purple-600" />
               </div>
               <h3 className="text-xl font-bold mb-2">Shop Hours</h3>
               <p className="text-muted-foreground mb-2">Monday - Saturday</p>
               <p className="font-bold text-dark">11:00 AM - 10:00 PM</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-8 md:p-16 rounded-[3rem] shadow-2xl border border-border">
             <h2 className="text-3xl font-extrabold mb-10">Send a Message</h2>
             <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-widest px-1">Full Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-6 py-4 rounded-2xl bg-secondary border-none focus:ring-2 focus:ring-primary outline-none transition-all"
                      />
                   </div>
                   <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-widest px-1">WhatsApp Number</label>
                      <input
                        type="text"
                        placeholder="+92 3XX XXXXXXX"
                        className="w-full px-6 py-4 rounded-2xl bg-secondary border-none focus:ring-2 focus:ring-primary outline-none transition-all"
                      />
                   </div>
                </div>
                <div className="space-y-2">
                   <label className="text-sm font-bold uppercase tracking-widest px-1">Subject</label>
                   <select className="w-full px-6 py-4 rounded-2xl bg-secondary border-none focus:ring-2 focus:ring-primary outline-none transition-all">
                      <option>Buy a Product</option>
                      <option>Repair Quote</option>
                      <option>Exchange Enquiry</option>
                      <option>General Support</option>
                   </select>
                </div>
                <div className="space-y-2">
                   <label className="text-sm font-bold uppercase tracking-widest px-1">Message</label>
                   <textarea
                     rows={6}
                     placeholder="Tell us what you are looking for..."
                     className="w-full px-6 py-4 rounded-2xl bg-secondary border-none focus:ring-2 focus:ring-primary outline-none transition-all"
                   />
                </div>
                <button
                  type="submit"
                  className="w-full md:w-fit bg-primary text-white px-12 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/20"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </button>
             </form>

             <div className="mt-16 pt-10 border-t border-border flex flex-col md:flex-row items-center justify-between gap-8">
                <p className="text-muted-foreground font-medium">Prefer instant chat?</p>
                <a
                  href={SHOP_CONFIG.whatsappUrl}
                  className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:shadow-lg transition-all"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
