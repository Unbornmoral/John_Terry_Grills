'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function ReservationsPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would save to Supabase
  };

  if (submitted) {
    return (
      <>
        <Navbar />
        <main className="flex-grow bg-warm-cream flex flex-col items-center justify-center py-24 px-4">
          <div className="text-6xl mb-6">📅</div>
          <h1 className="text-4xl font-playfair font-bold text-charcoal mb-4 text-center">REQUEST RECEIVED!</h1>
          <p className="text-warm-gray font-inter mb-8 text-center max-w-md">
            We&apos;ve received your reservation request. Our team will check availability and send you a confirmation email shortly.
          </p>
          <Link href="/" className="bg-burnt-orange text-white px-10 py-4 rounded-md font-bebas text-2xl tracking-wider hover:bg-burnt-orange/90 transition-all shadow-xl">
            RETURN HOME
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-charcoal mb-4">RESERVE A TABLE</h1>
            <p className="text-warm-gray font-inter max-w-xl mx-auto">
              Join us for the full GrillBlaze experience. We take reservations for parties of 2 to 12.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-2xl border border-charcoal/5 overflow-hidden">
            <div className="bg-charcoal p-6 text-center">
              <p className="text-amber font-bebas text-2xl tracking-widest uppercase">Book Your Spot</p>
            </div>
            
            <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block font-bebas text-sm tracking-widest text-warm-gray uppercase">Date</label>
                  <input 
                    required
                    type="date" 
                    className="w-full bg-warm-cream/30 border border-charcoal/10 rounded-md p-4 font-inter focus:border-burnt-orange outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block font-bebas text-sm tracking-widest text-warm-gray uppercase">Time</label>
                  <select 
                    required
                    className="w-full bg-warm-cream/30 border border-charcoal/10 rounded-md p-4 font-inter focus:border-burnt-orange outline-none transition-colors appearance-none"
                  >
                    <option value="">Select a time</option>
                    <option>5:00 PM</option>
                    <option>5:30 PM</option>
                    <option>6:00 PM</option>
                    <option>6:30 PM</option>
                    <option>7:00 PM</option>
                    <option>7:30 PM</option>
                    <option>8:00 PM</option>
                    <option>8:30 PM</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block font-bebas text-sm tracking-widest text-warm-gray uppercase">Party Size</label>
                  <select 
                    required
                    className="w-full bg-warm-cream/30 border border-charcoal/10 rounded-md p-4 font-inter focus:border-burnt-orange outline-none transition-colors appearance-none"
                  >
                    <option value="">Number of guests</option>
                    {[2,3,4,5,6,7,8,10,12].map(num => (
                      <option key={num} value={num}>{num} Guests</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block font-bebas text-sm tracking-widest text-warm-gray uppercase">Seating Preference</label>
                  <select 
                    className="w-full bg-warm-cream/30 border border-charcoal/10 rounded-md p-4 font-inter focus:border-burnt-orange outline-none transition-colors appearance-none"
                  >
                    <option>No Preference</option>
                    <option>Indoor Dining Room</option>
                    <option>Smoky Patio</option>
                    <option>Bar Counter</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block font-bebas text-sm tracking-widest text-warm-gray uppercase">Contact Information</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    required
                    type="text" 
                    placeholder="Full Name"
                    className="w-full bg-warm-cream/30 border border-charcoal/10 rounded-md p-4 font-inter focus:border-burnt-orange outline-none transition-colors"
                  />
                  <input 
                    required
                    type="tel" 
                    placeholder="Phone Number"
                    className="w-full bg-warm-cream/30 border border-charcoal/10 rounded-md p-4 font-inter focus:border-burnt-orange outline-none transition-colors"
                  />
                </div>
                <input 
                  required
                  type="email" 
                  placeholder="Email Address"
                  className="w-full mt-4 bg-warm-cream/30 border border-charcoal/10 rounded-md p-4 font-inter focus:border-burnt-orange outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="block font-bebas text-sm tracking-widest text-warm-gray uppercase">Special Notes</label>
                <textarea 
                  rows={3}
                  placeholder="Celebrating a birthday? Let us know!"
                  className="w-full bg-warm-cream/30 border border-charcoal/10 rounded-md p-4 font-inter focus:border-burnt-orange outline-none transition-colors"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-burnt-orange text-white py-5 rounded-md font-bebas text-2xl tracking-wider hover:bg-burnt-orange/90 transition-all shadow-xl active:scale-[0.98]"
              >
                REQUEST RESERVATION
              </button>
            </form>
          </div>

          <div className="mt-12 text-center text-warm-gray font-inter text-sm space-y-2">
            <p>* Same-day reservations must be made before 4:00 PM.</p>
            <p>* For parties larger than 12, please contact our catering team.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

// Missing Link import fix
import Link from 'next/link';
