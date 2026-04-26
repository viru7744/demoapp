import "./App.css";

function App() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-4 shadow-sm bg-white">
        <h1 className="text-xl font-bold text-blue-600">SmileCare</h1>

        <div className="space-x-6">
          <a href="#" className="hover:text-blue-500">Home</a>
          <a href="#" className="hover:text-blue-500">Services</a>
          <a href="#" className="hover:text-blue-500">Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between bg-blue-50 px-10 py-16">
        
        {/* LEFT TEXT */}
        <div className="max-w-xl">
          <h2 className="text-5xl font-bold mb-4">
            Brighten Your Smile Today 😁
          </h2>

          <p className="text-gray-600 mb-6">
            Professional & Affordable Dental Care with modern technology.
          </p>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
            Book Appointment
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="mt-10 md:mt-0">
          <img
            src="/images/tooth.png"
            alt="Tooth"
            className="w-[350px] drop-shadow-2xl float"
          />
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-16 px-8 bg-white">
        <h3 className="text-3xl text-center mb-10 font-bold">
          Our Services
        </h3>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="p-6 shadow-lg rounded-xl hover:scale-105 transition">
            🦷 Teeth Cleaning
          </div>

          <div className="p-6 shadow-lg rounded-xl hover:scale-105 transition">
            😁 Root Canal
          </div>

          <div className="p-6 shadow-lg rounded-xl hover:scale-105 transition">
            ✨ Teeth Whitening
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-600 text-white text-center py-6">
        <p>© 2026 SmileCare Dental Clinic. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;