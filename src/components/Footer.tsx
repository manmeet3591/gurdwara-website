import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-200 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Guru Nanak Sikh Gurdwara</h3>
            <p className="text-sm text-gray-600 max-w-xs">
              A welcoming space for worship, community, and service in Middle Tennessee.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Location</h3>
            <address className="text-sm text-gray-600 not-italic">
              343 Rucker Road<br />
              Murfreesboro, TN 37127<br />
              United States
            </address>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/about" className="hover:text-orange-600 transition-colors">About Us</Link></li>
              <li><Link href="/events" className="hover:text-orange-600 transition-colors">Program Schedule</Link></li>
              <li><Link href="/seva" className="hover:text-orange-600 transition-colors">Langar Sign-up</Link></li>
              <li><Link href="/contact" className="hover:text-orange-600 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Guru Nanak Sikh Gurdwara, Murfreesboro TN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
