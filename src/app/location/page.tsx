import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function LocationPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow bg-warm-cream">
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-playfair font-bold text-charcoal mb-8">FIND US</h1>
                
                <div className="space-y-10">
                  <div>
                    <h2 className="font-bebas text-2xl tracking-wide text-burnt-orange mb-2">ADDRESS</h2>
                    <p className="font-inter text-lg text-charcoal">
                      123 Pitmaster Way<br />
                      Austin, TX 78701
                    </p>
                  </div>

                  <div>
                    <h2 className="font-bebas text-2xl tracking-wide text-burnt-orange mb-2">HOURS</h2>
                    <div className="font-inter text-lg text-charcoal grid grid-cols-2 max-w-xs">
                      <span>Mon - Thu</span><span>11am - 9pm</span>
                      <span>Fri - Sat</span><span>11am - 10pm</span>
                      <span>Sun</span><span>11am - 8pm</span>
                    </div>
                    <p className="mt-2 text-sm text-warm-gray italic">* Or until we sell out!</p>
                  </div>

                  <div>
                    <h2 className="font-bebas text-2xl tracking-wide text-burnt-orange mb-2">CONTACT</h2>
                    <p className="font-inter text-lg text-charcoal">
                      (512) 555-FIRE<br />
                      hello@grillblaze.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-charcoal rounded-lg h-[500px] flex items-center justify-center text-white font-bebas text-3xl overflow-hidden shadow-2xl relative">
                {/* Map Placeholder */}
                <div 
                  className="absolute inset-0 opacity-50 bg-cover bg-center"
                  style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000")' }}
                />
                <div className="relative z-10 bg-charcoal/80 p-8 rounded-md border border-white/20 backdrop-blur-sm text-center">
                  <p className="mb-4">MAP INTERACTIVE COMING SOON</p>
                  <p className="text-xl text-amber">STAY SMOKY</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
