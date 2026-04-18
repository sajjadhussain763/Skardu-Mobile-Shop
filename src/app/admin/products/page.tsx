'use client';

import React, { useState, useEffect } from 'react';
import { Plus, Search, MoreVertical, Edit, Trash2, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { formatPrice, cn } from '@/lib/utils';

import axios from 'axios';
import { IProduct } from '@/models/Product';

export default function AdminProducts() {
  const [products, setProducts] = useState<(IProduct & { _id: string })[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('/api/products');
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return;
    try {
      await axios.delete(`/api/products/${id}`);
      fetchProducts();
    } catch (err) {
      alert('Failed to delete product');
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold mb-2">Manage Products</h1>
          <p className="text-muted-foreground">Add, edit, or remove devices from your store.</p>
        </div>
        <Link
          href="/admin/products/add"
          className="bg-primary text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
        >
          <Plus className="h-5 w-5" />
          Add New Product
        </Link>
      </div>

      <div className="bg-white rounded-[2rem] shadow-sm border border-border overflow-hidden">
        <div className="p-6 border-b border-border flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by name, category..."
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-secondary border-none focus:ring-2 focus:ring-primary outline-none transition-all"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-secondary/50 border-b border-border">
              <tr>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Product</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Category</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Price</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Status</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-muted-foreground text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {loading ? (
                [1, 2, 3].map((i) => (
                  <tr key={i} className="animate-pulse">
                    <td colSpan={5} className="px-6 py-8 h-20 bg-white/50" />
                  </tr>
                ))
              ) : products.length > 0 ? (
                products.map((product) => (
                  <tr key={product._id} className="hover:bg-secondary/20 transition-colors">

                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-secondary">
                          <img src={product.images[0]} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="font-bold text-dark">{product.name}</p>
                          <p className="text-xs text-muted-foreground">{product.condition}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                       <span className="text-sm font-medium">{product.category}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-bold text-primary">{formatPrice(product.price)}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className={cn("w-2 h-2 rounded-full", product.stock > 0 ? "bg-green-500" : "bg-red-500")} />
                        <span className="text-xs font-bold uppercase tracking-wider">
                          {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                         <Link href={`/product/${product._id}`} target="_blank" className="p-2 hover:bg-secondary rounded-lg transition-colors text-muted-foreground">
                            <ExternalLink className="h-5 w-5" />
                         </Link>
                         <button className="p-2 hover:bg-secondary rounded-lg transition-colors text-muted-foreground">
                            <Edit className="h-5 w-5" />
                         </button>
                         <button onClick={() => deleteProduct(product._id)} className="p-2 hover:bg-red-100 rounded-lg transition-colors text-red-500">
                            <Trash2 className="h-5 w-5" />
                         </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-20 text-center text-muted-foreground italic">
                    No products found. Start by adding one!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
