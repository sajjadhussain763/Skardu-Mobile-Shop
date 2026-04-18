'use client';

import React, { useState } from 'react';
import { ArrowLeft, Save, Image as ImageIcon, Plus, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { IProduct } from '@/models/Product';

export default function AddProduct() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<Partial<IProduct>>({
    name: '',
    description: '',
    price: 0,
    originalPrice: 0,
    category: 'iPhones',
    condition: 'New',
    stock: 1,
    featured: false,
    images: [],
    specs: {
      ram: '',
      storage: '',
      battery: '',
      camera: '',
      display: '',
    }
  });


  const [imageUrl, setImageUrl] = useState('');

  const addImage = () => {
    if (imageUrl) {
      setFormData({ ...formData, images: [...(formData.images || []), imageUrl] });
      setImageUrl('');
    }
  };

  const removeImage = (index: number) => {
    const newImages = [...(formData.images || [])];
    newImages.splice(index, 1);
    setFormData({ ...formData, images: newImages });
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('/api/products', formData);
      router.push('/admin/products');
    } catch (err) {

      alert('Failed to add product');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8 pb-20">
      <div className="flex items-center gap-4">
        <Link href="/admin/products" className="p-3 bg-white rounded-xl border border-border hover:bg-secondary transition-all">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div>
          <h1 className="text-3xl font-extrabold mb-1">Add New Product</h1>
          <p className="text-muted-foreground">List a new device on your store.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Main Details */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-border space-y-6">
            <h3 className="text-xl font-bold border-b border-border pb-4">General Information</h3>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-dark uppercase tracking-widest px-1">Product Name</label>
              <input
                required
                type="text"
                placeholder="e.g. iPhone 15 Pro Max"
                className="w-full px-6 py-4 rounded-2xl bg-secondary border-none focus:ring-2 focus:ring-primary outline-none transition-all"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-dark uppercase tracking-widest px-1">Description</label>
              <textarea
                required
                rows={5}
                placeholder="Describe the product features, condition, warranty..."
                className="w-full px-6 py-4 rounded-2xl bg-secondary border-none focus:ring-2 focus:ring-primary outline-none transition-all"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="space-y-2">
                  <label className="text-sm font-bold text-dark uppercase tracking-widest px-1">Category</label>
                  <select
                    className="w-full px-6 py-4 rounded-2xl bg-secondary border-none focus:ring-2 focus:ring-primary outline-none transition-all"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  >
                    <option>iPhones</option>
                    <option>Samsung</option>
                    <option>Google</option>
                    <option>OnePlus</option>
                    <option>Xiaomi</option>
                    <option>Realme</option>
                    <option>Vivo</option>
                    <option>Accessories</option>
                  </select>
               </div>
               <div className="space-y-2">
                  <label className="text-sm font-bold text-dark uppercase tracking-widest px-1">Condition</label>
                  <select
                    className="w-full px-6 py-4 rounded-2xl bg-secondary border-none focus:ring-2 focus:ring-primary outline-none transition-all"
                    value={formData.condition}
                    onChange={(e) => setFormData({ ...formData, condition: e.target.value as any })}
                  >
                    <option>New</option>
                    <option>Used</option>
                  </select>
               </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-border space-y-6">
            <h3 className="text-xl font-bold border-b border-border pb-4">Specifications (Optional)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {['RAM', 'Storage', 'Battery', 'Camera', 'Display'].map((spec) => (
                 <div key={spec} className="space-y-2">
                    <label className="text-sm font-bold text-dark uppercase tracking-widest px-1">{spec}</label>
                    <input
                      type="text"
                      className="w-full px-6 py-4 rounded-2xl bg-secondary border-none focus:ring-2 focus:ring-primary outline-none transition-all"
                      value={(formData.specs as any)[spec.toLowerCase()]}
                      onChange={(e) => setFormData({ 
                        ...formData, 
                        specs: { ...formData.specs, [spec.toLowerCase()]: e.target.value } 
                      })}
                    />
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Right Column - Media & Price */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-border space-y-6">
             <h3 className="text-xl font-bold border-b border-border pb-4">Pricing & Stock</h3>
             <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-dark">Price (PKR)</label>
                  <input
                    required
                    type="number"
                    className="w-full px-6 py-3 rounded-xl bg-secondary border-none"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-dark">Original Price (Discount if set)</label>
                  <input
                    type="number"
                    className="w-full px-6 py-3 rounded-xl bg-secondary border-none"
                    value={formData.originalPrice}
                    onChange={(e) => setFormData({ ...formData, originalPrice: Number(e.target.value) })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-dark">Stock Quantity</label>
                  <input
                    type="number"
                    className="w-full px-6 py-3 rounded-xl bg-secondary border-none"
                    value={formData.stock}
                    onChange={(e) => setFormData({ ...formData, stock: Number(e.target.value) })}
                  />
                </div>

             </div>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-border space-y-6">
             <h3 className="text-xl font-bold border-b border-border pb-4">Product Images</h3>
             <div className="space-y-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Image URL"
                    className="flex-grow px-4 py-2 rounded-xl bg-secondary text-sm border-none"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                  />
                  <button type="button" onClick={addImage} className="p-2 bg-primary text-white rounded-xl">
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {(formData.images || []).map((img, i) => (
                    <div key={i} className="relative aspect-square rounded-lg overflow-hidden border border-border">
                       <img src={img} className="w-full h-full object-cover" />
                       <button 
                        type="button"
                        onClick={() => removeImage(i)}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                       >
                         <X className="h-3 w-3" />
                       </button>
                    </div>
                  ))}
                  {(formData.images || []).length === 0 && (
                    <div className="col-span-3 py-8 border-2 border-dashed border-border rounded-xl flex flex-col items-center text-muted-foreground">
                      <ImageIcon className="h-8 w-8 mb-2" />
                      <p className="text-xs font-bold uppercase">No Images</p>
                    </div>
                  )}
                </div>
             </div>
          </div>

          <button
            disabled={loading}
            type="submit"
            className="w-full bg-primary text-white py-5 rounded-[2rem] font-bold text-xl shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50"
          >
            {loading ? 'Processing...' : (
              <>
                <Save className="h-6 w-6" />
                Publish Product
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
