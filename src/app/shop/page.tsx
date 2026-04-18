'use client';

import React, { useState, useEffect } from 'react';
import { Search, Filter, SlidersHorizontal, LayoutGrid, List } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { cn } from '@/lib/utils';
import axios from 'axios';
import { IProduct } from '@/models/Product';
import { sampleProducts } from '@/lib/sampleData';

const categories = ['All', 'iPhones', 'Samsung', 'Google', 'OnePlus', 'Xiaomi', 'Realme', 'Vivo', 'Accessories'];
const conditions = ['All', 'New', 'Used'];

export default function ShopPage() {
  const [products, setProducts] = useState<(IProduct & { _id: string })[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCondition, setSelectedCondition] = useState('All');
  const [sortBy, setSortBy] = useState('latest');

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory, selectedCondition]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      let url = `/api/products?`;
      if (selectedCategory !== 'All') url += `category=${selectedCategory}&`;
      if (selectedCondition !== 'All') url += `condition=${selectedCondition}&`;
      
      const res = await axios.get(url);
      if (res.data && res.data.length > 0) {
        setProducts(res.data);
      } else {
        // Fallback to sample data for demo purposes if DB is empty
        const filteredSamples = sampleProducts.filter(p => {
            const catMatch = selectedCategory === 'All' || p.category === selectedCategory;
            const condMatch = selectedCondition === 'All' || p.condition === selectedCondition;
            return catMatch && condMatch;
        });
        setProducts(filteredSamples);
      }
    } catch (err) {
      console.error('API Error, using fallback data:', err);
      // Use samples if API fails
      setProducts(sampleProducts);
    } finally {
      setLoading(false);
    }
  };


  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-extrabold mb-2">Shop All</h1>
          <p className="text-muted-foreground">Browse our entire collection of premium mobile devices</p>
        </div>
        
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-secondary border-none focus:ring-2 focus:ring-primary outline-none transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {/* Product Grid */}
        <div className="lg:col-span-4">
          <div className="flex justify-between items-center mb-8 bg-black text-white p-6 rounded-[2rem] shadow-xl">
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-black mb-1">Store Inventory</span>
              <span className="text-2xl font-black">
                {filteredProducts.length} Premium Items in Stock
              </span>
            </div>
            <div className="flex gap-4">
               <select 
                className="bg-white/10 backdrop-blur-md text-white text-sm font-bold outline-none cursor-pointer px-4 py-2 rounded-xl"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
               >
                <option value="latest">Sort by Latest</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
               </select>
            </div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="aspect-[4/5] bg-secondary animate-pulse rounded-2xl" />
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-secondary/20 rounded-3xl">
              <p className="text-xl text-muted-foreground">No products found for "{search}".</p>
              <button 
                onClick={() => setSearch('')}
                className="mt-4 text-primary font-bold hover:underline"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
