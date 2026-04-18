# Noor Mobile Mall - Full Stack E-commerce

A modern, premium mobile shop e-commerce application built with Next.js 15, Tailwind CSS, and MongoDB.

## 🚀 Features

### Customer Features
- **Modern UI/UX**: Apple-inspired premium design with smooth Framer Motion animations.
- **Shop System**: Filter products by category (iPhone, Samsung, etc.) and condition (New/Used).
- **WhatsApp Integration**: Direct "Order on WhatsApp" buttons for every product and a global floating chat button.
- **Responsive**: Mobile-first design that behaves like a native app on smartphones.
- **Product Details**: Comprehensive specs, image galleries, and pricing.

### Admin Features
- **Dashboard**: Overview of store stats and enquiries.
- **Product Management**: Full CRUD (Create, Read, Update, Delete) for store inventory.
- **Service Management**: Highlight repair and exchange services.

## 🛠️ Tech Stack
- **Frontend**: Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion.
- **Backend**: Next.js API Routes, Node.js.
- **Database**: MongoDB (Mongoose ODM).
- **Icons**: Lucide React.

## ⚙️ Setup Instructions

1. **Clone the project**
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Environment Variables**:
   Create a `.env.local` file in the root and add your MongoDB URI:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   ```
4. **Run in Development**:
   ```bash
   npm run dev
   ```
5. **Build for Production**:
   ```bash
   npm run build
   npm start
   ```

## 🏪 Business Details
- **Shop Name**: Noor Mobile Mall
- **Address**: 6th Road, Rawalpindi
- **WhatsApp**: +92 331 5564008

## 🛡️ Security
- API routes are structured for future JWT integration.
- Input validation on product creation.
- Environment variable protection for sensitive data.
