import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, MapPin, Mail, Menu, X, ChevronDown } from 'lucide-react';
import gadlogo from '../assets/gadlogo.png';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // MOBILE STATES
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 150) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Doctor Profile', path: '/doctor-profiles' },
    { 
      name: 'Treatments', 
      path: '#',
      dropdown: [
        { name: "Knee Replacement", path: "/treatments/knee-replacement" },
        { name: "Fracture Management", path: "/treatments/fracture" },
        { name: "Join Pain Relief", path: "/treatments/joint-pain" },
        { name: "Infertility Care", path: "/treatments/infertility" },
        { name: "IVF Specialist", path: "/treatments/ivf" },
        { name: "Hip Replacement", path: "/treatments/hip-replacement" },
      ]
    },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className={`w-full bg-white fixed top-0 z-100 shadow-sm transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
      
      {/* Upper Section */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-row justify-between items-center gap-4">
        <Link to="/" className="flex items-center gap-4 group">
          <img
            src={gadlogo}
            alt="Logo"
            className="h-20 md:h-28 w-auto object-contain mix-blend-multiply filter drop-shadow-md transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <h1 className="text-sm md:text-2xl font-black text-blue-900 leading-none tracking-tight">
              GAD ADVANCED ORTHO GYNAE &
            </h1>
            <h2 className="text-[10px] md:text-xl font-bold text-blue-700 leading-tight">
              INFERTILITY CLINICS
            </h2>
          </div>
        </Link>

        

        {/* Desktop Contacts */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-3">
             <div className="bg-blue-100 p-2 rounded-full"><MapPin className="w-5 h-5 text-blue-600" /></div>
             <div><p className="text-xs text-gray-500 font-bold uppercase">Address</p><p className="text-sm font-semibold text-gray-800">Janak Puri, New Delhi</p></div>
          </div>
          <a href="tel:+919871189004" className="flex items-center gap-3">
             <div className="bg-blue-100 p-2 rounded-full"><Phone className="w-5 h-5 text-blue-600" /></div>
             <div><p className="text-xs text-gray-500 font-bold uppercase">Call Us</p><p className="text-sm font-semibold text-gray-800">+91 9871189004</p></div>
          </a>
        </div>

        

        {/* MOBILE TOGGLE BUTTON */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-blue-900 hover:bg-gray-100 rounded-md transition-colors"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>


      

      {/* DESKTOP LOWER SECTION (Hidden on Mobile) */}
      <div className="hidden lg:block bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-14">
          <div className="flex space-x-8">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative group h-full flex items-center"
                onMouseEnter={() => link.dropdown && setIsDropdownOpen(true)}
                onMouseLeave={() => link.dropdown && setIsDropdownOpen(false)}
              >
                <NavLink 
                  to={link.path} 
                  className={({ isActive }) => {
                    const baseClasses = "text-sm font-bold uppercase py-4 transition-colors";
                    const activeClasses = (isActive && link.name !== 'Treatments') 
                      ? 'text-white border-b-2 border-white' 
                      : (isActive ? 'text-white' : 'text-blue-100 hover:text-white');

                    return `${baseClasses} ${activeClasses}`;
                  }}
                >
                  {link.name}
                </NavLink>
                {link.dropdown && isDropdownOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-xl py-2 border-t-4 border-blue-700">
                    {link.dropdown.map((sub) => (
                      <Link key={sub.name} to={sub.path} className="block px-6 py-3 text-blue-900 font-bold text-xs hover:bg-blue-50">
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <Link to="/book-appointment" className="bg-white text-blue-900 px-6 py-2 rounded font-black text-xs uppercase shadow-md">
            Book Appointment
          </Link>
        </div>
      </div>

      {/* MOBILE MENU SECTION */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-blue-900 ${isMobileMenuOpen ? 'max-h-screen border-t border-blue-800' : 'max-h-0'}`}>
        <div className="px-4 py-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <div key={link.name} className="flex flex-col">
              <div className="flex justify-between items-center">
                <Link 
                  to={link.path} 
                  onClick={() => !link.dropdown && setIsMobileMenuOpen(false)}
                  className="text-blue-50 font-bold py-3 text-base uppercase tracking-wider"
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <button 
                    onClick={() => setMobileTreatmentsOpen(!mobileTreatmentsOpen)}
                    className="p-2 text-blue-100"
                  >
                    <ChevronDown className={`transition-transform ${mobileTreatmentsOpen ? 'rotate-180' : ''}`} />
                  </button>
                )}
              </div>
              
              {/* Mobile Dropdown Items */}
              {link.dropdown && mobileTreatmentsOpen && (
                <div className="bg-blue-950/50 rounded-lg pl-4 mb-2">
                  {link.dropdown.map((sub) => (
                    <Link 
                      key={sub.name} 
                      to={sub.path} 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-blue-200 py-3 text-sm font-semibold border-l border-blue-800 pl-4 hover:text-white"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          <Link 
            to="/book-appointment" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 bg-white text-blue-900 text-center py-4 rounded-md font-black uppercase tracking-widest shadow-lg active:scale-95 transition-transform"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;