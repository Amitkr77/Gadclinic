import Team from '../assets/Team.jpeg';
import { ShieldCheck, Award, Heart } from 'lucide-react';

const WhyChoose = () => {
  return (
    <>
        <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
               <div className="rounded-[4rem] overflow-hidden border-[15px] border-blue-50">
                  <img src={Team} alt="Surgery Technology" className="w-full h-full object-cover" />
               </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-black text-blue-900 mb-6 uppercase">Why Choose Us</h2>
              <p className="text-red-600 font-bold mb-8 italic">Your Health, Our Priority: Choose Excellence with Us</p>
              
              <div className="space-y-8">
                {[
                  { icon: <ShieldCheck />, title: "Precision and Innovation", text: "We use latest technology like 'Fast-Track' and navigation technology for zero-error alignment." },
                  { icon: <Award />, title: "Experienced Team", text: "Led by surgeons with nearly two decades of experience and thousands of successful procedures." },
                  { icon: <Heart />, title: "Compassionate Care", text: "A trained team of physiotherapists and counselors to help patients recover in a comfortable environment." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="text-blue-600 mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-lg text-blue-900 mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChoose;
