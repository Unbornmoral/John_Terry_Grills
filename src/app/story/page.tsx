import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function StoryPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow bg-warm-cream">
        {/* Story Hero */}
        <section className="relative h-[60vh] flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?auto=format&fit=crop&q=80&w=1600")' 
            }}
          />
          <div className="relative z-10 text-center px-4">
            <h1 className="text-6xl md:text-8xl font-playfair font-bold text-white mb-4">OUR STORY</h1>
            <p className="text-amber font-bebas text-3xl tracking-[0.3em]">BORN IN THE PIT</p>
          </div>
        </section>

        {/* Narrative Section */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12 font-inter text-lg text-charcoal leading-relaxed">
              <p className="text-3xl font-playfair font-bold text-burnt-orange leading-snug">
                &ldquo;BBQ isn&apos;t just food; it&apos;s a clock. You can&apos;t rush the smoke, and you can&apos;t cheat the fire.&rdquo;
              </p>
              
              <div className="space-y-6">
                <p>
                  GrillBlaze BBQ started in 1998 in a small roadside trailer in the heart of the Texas Hill Country. Our founder, &ldquo;Smokey&rdquo; Joe Miller, spent two decades perfecting a technique that balances the rugged intensity of post oak smoke with the delicate sweetness of his family&apos;s heirloom dry rubs.
                </p>
                <p>
                  Today, we bring that same uncompromising spirit to every brisket, rib, and link we serve. We still use the same custom-built offset smokers Joe welded himself, and we still stay up all night to ensure every cut is tender enough to melt but bold enough to remember.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
                <div className="bg-white p-8 rounded-lg border border-charcoal/5 shadow-sm">
                  <h3 className="font-bebas text-2xl text-burnt-orange mb-4">THE TECHNIQUE</h3>
                  <p className="text-sm">We use 100% aged post oak, maintaining a consistent 225°F for up to 14 hours. No pellets, no electric heat, no shortcuts.</p>
                </div>
                <div className="bg-white p-8 rounded-lg border border-charcoal/5 shadow-sm">
                  <h3 className="font-bebas text-2xl text-burnt-orange mb-4">THE MISSION</h3>
                  <p className="text-sm">To preserve the heritage of authentic Texas BBQ while providing a modern, convenient experience for our community.</p>
                </div>
              </div>

              <div className="pt-12 text-center">
                <img 
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200" 
                  alt="Pitmaster working" 
                  className="rounded-lg shadow-2xl mb-8"
                />
                <p className="italic text-warm-gray text-sm">&ldquo;Smokey&rdquo; Joe Miller, Pitmaster & Founder</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
