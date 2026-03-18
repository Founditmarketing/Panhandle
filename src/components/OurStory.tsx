import { motion } from "motion/react";

export default function OurStory() {
  return (
    <section className="bg-white text-black py-24 px-6 border-y border-zinc-200">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-4 block">01 / THE BACKSTORY</span>
            <h2 className="text-4xl font-bold tracking-tight leading-none mb-8 uppercase italic">
              WE WERE DEALERS <br />
              <span className="text-zinc-400">BEFORE WE WERE BUILDERS.</span>
            </h2>
          </div>
          <div className="space-y-6 text-lg text-zinc-700 leading-relaxed">
            <p>
              We started Panhandle Pro because we were sick of the "two-week" lead time that turned into two months. 
              We were tired of trailers that looked great on the lot but rattled apart on the first long haul.
            </p>
            <p className="font-bold text-black border-l-4 border-black pl-6 py-2">
              "We built the shop we wished we had: reliable, technical, and honest. No retail distractions. No one-off custom requests. Just high-volume, high-quality manufacturing."
            </p>
            <p>
              Our focus is narrow: the FL Panhandle, GA, AL, and LA. We stay local so we can deliver on our own trucks and keep our promises.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
