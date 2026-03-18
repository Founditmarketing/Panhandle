import { motion } from "motion/react";
import { FileText, Truck, MapPin } from "lucide-react";

export default function DealerCTA() {
  return (
    <section className="bg-emerald-600 text-white py-24 px-6 relative overflow-hidden">
      {/* Abstract Map Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 20 Q 25 10, 50 40 T 100 30" fill="none" stroke="white" strokeWidth="0.5" />
          <path d="M0 50 Q 30 60, 60 30 T 100 70" fill="none" stroke="white" strokeWidth="0.5" />
          <path d="M0 80 Q 40 70, 70 90 T 100 80" fill="none" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold tracking-tighter uppercase mb-6">READY TO PARTNER?</h2>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            We are currently accepting 3 new dealer accounts for the Q2 production cycle. 
            Priority given to dealers in the FL Panhandle, AL, and GA.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: <FileText />, title: "Apply", desc: "5-minute application to verify your dealership." },
            { icon: <Truck />, title: "Onboard", desc: "Get your custom wholesale pricing portal." },
            { icon: <MapPin />, title: "Deliver", desc: "First batch delivered within 14 days. Guaranteed." }
          ].map((item, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-xl text-center">
              <div className="inline-flex p-3 bg-white text-emerald-600 rounded-full mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-emerald-100 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="px-12 py-6 bg-white text-emerald-700 font-bold text-xl rounded-full shadow-2xl hover:scale-105 transition-transform">
            START DEALER APPLICATION
          </button>
        </div>
      </div>
    </section>
  );
}
