
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 px-4 py-12">
      <div className="mx-auto max-w-2xl rounded-xl bg-white p-8 shadow">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          Appointment Booking
        </h1>

        <p className="mb-8 text-gray-600">
          Select your preferred date and time to book an appointment.
        </p>

        <form className="space-y-5">
          <div>
            <label className="mb-2 block font-medium text-gray-400">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-lg border p-3 text-gray-400"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-gray-400">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border p-3 text-gray-400"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-gray-400">Booking Date</label>
            <input
              type="date"
              className="w-full rounded-lg border p-3 text-gray-400"
            />
          </div>

          <button
            type="button"
            className="w-full rounded-lg bg-blue-600 p-3 font-semibold text-white hover:bg-blue-700"
          >
            Book Now
          </button>
        </form>
      </div>
    </main>
  );
}
