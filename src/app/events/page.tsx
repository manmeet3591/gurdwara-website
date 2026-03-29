export default function EventsPage() {
  const events = [
    {
      id: 1,
      title: "Weekly Sunday Diwan",
      date: "Every Sunday",
      time: "10:00 AM - 1:00 PM",
      description: "Regular Sunday congregation featuring Asa Di Vaar, Kirtan, Katha, and concluding with Anand Sahib and Ardas. Guru ka Langar is served afterwards.",
      type: "Regular Program"
    },
    {
      id: 2,
      title: "Istri Satsang",
      date: "First Saturday of Month",
      time: "2:00 PM - 4:00 PM",
      description: "Special Kirtan and Sukhmani Sahib path recited by the ladies of the Sangat.",
      type: "Monthly Program"
    }
  ];

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Program Schedule</h1>
          <p className="mt-4 text-lg text-gray-600">
            Join us for regular and special programs at the Gurdwara. All are welcome to attend.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {events.map((event) => (
            <div key={event.id} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center rounded-md bg-orange-50 px-2.5 py-1 text-xs font-medium text-orange-700 ring-1 ring-inset ring-orange-600/20">
                  {event.type}
                </span>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">{event.title}</h2>
              <div className="mt-4 flex flex-col gap-2 text-sm text-gray-600 font-medium">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                  {event.date}
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  {event.time}
                </div>
              </div>
              <p className="mt-4 text-gray-600 flex-grow">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
