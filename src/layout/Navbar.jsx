import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, MapPin, Mail } from 'lucide-react'; 
import logo from '../assets/logo.jpeg';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 150) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true);  // Scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Doctor Profile', path: '/doctor_profiles' },
    { 
      name: 'Treatments', 
      path: '#',
      dropdown: [
        { name: 'Knee Replacement', path: '/treatments/knee-replacement' },
        { name: 'Fracture', path: '/treatments/fracture' },
        { name: 'Joint Pain', path: '/treatments/joint-pain' },
      ]
    },
    { name: 'Contact Us', path: '/contact' },
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className={`w-full bg-white fixed top-0 z-50 shadow-sm transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
      {/* Upper Section: Logo, Name, and Contact Info */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Logo and Name */}
        <Link to="/" className="flex items-center gap-4 group">
          <img 
            src={logo} 
            alt="GAD Clinic Logo" 
            className="h-16 md:h-20 w-auto object-contain" 
          />
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-black text-blue-900 leading-none tracking-tight">
              GAD ADVANCED ORTHO GYNAE &
            </h1>
            <h2 className="text-lg md:text-xl font-bold text-blue-700 leading-tight">
              INFERTILITY CLINICS
            </h2>
          </div>
        </Link>

        {/* Contact Details  */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="group flex items-center gap-3 p-2 rounded-lg transition-all hover:bg-gray-50 cursor-pointer w-fit">
            <div className="bg-blue-100 p-2 rounded-full overflow-hidden">
              <NavLink to="https://www.google.com/maps/place/GAD+ADVANCED+ORTHO+GYNAE+%26+INFERTILITY+CLINICS/@28.6150988,77.0945855,17z/data=!4m14!1m7!3m6!1s0x390d053f76cc5491:0x3fffac1b7f40e392!2sGAD+ADVANCED+ORTHO+GYNAE+%26+INFERTILITY+CLINICS!8m2!3d28.6150941!4d77.0971604!16s%2Fg%2F11fn74p1bs!3m5!1s0x390d053f76cc5491:0x3fffac1b7f40e392!8m2!3d28.6150941!4d77.0971604!16s%2Fg%2F11fn74p1bs?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D">
              <MapPin className="w-5 h-5 text-blue-600 transition-transform duration-300 group-hover:scale-150" />
              </NavLink>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase">Address</p>
              <p className="text-sm font-semibold text-gray-800">C4A 321A, Janak Puri, New Delhi-58</p>
            </div>
          </div>
          
            <a 
              href="tel:+919871189004" 
              className="group flex items-center gap-3 p-2 rounded-lg transition-all hover:bg-gray-50 cursor-pointer w-fit"
            >
              <div className="bg-blue-100 p-2 rounded-full overflow-hidden">
                <Phone 
                  className="w-5 h-5 text-blue-600 transition-transform duration-300 group-hover:scale-150" 
                />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Call Us</p>
                <p className="text-sm font-semibold text-gray-800">+91 9871189004</p>
              </div>
            </a>
        </div>
      </div>

      {/* Lower Section: Navigation Links and Button */}
      <div className="bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-14">
          {/* <div className="flex space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-bold uppercase tracking-wider transition-colors duration-200 ${
                    isActive ? 'text-white border-b-2 border-white' : 'text-blue-100 hover:text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div> */}


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
        className={({ isActive }) =>
          `text-sm font-bold uppercase tracking-wider transition-colors duration-200 py-4 ${
            isActive ? 'text-white border-b-2 border-white' : 'text-blue-100 hover:text-white'
          }`
        }
      >
        {link.name}
      </NavLink>

      {/* Dropdown Menu */}
      {link.dropdown && isDropdownOpen && (
        <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-b-lg py-2 z-[60] border-t-4 border-blue-700">
          {link.dropdown.map((subLink) => (
            <Link
              key={subLink.name}
              to={subLink.path}
              className="block px-6 py-3 text-blue-900 font-bold text-xs uppercase tracking-widest hover:bg-blue-50 hover:text-blue-600 transition-colors"
              onClick={() => setIsDropdownOpen(false)} // Close when clicked
            >
              {subLink.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  ))}
</div>

          <Link
            to="/book-appointment"
            className="bg-white text-blue-900 px-6 py-2 rounded font-black text-xs uppercase tracking-widest hover:bg-blue-50 transition-all shadow-md"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;