import { motion } from "motion/react";
import { Activity, Clock } from "lucide-react";

export default function CapacityWidget() {
  // Mock data for the "Live" feel
  const capacity = 74; // 74% full
  const nextOpening = "April 12th";

  return (
    <section className="bg-zinc-950 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-lg flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-emerald-500/10 rounded-full">
              <Activity className="text-emerald-400" size={24} />
            </div>
            <div>
              <h3 className="text-white font-bold text-xl uppercase tracking-tight">LIVE PRODUCTION CAPACITY</h3>
              <p className="text-zinc-500 text-sm font-mono">UPDATED: TODAY, 08:00 AM</p>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md">
            <div className="flex justify-between mb-2">
              <span className="text-zinc-400 text-xs font-mono uppercase">Current Load</span>
              <span className="text-white text-xs font-mono">{capacity}%</span>
            </div>
            <div className="h-3 bg-zinc-800 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${capacity}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full bg-emerald-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 bg-zinc-800/50 px-6 py-4 rounded border border-zinc-700 w-full md:w-auto">
            <Clock className="text-zinc-400" size={20} />
            <div>
              <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">Next Open Slot</p>
              <p className="text-white font-bold">{nextOpening}</p>
            </div>
          </div>
        </div>
        
        <p className="text-center text-zinc-600 text-xs mt-6 font-mono uppercase tracking-tighter">
          * Lead times are guaranteed for existing Dealer Accounts.
        </p>
      </div>
    </section>
  );
}
