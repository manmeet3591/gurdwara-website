export default function AboutPage() {
  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">About Us</h1>
        
        <div className="prose prose-lg prose-orange text-gray-600 max-w-none">
          <p>
            Welcome to the <strong>Guru Nanak Sikh Gurdwara</strong> of Murfreesboro, Tennessee. 
            We are a vibrant and growing community dedicated to the teachings of the ten Sikh Gurus and the Sri Guru Granth Sahib Ji.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Our Mission</h2>
          <p>
            Our mission is to provide a spiritual and cultural hub for the Sikh community in Middle Tennessee. 
            We strive to practice and promote the core principles of Sikhism:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Naam Japna:</strong> Remembering God through meditation and singing of hymns (Kirtan).</li>
            <li><strong>Kirat Karni:</strong> Earning an honest living.</li>
            <li><strong>Vand Chhakna:</strong> Selflessly serving others and sharing with those in need.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Everyone is Welcome</h2>
          <p>
            The Gurdwara is open to everyone, regardless of faith, background, or social status. 
            We invite you to join us for our weekly Sunday Diwan (congregation) to experience the peaceful atmosphere, 
            listen to the soothing Kirtan, and share a meal with us in the Guru ka Langar.
          </p>

          <div className="mt-12 p-8 bg-gray-50 rounded-2xl border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Visiting for the first time?</h3>
            <p className="text-sm mb-4">A few things to keep in mind to respect the sacred space:</p>
            <ul className="list-disc pl-6 text-sm space-y-2">
              <li>Please cover your head before entering the Diwan hall (head coverings are provided if needed).</li>
              <li>Please remove your shoes and wash your hands.</li>
              <li>Modest dress is appreciated.</li>
              <li>Tobacco, alcohol, and other intoxicants are strictly prohibited on the premises.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
