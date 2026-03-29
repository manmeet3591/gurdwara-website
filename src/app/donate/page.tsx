export default function DonatePage() {
  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">Support the Gurdwara</h1>
        <p className="text-lg text-gray-600 mb-12">
          Your Dasvandh (tithe) and donations help maintain the Gurdwara premises, support the Guru ka Langar, and fund community initiatives.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          
          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Online Donations</h2>
            <p className="text-sm text-gray-600 mb-6">
              Secure online donations are coming soon. We are setting up a payment gateway to accept credit cards and ACH transfers safely.
            </p>
            <button disabled className="w-full rounded-md bg-gray-300 px-3 py-2 text-sm font-semibold text-white shadow-sm cursor-not-allowed">
              Coming Soon
            </button>
          </div>

          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">In-Person & Mail</h2>
            <p className="text-sm text-gray-600 mb-4">
              You can make a donation via check or cash using the Golak (donation box) at the Gurdwara during your visit.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Checks can be mailed to:</strong><br/>
              Guru Nanak Sikh Gurdwara<br/>
              343 Rucker Road<br/>
              Murfreesboro, TN 37127
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
