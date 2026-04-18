import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Product from '@/models/Product';

const sampleProducts = [
  {
    name: 'iPhone 15 Pro Max',
    description: 'The ultimate iPhone experience with Natural Titanium finish and A17 Pro chip.',
    price: 450000,
    originalPrice: 480000,
    category: 'iPhones',
    condition: 'New',
    images: ['https://images.unsplash.com/photo-1591337676887-a217a6970a8a?q=80&w=1000&auto=format&fit=crop'],
    stock: 10,
    featured: true,
    specs: { ram: '8GB', storage: '256GB', battery: '4441mAh', camera: '48MP Main', display: '6.7" OLED' }
  },
  {
    name: 'Samsung Galaxy S24 Ultra',
    description: 'The peak of Android innovation with Galaxy AI and 200MP camera.',
    price: 380000,
    originalPrice: 410000,
    category: 'Samsung',
    condition: 'New',
    images: ['https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=1000&auto=format&fit=crop'],
    stock: 15,
    featured: true,
    specs: { ram: '12GB', storage: '512GB', battery: '5000mAh', camera: '200MP Quad', display: '6.8" AMOLED' }
  },
  {
    name: 'Google Pixel 8 Pro',
    description: 'The smartest Pixel yet with pure Android and incredible AI camera features.',
    price: 220000,
    originalPrice: 240000,
    category: 'Google',
    condition: 'Used',
    images: ['https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1000&auto=format&fit=crop'],
    stock: 5,
    featured: true,
    specs: { ram: '12GB', storage: '128GB', battery: '5050mAh', camera: '50MP Triple', display: '6.7" LTPO' }
  },
  {
    name: 'OnePlus 12',
    description: 'Smooth Beyond Belief. The fastest charging flagship in the market.',
    price: 185000,
    originalPrice: 195000,
    category: 'OnePlus',
    condition: 'New',
    images: ['https://images.unsplash.com/photo-1612448331650-d44772ff5f79?q=80&w=1000&auto=format&fit=crop'],
    stock: 8,
    featured: false,
    specs: { ram: '16GB', storage: '512GB', battery: '5400mAh', camera: '50MP Hasselblad', display: '6.8" 2K' }
  },
  {
    name: 'Xiaomi 14 Pro',
    description: 'Leica Optics and Snapdragon 8 Gen 3 for the ultimate mobile photographer.',
    price: 165000,
    originalPrice: 175000,
    category: 'Xiaomi',
    condition: 'New',
    images: ['https://images.unsplash.com/photo-1592890288564-76628a30a657?q=80&w=1000&auto=format&fit=crop'],
    stock: 12,
    featured: false,
    specs: { ram: '12GB', storage: '256GB', battery: '4880mAh', camera: '50MP Leica', display: '6.7" AMOLED' }
  },
  {
    name: 'Realme GT 5',
    description: 'Performance flagship with 240W ultra-fast charging capability.',
    price: 125000,
    originalPrice: 135000,
    category: 'Realme',
    condition: 'New',
    images: ['https://images.unsplash.com/photo-1621330396173-e41b1cafd17f?q=80&w=1000&auto=format&fit=crop'],
    stock: 20,
    featured: false,
    specs: { ram: '16GB', storage: '512GB', battery: '4600mAh', camera: '50MP Sony', display: '6.7" 144Hz' }
  },
  {
    name: 'Vivo X100 Pro',
    description: 'Zeiss imaging system integrated for cinematic mobile videography.',
    price: 155000,
    originalPrice: 165000,
    category: 'Vivo',
    condition: 'New',
    images: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1000&auto=format&fit=crop'],
    stock: 6,
    featured: false,
    specs: { ram: '12GB', storage: '256GB', battery: '5000mAh', camera: '50MP Zeiss', display: '6.78" OLED' }
  },
  {
    name: 'MagSafe Silicone Case',
    description: 'Soft-touch silicone case with perfect alignment for wireless charging.',
    price: 4500,
    originalPrice: 6000,
    category: 'Accessories',
    condition: 'New',
    images: ['https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1000&auto=format&fit=crop'],
    stock: 50,
    featured: true,
    specs: { ram: '-', storage: '-', battery: '-', camera: '-', display: '-' }
  }
];

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    
    // Clear existing products to prevent duplicates during seeding
    await Product.deleteMany({});
    
    // Insert samples
    const products = await Product.insertMany(sampleProducts);
    
    return NextResponse.json({ 
      message: 'Shop Seeded Successfully!', 
      count: products.length,
      products 
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
