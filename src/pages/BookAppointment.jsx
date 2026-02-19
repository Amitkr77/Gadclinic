import React, { useState } from 'react';
import { Phone, Mail, User, Calendar, MessageSquare, Globe } from 'lucide-react';

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    countryCode: '+91',
    email: '',
    service: 'Knee Replacement',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send data to your backend or WhatsApp
    console.log("Appointment Data:", formData);
    alert("Thank you! Dr. Parvinder's team will contact you shortly.");
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-32 md:pt-60 pb-20 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side: Information */}
        <div className="md:w-1/3 bg-blue-900 p-10 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-black mb-6 uppercase leading-tight">Book Your <br/>Priority Visit</h2>
            <p className="text-blue-200 text-sm leading-relaxed mb-8">
              Fill out the form and our medical coordinator will call you to confirm a time slot with the doctor.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-2 rounded-lg"><Phone size={20}/></div>
              <span className="text-sm font-bold">+91 9871189004</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-2 rounded-lg"><Mail size={20}/></div>
              <span className="text-sm font-bold">info@gadclinic.com</span>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="md:w-2/3 p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name Input */}
            <div className="relative">
              <label className="text-xs font-black text-blue-900 uppercase mb-2 block">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="text" required 
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                  placeholder="Your Name"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
            </div>

            {/* Mobile with Country Code */}
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1">
                <label className="text-xs font-black text-blue-900 uppercase mb-2 block">Code</label>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <select 
                    className="w-full pl-10 pr-2 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none appearance-none"
                    onChange={(e) => setFormData({...formData, countryCode: e.target.value})}
                  >
                    <option value="+91">+91 (IN)</option>
                    <option value="+1">+1 (US)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+971">+971 (UAE)</option>
                  </select>
                </div>
              </div>
              <div className="col-span-2">
                <label className="text-xs font-black text-blue-900 uppercase mb-2 block">Mobile Number</label>
                <input 
                  type="tel" required 
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                  placeholder="Enter 10 Digit Mobile Number"
                  onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label className="text-xs font-black text-blue-900 uppercase mb-2 block">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="email" required 
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                  placeholder="example@gmail.com"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            {/* Service Selection */}
            <div>
              <label className="text-xs font-black text-blue-900 uppercase mb-2 block">Required Service</label>
              <select 
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none"
                onChange={(e) => setFormData({...formData, service: e.target.value})}
              >
                <option>Knee Replacement</option>
                <option>Fracture Management</option>
                <option>Joint Pain</option>
                <option>Gynaecology / Infertility</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="text-xs font-black text-blue-900 uppercase mb-2 block">Describe your condition (Optional)</label>
              <textarea 
                rows="3"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none"
                placeholder="Briefly tell us about your pain or injury..."
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4 rounded-xl transition-all shadow-lg shadow-red-200 flex items-center justify-center gap-2"
            >
              <Calendar size={18} />
              CONFIRM APPOINTMENT
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;