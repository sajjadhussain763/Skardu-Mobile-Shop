import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import { Smartphone, Shield, Wrench, Headphones, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Sample Featured Products
const featuredProducts = [
  {
    _id: '1',
    name: 'iPhone 15 Pro Max',
    price: 450000,
    originalPrice: 480000,
    images: ['https://images.unsplash.com/photo-1591337676887-a217a6970a8a?q=80&w=1000&auto=format&fit=crop'],
    category: 'iPhones',
    condition: 'New'
  },
  {
    _id: '2',
    name: 'Samsung Galaxy S24 Ultra',
    price: 380000,
    originalPrice: 400000,
    images: ['https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=1000&auto=format&fit=crop'],
    category: 'Samsung',
    condition: 'New'
  },
  {
    _id: '3',
    name: 'Google Pixel 8 Pro',
    price: 220000,
    originalPrice: 240000,
    images: ['https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1000&auto=format&fit=crop'],
    category: 'Google',
    condition: 'Used'
  },
  {
    _id: '4',
    name: 'Premium Earbuds',
    price: 55000,
    originalPrice: 65000,
    images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop'],
    category: 'Accessories',
    condition: 'New'
  }
];




export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <Hero />

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold mb-4">Our Services</h2>
          <p className="text-muted-foreground">Everything you need for your mobile lifestyle</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: Smartphone, title: 'New Devices', desc: 'Latest flagships with official warranty' },
            { icon: Shield, title: 'Used Phones', desc: 'Certified pre-owned with check warranty' },
            { icon: Wrench, title: 'Repair Center', desc: 'Fast and original parts replacement' },
            { icon: Headphones, title: 'Accessories', desc: 'Premium cases, chargers & pods' }
          ].map((service, i) => (
            <div key={i} className="p-8 rounded-3xl bg-secondary hover:bg-white border border-transparent hover:border-border transition-all group">
              <div className="bg-white p-4 rounded-2xl w-fit mb-6 group-hover:bg-primary transition-colors">
                <service.icon className="h-6 w-6 text-primary group-hover:text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-secondary/30 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-extrabold mb-4">Featured Deals</h2>
              <p className="text-muted-foreground">Handpicked devices at the best prices</p>
            </div>
            <Link href="/shop" className="hidden sm:flex items-center gap-2 text-primary font-bold hover:underline">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>

          <div className="mt-12 sm:hidden text-center">
             <Link href="/shop" className="inline-flex items-center gap-2 text-primary font-bold">
                View All <ArrowRight className="h-4 w-4" />
              </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-primary rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 blur-3xl opacity-30 pointer-events-none">
            <Smartphone className="h-64 w-64 rotate-12" />
          </div>
          
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Need a Repair?</h2>
            <p className="text-primary-foreground/80 text-lg mb-10">
              Our technicians use 100% original parts and provide a fast turnaround time. Get your screen, battery, or camera fixed today!
            </p>
            <Link
              href="/contact"
              className="bg-white text-primary px-8 py-4 rounded-2xl font-bold inline-block hover:bg-secondary transition-all"
            >
              Get a Quote Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
