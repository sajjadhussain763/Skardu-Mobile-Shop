'use client';

import React from 'react';
import { ShoppingBag, TrendingUp, Users, MessageSquare, DollarSign } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { name: 'Total Products', value: '45', icon: ShoppingBag, color: 'text-blue-600', bg: 'bg-blue-100' },
    { name: 'Active Enquiries', value: '12', icon: MessageSquare, color: 'text-purple-600', bg: 'bg-purple-100' },
    { name: 'Used Mobiles', value: '18', icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-100' },
    { name: 'Average Price', value: 'Rs 85k', icon: DollarSign, color: 'text-amber-600', bg: 'bg-amber-100' },
  ];

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-extrabold mb-2">Welcome Back, Admin</h1>
        <p className="text-muted-foreground">Here's what's happening at Noor Mobile Mall today.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-border">
            <div className={`${stat.bg} ${stat.color} p-4 rounded-2xl w-fit mb-6`}>
              <stat.icon className="h-6 w-6" />
            </div>
            <p className="text-muted-foreground text-sm font-medium mb-1 tracking-wide uppercase">{stat.name}</p>
            <h3 className="text-3xl font-extrabold">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-border">
          <h3 className="text-xl font-bold mb-6">Recent Enquiries</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-secondary/30 rounded-2xl border border-transparent hover:border-border transition-all">
                <div className="flex items-center gap-4">
                   <div className="bg-white p-2 rounded-lg border border-border">
                      <MessageSquare className="h-5 w-5 text-primary" />
                   </div>
                   <div>
                      <p className="font-bold text-sm">Customer Enquiry #{i}</p>
                      <p className="text-xs text-muted-foreground">Regarding iPhone 15 Pro Max</p>
                   </div>
                </div>
                <span className="text-xs font-bold text-primary">2h ago</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-border">
          <h3 className="text-xl font-bold mb-6">Popular Categories</h3>
          <div className="space-y-6">
            {['iPhones', 'Samsung', 'Used Phones', 'Accessories'].map((cat, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm font-bold mb-2">
                  <span>{cat}</span>
                  <span className="text-primary">{100 - (i * 15)}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary" 
                    style={{ width: `${100 - (i * 15)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
