import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Anchor } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center bg-zinc-950 text-white px-6 py-20 overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #3f3f46 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center md:text-left">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6"
        >
          <ShieldCheck size={14} />
          <span>DEALER-ONLY MANUFACTURING</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-6 uppercase"
        >
          WE DON'T SELL <br />
          <span className="text-zinc-500">TO THE PUBLIC.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-2xl text-zinc-400 max-w-2xl mb-10 font-light leading-relaxed"
        >
          We build for high-volume dealers who are tired of being burned by flaky lead times. 
          Precision aluminum trailers. <span className="text-white font-medium">Guaranteed delivery windows.</span>
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button className="px-8 py-4 bg-white text-black font-bold text-lg rounded-sm hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group">
            APPLY FOR DEALER ACCOUNT
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 border border-zinc-700 text-white font-bold text-lg rounded-sm hover:bg-zinc-900 transition-colors">
            VIEW TECHNICAL SPECS
          </button>
        </motion.div>
      </div>

      {/* Mobile-First "Dock" Visual */}
      <div className="absolute bottom-0 right-0 opacity-20 pointer-events-none hidden lg:block">
        <Anchor size={400} strokeWidth={0.5} className="text-zinc-800 translate-x-1/4 translate-y-1/4" />
      </div>
    </section>
  );
}
