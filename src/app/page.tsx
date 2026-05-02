import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center overflow-hidden">
          {/* Background Image Placeholder */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-10000 hover:scale-105"
            style={{ 
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&q=80&w=1600")' 
            }}
          />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
                Slow-Smoked. <br />
                <span className="text-burnt-orange">Always Bold.</span>
              </h1>
              <p className="text-xl text-warm-cream/90 font-inter mb-10 max-w-lg">
                Experience authentic Texas-style BBQ, smoked for 14 hours over post oak. Tender brisket, falling-off-the-bone ribs, and bold sides.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/order" 
                  className="bg-burnt-orange text-white text-center px-8 py-4 rounded-md font-bebas text-2xl tracking-wider hover:bg-burnt-orange/90 transition-all shadow-xl"
                >
                  ORDER ONLINE
                </Link>
                <Link 
                  href="/menu" 
                  className="bg-transparent border-2 border-white text-white text-center px-8 py-4 rounded-md font-bebas text-2xl tracking-wider hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  VIEW MENU
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Preview */}
        <section className="py-24 bg-warm-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-4">The Pitmaster Choice</h2>
              <p className="text-warm-gray font-inter max-w-2xl mx-auto">
                We don&apos;t cut corners. From our custom-built smokers to our secret dry rubs, every detail matters.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "14-HOUR SMOKE",
                  desc: "Low and slow is the only way we know. Our brisket is smoked overnight to perfection.",
                  icon: "🔥"
                },
                {
                  title: "LOCAL CUTS",
                  desc: "We partner with local ranchers to bring you the highest quality, grain-fed beef and pork.",
                  icon: "🥩"
                },
                {
                  title: "BOLD SAUCES",
                  desc: "Four house-made sauces ranging from Sweet Honey to our infamous Carolina Reaper Heat.",
                  icon: "🏺"
                }
              ].map((feature, i) => (
                <div key={i} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-charcoal/5 group">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{feature.icon}</div>
                  <h3 className="font-bebas text-2xl mb-3 text-charcoal">{feature.title}</h3>
                  <p className="text-warm-gray font-inter text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-charcoal py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-2">Planning an event?</h2>
              <p className="text-warm-cream/70 font-inter">We offer catering for parties, weddings, and corporate lunches.</p>
            </div>
            <Link 
              href="/catering" 
              className="bg-amber text-charcoal px-10 py-4 rounded-md font-bebas text-2xl tracking-wider hover:bg-amber/90 transition-all whitespace-nowrap"
            >
              GET A QUOTE
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
