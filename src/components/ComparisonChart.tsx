import { Check, X } from "lucide-react";

export default function ComparisonChart() {
  const features = [
    {
      label: "U-Bolt System",
      us: "Adjustable Marine-Grade Stainless",
      them: "Fixed Galvanized (Rust-Prone)",
      note: "Allows for perfect boat fitment in minutes."
    },
    {
      label: "Lead Time Guarantee",
      us: "Firm 14-Day Window",
      them: "\"Whenever we get to it\"",
      note: "We don't overbook. If we say 14 days, it's 14 days."
    },
    {
      label: "Aluminum Grade",
      us: "6061-T6 Structural Grade",
      them: "Standard 6063 Architectural",
      note: "Superior strength-to-weight ratio for heavy loads."
    },
    {
      label: "Wiring Harness",
      us: "Fully Tinned & Heat-Shrunk",
      them: "Exposed Butt-Connectors",
      note: "Zero electrical failures in saltwater environments."
    }
  ];

  return (
    <section className="bg-zinc-50 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-4 block">TECHNICAL AUTHORITY</span>
          <h2 className="text-4xl font-bold tracking-tight uppercase">THE OTHER GUYS <span className="text-zinc-400">VS.</span> US</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-xl rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-zinc-950 text-white text-left">
                <th className="p-6 font-mono text-xs uppercase tracking-widest">Feature</th>
                <th className="p-6 font-mono text-xs uppercase tracking-widest bg-emerald-900/20 text-emerald-400">Panhandle Pro</th>
                <th className="p-6 font-mono text-xs uppercase tracking-widest text-zinc-500">Industry Standard</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {features.map((f, i) => (
                <tr key={i} className="hover:bg-zinc-50 transition-colors">
                  <td className="p-6">
                    <p className="font-bold text-zinc-900">{f.label}</p>
                    <p className="text-xs text-zinc-500 mt-1">{f.note}</p>
                  </td>
                  <td className="p-6 bg-emerald-50/30">
                    <div className="flex items-center gap-2 text-emerald-700 font-medium">
                      <Check size={18} className="text-emerald-500 shrink-0" />
                      {f.us}
                    </div>
                  </td>
                  <td className="p-6">
                    <div className="flex items-center gap-2 text-zinc-500">
                      <X size={18} className="text-zinc-300 shrink-0" />
                      {f.them}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
