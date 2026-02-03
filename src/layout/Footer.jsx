import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, Facebook, 
  Instagram, Twitter, Linkedin, ChevronRight 
} from 'lucide-react';
import logo from '../assets/logo.jpeg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const treatments = [
    { name: "Knee Replacement", path: "/treatments/knee" },
    { name: "Hip Replacement", path: "/treatments/hip" },
    { name: "Gynaecology", path: "/treatments/gynae" },
    { name: "Infertility Treatment", path: "/treatments/infertility" },
    { name: "Complex Trauma", path: "/treatments/trauma" },
  ];

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Doctor Profile", path: "/doctor_profiles" },
    { name: "Book Appointment", path: "/contact" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Upper Footer: Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Column 1: About & Social */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-12 w-auto rounded bg-white p-1" />
            <span className="text-white font-black text-xl tracking-tighter">GADCLINIC</span>
          </Link>
          <p className="text-sm leading-relaxed">
            Leading Orthopaedic, Gynaecology, and Infertility center in Delhi. 
            Dedicated to providing advanced surgical care and compassionate treatment.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-red-600 transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-red-600 transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-red-600 transition-colors">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Column 2: Our Treatments */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest border-b border-slate-700 pb-2">Treatments</h4>
          <ul className="space-y-3">
            {treatments.map((item) => (
              <li key={item.name}>
                <Link to={item.path} className="flex items-center gap-2 hover:text-red-500 transition-colors text-sm group">
                  <ChevronRight size={14} className="text-blue-500 group-hover:text-red-500" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest border-b border-slate-700 pb-2">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map((item) => (
              <li key={item.name}>
                <Link to={item.path} className="flex items-center gap-2 hover:text-red-500 transition-colors text-sm group">
                  <ChevronRight size={14} className="text-blue-500 group-hover:text-red-500" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest border-b border-slate-700 pb-2">Contact Us</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="text-blue-500 shrink-0" size={20} />
              <p className="text-sm">C4A 321A, Janak Puri, New Delhi-110058</p>
            </div>
            <a href="tel:+919871189004" className="flex items-center gap-3 hover:text-red-500 transition-colors">
              <Phone className="text-blue-500 shrink-0" size={20} />
              <span className="text-sm">+91 98711 89004</span>
            </a>
            <a href="mailto:info@gadclinic.com" className="flex items-center gap-3 hover:text-red-500 transition-colors">
              <Mail className="text-blue-500 shrink-0" size={20} />
              <span className="text-sm">info@gadclinic.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright */}
      <div className="border-t border-slate-800 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
          <p>© {currentYear} GAD Advanced Clinics. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;