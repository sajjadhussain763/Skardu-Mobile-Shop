import mongoose, { Schema, model, models } from 'mongoose';

export interface ICategory {
  name: string;
  icon: string;
}

const categorySchema = new Schema<ICategory>({
  name: { type: String, required: true, unique: true },
  icon: { type: String },
});

const Category = models.Category || model<ICategory>('Category', categorySchema);

export default Category;
