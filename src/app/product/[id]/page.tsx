'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { MessageCircle, ShieldCheck, Truck, RefreshCw, Star, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { formatPrice } from '@/lib/utils';
import { SHOP_CONFIG } from '@/lib/config';
import axios from 'axios';

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`/api/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return (
    <div className="max-w-7xl mx-auto px-4 py-20 animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-square bg-secondary rounded-3xl" />
        <div className="space-y-6">
          <div className="h-10 bg-secondary w-3/4 rounded-lg" />
          <div className="h-6 bg-secondary w-1/4 rounded-lg" />
          <div className="h-32 bg-secondary w-full rounded-lg" />
        </div>
      </div>
    </div>
  );

  if (!product) return <div className="text-center py-20 text-2xl">Product not found.</div>;

  const whatsappMsg = encodeURIComponent(
    `Hello Noor Mobile Mall, I want to buy this product: ${product.name} - Price: ${formatPrice(product.price)}`
  );
  const whatsappUrl = `https://wa.me/${SHOP_CONFIG.whatsapp.replace(/\D/g, '')}?text=${whatsappMsg}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/shop" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 font-medium bg-secondary px-4 py-2 rounded-xl transition-colors">
        <ArrowLeft className="h-4 w-4" /> Back to Shop
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Images */}
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-square rounded-3xl overflow-hidden bg-secondary border border-border"
          >
            <img
              src={product.images[selectedImage] || 'https://via.placeholder.com/800x800?text=No+Image'}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((img: string, i: number) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className={cn(
                  "aspect-square rounded-2xl overflow-hidden border-2 transition-all",
                  selectedImage === i ? "border-primary shadow-lg" : "border-transparent hover:border-muted-foreground"
                )}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {product.category}
              </span>
              <span className={cn(
                "text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider",
                product.condition === 'New' ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
              )}>
                {product.condition} Condition
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">{product.name}</h1>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-extrabold text-primary">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through italic">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg mb-8">
              {product.description}
            </p>
          </div>

          {product.specs && (
            <div className="grid grid-cols-2 gap-6 mb-10 bg-secondary/30 p-8 rounded-3xl border border-border">
              {Object.entries(product.specs).map(([key, value]) => value && (
                <div key={key}>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{key}</p>
                  <p className="font-bold text-dark">{value as string}</p>
                </div>
              ))}
            </div>
          )}

          <div className="space-y-4 mb-10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-5 rounded-[1.5rem] font-bold text-xl transition-all shadow-xl shadow-green-500/20 active:scale-[0.98]"
            >
              <MessageCircle className="h-6 w-6" />
              Order on WhatsApp
            </a>
            <button className="flex items-center justify-center gap-2 w-full bg-dark text-white py-5 rounded-[1.5rem] font-bold text-lg hover:bg-black transition-all">
              Call (+92) 331 5564008
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 border-t border-border pt-10">
            {[
              { icon: ShieldCheck, title: 'Warranty', desc: 'Secure purchase' },
              { icon: Truck, title: 'Shipping', desc: 'Local delivery' },
              { icon: RefreshCw, title: 'Check', desc: '7 Days Return' }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <item.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="font-bold text-sm">{item.title}</p>
                <p className="text-[10px] text-muted-foreground uppercase">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
