

function App() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl p-8">
        <div className="flex flex-col items-center">
          {/* Badge Test */}
          <span className="px-3 py-1 text-sm font-semibold text-green-700 bg-green-100 rounded-full mb-4">
            Clinic Open
          </span>
          
          {/* Typography & Color Test */}
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            GAD Clinic
          </h1>
          
          <p className="text-slate-500 text-center mb-6">
            Welcome to your dashboard. All systems are operational and Tailwind is successfully integrated.
          </p>

          {/* Button Interactivity (Hover/Active) Test */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 shadow-md">
            View Appointments
          </button>
          
          {/* Grid/Spacing Test */}
          <div className="grid grid-cols-2 gap-4 mt-6 w-full text-center">
            <div className="p-3 border border-slate-200 rounded-md">
              <p className="text-xs text-slate-400 uppercase">Patients</p>
              <p className="text-xl font-bold text-slate-700">1,240</p>
            </div>
            <div className="p-3 border border-slate-200 rounded-md">
              <p className="text-xs text-slate-400 uppercase">Wait Time</p>
              <p className="text-xl font-bold text-slate-700">12 min</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App