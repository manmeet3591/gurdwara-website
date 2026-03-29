import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-orange-50 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-5"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
            Welcome to <span className="text-orange-600">Guru Nanak Sikh Gurdwara</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            A spiritual home for the Sikh community in Murfreesboro and Greater Middle Tennessee. 
            Join us for Kirtan, Katha, and community service.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/events"
              className="rounded-md bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 transition-all"
            >
              Join us this Sunday
            </Link>
            <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900 hover:text-orange-600 transition-colors">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 mx-auto bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Weekly Diwan</h3>
              <p className="mt-2 text-gray-600 text-sm">Every Sunday<br/>10:00 AM - 1:00 PM</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 mx-auto bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Location</h3>
              <p className="mt-2 text-gray-600 text-sm">343 Rucker Road<br/>Murfreesboro, TN 37127</p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 mx-auto bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Langar Seva</h3>
              <p className="mt-2 text-gray-600 text-sm">Community kitchen open after every Diwan. All are welcome.</p>
              <Link href="/seva" className="text-orange-600 text-sm font-medium hover:underline mt-2 inline-block">Sponsor Langar</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Live Stream / Featured Section */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Join us from anywhere
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Can&apos;t make it in person? We broadcast our Sunday Diwans and special Gurpurab programs live so the Sangat can stay connected from home.
              </p>
              <div className="mt-8">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-md bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m10 8 6 4-6 4Z"/><rect x="2" y="6" width="20" height="12" rx="2"/></svg>
                  Watch Live on YouTube
                </a>
              </div>
            </div>
            <div className="relative aspect-video rounded-2xl bg-gray-200 overflow-hidden shadow-lg flex items-center justify-center border border-gray-300">
              <span className="text-gray-500 font-medium flex flex-col items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m10 8 6 4-6 4Z"/><rect x="2" y="6" width="20" height="12" rx="2"/></svg>
                Live stream player placeholder
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
