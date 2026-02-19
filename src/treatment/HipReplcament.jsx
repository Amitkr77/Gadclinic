const HipReplcament = () => {
  return (
    <div className="bg-white min-h-screen pt-32 md:pt-49 pb-20">
      <section className="bg-blue-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-6">Hip Replacement Surgery</h1>
          <p className="text-xl font-medium text-blue-100">Restore Mobility. Regain Freedom.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-3xl font-black text-blue-900">Advanced Arthroplasty</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Dr. Parvinder Singh Arora specializes in total hip replacement, utilizing advanced techniques 
              to ensure faster recovery and long-lasting results. We focus on minimally invasive approaches 
              to reduce post-operative pain and hospital stay.
            </p>
            
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <h3 className="font-bold text-blue-900 mb-4 uppercase tracking-wider">Benefits of Surgery</h3>
              <div className="grid sm:grid-cols-2 gap-4 text-gray-600 font-medium">
                <div className="flex items-center gap-2">⭐ Complete Pain Relief</div>
                <div className="flex items-center gap-2">⭐ Corrected Leg Deformity</div>
                <div className="flex items-center gap-2">⭐ Restored Hip Movement</div>
                <div className="flex items-center gap-2">⭐ Improved Quality of Life</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
              <h4 className="text-blue-900 font-bold mb-4">Common Symptoms</h4>
              <p className="text-sm text-gray-600 mb-6 italic">If you experience these, a consultation may be necessary:</p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex gap-2"><span>📍</span> Chronic Groin Pain</li>
                <li className="flex gap-2"><span>📍</span> Difficulty in Walking/Stairs</li>
                <li className="flex gap-2"><span>📍</span> Stiffness in Hip Joint</li>
                <li className="flex gap-2"><span>📍</span> Pain while Sleeping</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HipReplcament;