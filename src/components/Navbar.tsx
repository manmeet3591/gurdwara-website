import Link from 'next/link';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 font-semibold text-gray-900 tracking-tight text-lg">
            Guru Nanak Sikh Gurdwara
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Home</Link>
          <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">About</Link>
          <Link href="/events" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Events</Link>
          <Link href="/seva" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Langar & Seva</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Link 
            href="/donate" 
            className="inline-flex h-9 items-center justify-center rounded-md bg-orange-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-orange-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-700"
          >
            Donate
          </Link>
          {/* Mobile menu button could go here */}
          <button className="md:hidden p-2 text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
        </div>
      </div>
    </header>
  );
}
