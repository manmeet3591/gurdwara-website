export default function SevaPage() {
  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">Langar & Seva</h1>
            <p className="text-lg text-gray-600 mb-6">
              &quot;Vand Chhako&quot; (share what you earn with the needy) and &quot;Seva&quot; (selfless service) are core tenets of Sikhism. 
              The Guru ka Langar (community kitchen) serves free vegetarian meals to everyone, regardless of background.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Sponsor a Langar</h2>
            <p className="text-gray-600 mb-6">
              Families often sponsor Langar to celebrate birthdays, anniversaries, or in memory of loved ones. 
              If you wish to sponsor a Sunday Langar, please check the available dates and contact the Gurdwara management.
            </p>
            
            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 mt-8">
              <h3 className="font-semibold text-orange-900 mb-2">Current Guidelines</h3>
              <ul className="list-disc list-inside text-orange-800 space-y-2 text-sm">
                <li>All Langar must be strictly vegetarian.</li>
                <li>Please coordinate with the kitchen Sevadars one week prior.</li>
                <li>Cleaning up after Langar is part of the Seva.</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Request a Date</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
                <div className="mt-2">
                  <input type="text" name="name" id="name" className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" placeholder="Your Name" />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
                <div className="mt-2">
                  <input type="tel" name="phone" id="phone" className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" placeholder="(123) 456-7890" />
                </div>
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">Requested Sunday</label>
                <div className="mt-2">
                  <input type="date" name="date" id="date" className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <label htmlFor="occasion" className="block text-sm font-medium leading-6 text-gray-900">Occasion (Optional)</label>
                <div className="mt-2">
                  <textarea id="occasion" name="occasion" rows={3} className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" placeholder="e.g., In memory of..."></textarea>
                </div>
              </div>

              <button type="button" className="w-full rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                Submit Request
              </button>
              <p className="text-xs text-gray-500 text-center mt-4">This is a placeholder form. It does not send emails yet.</p>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
