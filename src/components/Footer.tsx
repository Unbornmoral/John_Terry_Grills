import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-warm-cream py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="font-bebas text-3xl tracking-wider">
              GRILL<span className="text-burnt-orange">BLAZE</span> BBQ
            </Link>
            <p className="mt-4 text-warm-gray max-w-md font-inter">
              Slow-Smoked. Fast-Served. Always Bold. Bringing the authentic taste of Texas roadhouse BBQ to your table.
            </p>
          </div>
          <div>
            <h3 className="font-bebas text-xl tracking-wide mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 font-inter text-sm">
              <li><Link href="/menu" className="hover:text-burnt-orange transition-colors">Menu</Link></li>
              <li><Link href="/story" className="hover:text-burnt-orange transition-colors">Our Story</Link></li>
              <li><Link href="/location" className="hover:text-burnt-orange transition-colors">Location & Hours</Link></li>
              <li><Link href="/reservations" className="hover:text-burnt-orange transition-colors">Reservations</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bebas text-xl tracking-wide mb-4">CATERING</h3>
            <ul className="space-y-2 font-inter text-sm">
              <li><Link href="/catering" className="hover:text-burnt-orange transition-colors">Event Catering</Link></li>
              <li><Link href="/catering" className="hover:text-burnt-orange transition-colors">Office Lunch</Link></li>
              <li><Link href="/catering" className="hover:text-burnt-orange transition-colors">Private Events</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-warm-gray text-xs font-inter">
          <p>© {new Date().getFullYear()} GrillBlaze BBQ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
