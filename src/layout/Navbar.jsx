import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpeg';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Doctor Profile', path: '/doctors' },
    { name: 'Treatment', path: '/treatments' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Left Side: Logo & Clinic Name */}
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="GAD Clinic Logo" className="h-14 w-auto object-contain" />
              <div className="hidden lg:block border-l-2 border-blue-600 pl-3">
                <span className="block text-sm font-bold text-blue-900 leading-tight uppercase">
                  GAD Advanced Ortho Gynae &
                </span>
                <span className="block text-xs font-semibold text-blue-700 uppercase tracking-wider">
                  Infertility Clinics
                </span>
              </div>
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-bold transition-colors duration-200 uppercase tracking-wide ${
                    isActive ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right Side: Appointment Button */}
          <div>
            <Link
              to="/book-appointment"
              className="bg-red-600 text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-red-700 transition-all shadow-md active:scale-95 whitespace-nowrap"
            >
              BOOK APPOINTMENT
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}
export default Navbar;