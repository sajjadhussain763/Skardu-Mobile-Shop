import React from 'react';
import Link from 'next/link';
import { Smartphone, Mail, Phone, MapPin, Camera, Share2, Send } from 'lucide-react';
import { SHOP_CONFIG } from '@/lib/config';

const Footer = () => {
  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="bg-primary p-2 rounded-xl">
                <Smartphone className="text-white h-5 w-5" />
              </div>
              <span className="font-bold text-xl tracking-tight">{SHOP_CONFIG.name}</span>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Your trusted destination for premium smartphones and original mobile accessories in Rawalpindi. Expert repair services for all handheld devices.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:text-primary transition-colors">
                <Share2 className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:text-primary transition-colors">
                <Camera className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:text-primary transition-colors">
                <Send className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/shop" className="text-muted-foreground hover:text-primary transition-colors">Shop All</Link></li>
              <li><Link href="/shop?condition=New" className="text-muted-foreground hover:text-primary transition-colors">New Mobiles</Link></li>
              <li><Link href="/shop?condition=Used" className="text-muted-foreground hover:text-primary transition-colors">Used Mobiles</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Repair Services</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-lg mb-6">Support</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{SHOP_CONFIG.address}</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground">{SHOP_CONFIG.whatsapp}</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground">contact@noormobile.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-16 pt-8 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} {SHOP_CONFIG.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
