import mongoose, { Schema, model, models } from 'mongoose';

export interface IProduct {
  _id?: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  condition: 'New' | 'Used';
  images: string[];
  stock: number;
  featured: boolean;
  specs: {
    ram?: string;
    storage?: string;
    battery?: string;
    camera?: string;
    display?: string;
  };
  createdAt: Date;
}


const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  originalPrice: { type: Number },
  category: { type: String, required: true },
  condition: { type: String, enum: ['New', 'Used'], default: 'New' },
  images: [{ type: String }],
  stock: { type: Number, default: 0 },
  featured: { type: Boolean, default: false },
  specs: {
    ram: String,
    storage: String,
    battery: String,
    camera: String,
    display: String,
  },
  createdAt: { type: Date, default: Date.now },
});

const Product = models.Product || model<IProduct>('Product', productSchema);

export default Product;
