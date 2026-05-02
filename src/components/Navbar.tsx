import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-warm-cream/90 backdrop-blur-md border-b border-charcoal/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-bebas text-3xl tracking-wider text-charcoal">
              John Terry<span className="text-burnt-orange">Grill</span> BBQ
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/menu" className="font-inter text-sm font-medium text-off-black hover:text-burnt-orange transition-colors">
              MENU
            </Link>
            <Link href="/story" className="font-inter text-sm font-medium text-off-black hover:text-burnt-orange transition-colors">
              OUR STORY
            </Link>
            <Link href="/location" className="font-inter text-sm font-medium text-off-black hover:text-burnt-orange transition-colors">
              LOCATION
            </Link>
            <Link href="/order" className="bg-burnt-orange text-white px-6 py-2 rounded-md font-bebas text-lg tracking-wide hover:bg-burnt-orange/90 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              ORDER NOW
            </Link>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button would go here */}
            <button className="text-charcoal p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
