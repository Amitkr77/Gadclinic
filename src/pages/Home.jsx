import { Link } from 'react-router-dom';
import HeroSection from '../home/HeroSection';
import GoogleReviews from '../home/GoogelReviews';
import { Activity, Stethoscope, Award, ShieldCheck, ChevronRight } from 'lucide-react';
import WhyChoose from '../home/WhyChoose';
import Expertise from '../home/Expertise';
import KneeReplacement from '../home/KneeReplacement';

const Home = () => {
  return (
    <div className="bg-white">
      {/* 1. Hero Section (Includes Doctor Profiles) */}
      <HeroSection />


      {/* Knee Replacement Section */}
      <KneeReplacement />


     <section className="bg-[#05142b] py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Years Of Experience", value: "20 +", icon: <Award size={32}/> },
              { label: "Happy Patients", value: "1,000 +", icon: <Activity size={32}/> },
              { label: "Doctors and Staff", value: "50 +", icon: <Stethoscope size={32}/> },
              { label: "Clinic Room", value: "20 +", icon: <ShieldCheck size={32}/> }
                ].map((stat, i) => (
                  <div key={i} className="text-center text-white space-y-3">
                    <div className="text-blue-400 flex justify-center">{stat.icon}</div>
                      <h3 className="text-4xl font-black">{stat.value}</h3>
                      <p className="text-gray-300 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
                    </div>
                    ))}
                </div>
            </section>

      {/* 3. Welcome / About Section (Matches Image dc9d44) */}
      

      {/* 4. Specialized Services (Matches Image dc9de1) */}
      <Expertise />

      {/* 5. Why Choose Us (Matches Image dca106) */}
      <WhyChoose />
      

      <GoogleReviews />
    </div>
  );
};

export default Home;