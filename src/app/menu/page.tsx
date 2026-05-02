'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

const CATEGORIES = ['All', 'Smoked Meats', 'Sides', 'Sauces & Rubs', 'Drinks'];

const MENU_ITEMS = [
  {
    id: 1,
    name: 'Prime Brisket',
    category: 'Smoked Meats',
    price: 24,
    description: '14-hour smoked USDA Prime brisket. Sliced to order (Fatty or Lean). Served with bread and pickles.',
    image: 'https://images.unsplash.com/photo-1599321955419-78537d8d1e09?auto=format&fit=crop&q=80&w=400',
    tags: ['GF']
  },
  {
    id: 2,
    name: 'St. Louis Pork Ribs',
    category: 'Smoked Meats',
    price: 18,
    description: 'Half rack of dry-rubbed, hickory-smoked pork ribs. Falling off the bone tender.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=400',
    tags: ['GF']
  },
  {
    id: 3,
    name: 'Pulled Pork Sandwich',
    category: 'Smoked Meats',
    price: 14,
    description: 'Smoked pork shoulder, piled high on a brioche bun with slaw and original sauce.',
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&q=80&w=400',
    tags: []
  },
  {
    id: 4,
    name: 'Smoked Jalapeño Cheddar Sausage',
    category: 'Smoked Meats',
    price: 12,
    description: 'House-made sausage with a snap. Loaded with cheddar and fresh jalapeños.',
    image: 'https://images.unsplash.com/photo-1547050605-2f10bd023bc3?auto=format&fit=crop&q=80&w=400',
    tags: ['GF']
  },
  {
    id: 5,
    name: 'Mac & 4-Cheese',
    category: 'Sides',
    price: 6,
    description: 'Creamy blend of sharp cheddar, fontina, gruyere, and parmesan with breadcrumb topping.',
    image: 'https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?auto=format&fit=crop&q=80&w=400',
    tags: ['V']
  },
  {
    id: 6,
    name: 'Pit-Smoked Beans',
    category: 'Sides',
    price: 5,
    description: 'Slow-cooked under the brisket to catch all those smoky drippings. Sweet and savory.',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=400',
    tags: ['GF', 'DF']
  },
  {
    id: 7,
    name: 'Texas Red Potato Salad',
    category: 'Sides',
    price: 5,
    description: 'Mustard-based with a little kick of dill and celery seed.',
    image: 'https://images.unsplash.com/photo-1621319011735-99824622df1b?auto=format&fit=crop&q=80&w=400',
    tags: ['GF', 'V']
  },
  {
    id: 8,
    name: 'Signature Original Sauce',
    category: 'Sauces & Rubs',
    price: 8,
    description: '12oz bottle. Our balanced tomato-based sauce with a hint of hickory and spice.',
    image: 'https://images.unsplash.com/photo-1475332433629-98240c31c829?auto=format&fit=crop&q=80&w=400',
    tags: ['GF', 'V']
  }
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { addToCart, totalItems, subtotal } = useCart();

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <>
      <Navbar />
      <main className="flex-grow bg-warm-cream pb-24">
        {/* Header */}
        <section className="bg-charcoal py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-4">OUR MENU</h1>
            <p className="text-amber font-bebas text-2xl tracking-widest">SMOKED FRESH DAILY</p>
          </div>
        </section>

        {/* Filter */}
        <section className="sticky top-20 z-40 bg-warm-cream/95 backdrop-blur-sm border-b border-charcoal/5 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex overflow-x-auto pb-2 sm:pb-0 hide-scrollbar gap-2 sm:justify-center">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full font-bebas text-lg tracking-wide transition-all whitespace-nowrap ${
                    activeCategory === cat 
                      ? 'bg-burnt-orange text-white shadow-md' 
                      : 'bg-white text-charcoal hover:bg-charcoal/5 border border-charcoal/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredItems.map(item => (
                <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-charcoal/5 flex flex-col h-full group">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 flex gap-2">
                      {item.tags.map(tag => (
                        <span key={tag} className="bg-charcoal/80 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl font-playfair font-bold text-charcoal">{item.name}</h3>
                      <span className="text-xl font-bebas text-burnt-orange">${item.price}</span>
                    </div>
                    <p className="text-warm-gray font-inter text-sm mb-6 flex-grow">
                      {item.description}
                    </p>
                    <button 
                      onClick={() => addToCart(item)}
                      className="w-full border-2 border-burnt-orange text-burnt-orange py-3 rounded-md font-bebas text-xl tracking-wider hover:bg-burnt-orange hover:text-white transition-all active:scale-95"
                    >
                      ADD TO ORDER
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Floating Cart Bar */}
        {totalItems > 0 && (
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <Link 
              href="/order"
              className="bg-charcoal text-white flex items-center justify-between p-4 rounded-lg shadow-2xl border border-white/10 hover:bg-charcoal/95 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="bg-burnt-orange text-white w-8 h-8 rounded-full flex items-center justify-center font-bebas text-xl group-hover:scale-110 transition-transform">
                  {totalItems}
                </div>
                <div>
                  <p className="font-bebas text-lg tracking-wide leading-none">VIEW YOUR ORDER</p>
                  <p className="text-warm-gray text-xs font-inter uppercase tracking-widest">{totalItems === 1 ? '1 ITEM' : `${totalItems} ITEMS`}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-amber font-bebas text-2xl tracking-wide leading-none">${subtotal}</p>
                <p className="text-[10px] text-warm-cream/50 font-inter uppercase tracking-tighter">plus tax</p>
              </div>
            </Link>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
