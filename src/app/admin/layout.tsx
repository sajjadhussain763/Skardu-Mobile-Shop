'use client';

import React from 'react';
import Link from 'next/link';
import { LayoutDashboard, ShoppingBag, PlusCircle, MessageSquare, Settings, LogOut } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const sidebarLinks = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Products', href: '/admin/products', icon: ShoppingBag },
    { name: 'Add Product', href: '/admin/products/add', icon: PlusCircle },
    { name: 'Messages', href: '/admin/messages', icon: MessageSquare },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-dark text-white p-6 flex flex-col">
        <div className="mb-10 flex items-center gap-3 px-2">
           <div className="bg-primary p-2 rounded-lg">
             <ShoppingBag className="h-5 w-5 text-white" />
           </div>
           <span className="font-bold text-lg">Noor Admin</span>
        </div>

        <nav className="space-y-2 flex-grow">
          {sidebarLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium",
                pathname === link.href ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-gray-400 hover:text-white hover:bg-white/5"
              )}
            >
              <link.icon className="h-5 w-5" />
              {link.name}
            </Link>
          ))}
        </nav>

        <Link
          href="/"
          className="mt-10 flex items-center gap-3 px-4 py-3 text-red-400 hover:text-red-300 transition-colors font-medium border-t border-white/10 pt-6"
        >
          <LogOut className="h-5 w-5" />
          Exit Admin
        </Link>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
