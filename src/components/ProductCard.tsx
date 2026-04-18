'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn, formatPrice } from '@/lib/utils';
import { SHOP_CONFIG } from '@/lib/config';
import { IProduct } from '@/models/Product';

interface ProductCardProps {
  product: IProduct;
}


const ProductCard = ({ product }: ProductCardProps) => {
  const whatsappMsg = encodeURIComponent(
    `Hello Noor Mobile Mall, I want to buy this product: ${product.name!} - Price: ${formatPrice(product.price!)}`
  );

  const whatsappUrl = `https://wa.me/${SHOP_CONFIG.whatsapp.replace(/\D/g, '')}?text=${whatsappMsg}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group premium-card bg-white rounded-2xl overflow-hidden border border-border flex flex-col h-full"
    >
      {/* Text-based Mobile Banner (Replacing Image) */}
      <Link href={`/product/${product._id}`} className="relative aspect-square overflow-hidden bg-gradient-to-br from-secondary to-dark/5 flex items-center justify-center p-8 text-center group">
         <div className="absolute inset-0 bg-white/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
         <span className="text-2xl font-black text-dark/20 uppercase tracking-tighter leading-none select-none group-hover:scale-110 group-hover:text-primary/30 transition-all duration-700">
            {product.name}
         </span>
         
         <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
          {product.condition === 'Used' && (
            <span className="bg-amber-100/80 backdrop-blur text-amber-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
              Used
            </span>
          )}
          {product.originalPrice && product.originalPrice > product.price! && (
            <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
              SAVE {Math.round((1 - product.price! / product.originalPrice) * 100)}%
            </span>
          )}
        </div>
      </Link>


      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{product.category}</p>
        <Link href={`/product/${product._id}`}>
          <h3 className="font-bold text-lg mb-2 line-clamp-1 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <div className="mt-auto">
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-xl font-extrabold text-primary">{formatPrice(product.price!)}</span>
            {product.originalPrice && product.originalPrice > product.price! && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>


          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-3 rounded-xl font-bold transition-all transform active:scale-95"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Order on WhatsApp</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
