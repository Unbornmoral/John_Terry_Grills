'use client';

import { useCart } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function OrderPage() {
  const { cart, removeFromCart, addToCart, subtotal, totalItems } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pickupTime: 'ASAP'
  });

  const tax = Math.round(subtotal * 0.0825 * 100) / 100;
  const total = subtotal + tax;

  if (totalItems === 0) {
    return (
      <>
        <Navbar />
        <main className="flex-grow bg-warm-cream flex flex-col items-center justify-center py-24 px-4">
          <div className="text-6xl mb-6">🏜️</div>
          <h1 className="text-4xl font-playfair font-bold text-charcoal mb-4 text-center">YOUR PIT IS EMPTY</h1>
          <p className="text-warm-gray font-inter mb-8 text-center max-w-md">
            Looks like you haven&apos;t added any smoky goodness to your order yet.
          </p>
          <Link href="/menu" className="bg-burnt-orange text-white px-10 py-4 rounded-md font-bebas text-2xl tracking-wider hover:bg-burnt-orange/90 transition-all shadow-xl">
            GO TO MENU
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="flex-grow bg-warm-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-playfair font-bold text-charcoal mb-12">CHECKOUT</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Order Summary */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-lg shadow-sm border border-charcoal/5 overflow-hidden">
                <div className="bg-charcoal p-4">
                  <h2 className="text-white font-bebas text-2xl tracking-wide">YOUR ITEMS</h2>
                </div>
                <div className="divide-y divide-charcoal/5">
                  {cart.map((item) => (
                    <div key={item.id} className="p-6 flex items-center gap-6">
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                      <div className="flex-grow">
                        <h3 className="font-playfair font-bold text-xl text-charcoal">{item.name}</h3>
                        <p className="text-warm-gray text-sm font-inter">${item.price} each</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border border-charcoal/10 rounded-md">
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="px-3 py-1 hover:bg-charcoal/5 transition-colors"
                          >-</button>
                          <span className="px-3 py-1 font-bebas text-lg border-x border-charcoal/10">{item.quantity}</span>
                          <button 
                            onClick={() => addToCart(item)}
                            className="px-3 py-1 hover:bg-charcoal/5 transition-colors"
                          >+</button>
                        </div>
                        <p className="font-bebas text-xl text-charcoal w-16 text-right">${item.price * item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-charcoal/5 overflow-hidden">
                <div className="bg-charcoal p-4">
                  <h2 className="text-white font-bebas text-2xl tracking-wide">PICKUP DETAILS</h2>
                </div>
                <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block font-bebas text-sm tracking-widest text-warm-gray">FULL NAME</label>
                    <input 
                      type="text" 
                      className="w-full bg-warm-cream/30 border border-charcoal/10 rounded-md p-3 font-inter focus:border-burnt-orange outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block font-bebas text-sm tracking-widest text-warm-gray">PHONE NUMBER</label>
                    <input 
                      type="tel" 
                      className="w-full bg-warm-cream/30 border border-charcoal/10 rounded-md p-3 font-inter focus:border-burnt-orange outline-none transition-colors"
                      placeholder="(512) 000-0000"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block font-bebas text-sm tracking-widest text-warm-gray">EMAIL ADDRESS</label>
                    <input 
                      type="email" 
                      className="w-full bg-warm-cream/30 border border-charcoal/10 rounded-md p-3 font-inter focus:border-burnt-orange outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block font-bebas text-sm tracking-widest text-warm-gray">PICKUP TIME</label>
                    <select className="w-full bg-warm-cream/30 border border-charcoal/10 rounded-md p-3 font-inter focus:border-burnt-orange outline-none transition-colors appearance-none">
                      <option>ASAP (approx. 20-30 mins)</option>
                      <option>12:00 PM</option>
                      <option>12:30 PM</option>
                      <option>1:00 PM</option>
                      <option>5:00 PM</option>
                      <option>5:30 PM</option>
                      <option>6:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Total & Payment */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-xl border border-charcoal/5 p-8 sticky top-32">
                <h2 className="font-bebas text-3xl tracking-wide text-charcoal mb-6 border-b border-charcoal/5 pb-4">ORDER TOTAL</h2>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between font-inter text-warm-gray">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-inter text-warm-gray">
                    <span>Tax (8.25%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bebas text-2xl text-charcoal pt-4 border-t border-charcoal/5">
                    <span>TOTAL</span>
                    <span className="text-burnt-orange">${total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-[10px] text-warm-gray font-inter uppercase tracking-widest text-center mb-2">Secure payment powered by Stripe</p>
                  <button className="w-full bg-burnt-orange text-white py-5 rounded-md font-bebas text-2xl tracking-wider hover:bg-burnt-orange/90 transition-all shadow-lg active:scale-95 flex items-center justify-center gap-3">
                    <span>PLACE ORDER</span>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  <Link href="/menu" className="block text-center text-warm-gray hover:text-charcoal font-bebas text-sm tracking-widest transition-colors">
                    BACK TO MENU
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
