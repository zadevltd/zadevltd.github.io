import React from 'react';
// Assuming you are using Lucide or a similar icon set. 
// If not, you can remove the icons or replace them with SVGs.
import { Layers, Zap, ShieldCheck } from 'lucide-react';

export default function Story() {
  return (
    <section id="story" className="bg-products-bg text-products-text px-6 py-20 pb-8">
      <div className="container mx-auto max-w-6xl">
        
        {/* HEADER: The Problem Statement */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-lg font-bold tracking-widest uppercase opacity-80 mb-4">
          Canadian Formulated
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Bridging the gap between heavy removal and final finish.
          </h3>
          <p className="text-lg md:text-xl leading-relaxed opacity-90">
            For years, fabricators have been forced to choose between the aggression of a grinder and the inconsistency of standard sandpaper. MeshMight was engineered to bridge that gap.
          </p>
        </div>

        {/* NARRATIVE: Two-Column Split */}
        <div className="grid md:grid-cols-2 gap-8 items-start md:items-stretch mb-10">
          <div className="bg-white/10 p-8 rounded-2xl border border-white/20 h-full">
            <h4 className="text-2xl font-bold mb-4">From Hyperloop Design Team...</h4>
            <p className="leading-7 opacity-80">
              The concept began in the high-stakes environment of a <i>Hyperloop design team</i>. Founder Devon Zhang was tasked with achieving a flawless finish on high-speed pods, but traditional sandpaper clogged instantly, leaving chaotic, uneven scratch patterns. The team needed precision, but the tools provided only inconsistency.
            </p>
          </div>
          <div className="bg-white/10 p-8 rounded-2xl border border-white/20 h-full">
            <h4 className="text-2xl font-bold mb-4">...To The Assembly Line</h4>
            <p className="leading-7 opacity-80">
              This frustration followed Devon to <i>National Steel Car</i> as a Process Engineer. While heavy grinders removed metal efficiently, they left deep gouges requiring expensive rework. He realized the industry missed a vital middle step: a tool to smooth a path without compromising the part's integrity.
            </p>
          </div>
        </div>

        {/* ENGINEERING: The 3 Metrics */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold">Engineered by Process Engineers</h3>
            <p className="mt-4 opacity-80">We identified three non-negotiable metrics that commercial pads lacked:</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {/* Metric 1 */}
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-6 text-blue-400">
                <Layers size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3">1. Absolute Evenness</h4>
              <p className="text-md leading-6 opacity-80">
                Most pads leave "rogue scratches". We engineered a specific mineral distribution to ensure the scratch pattern remains consistent from the first pass to the last.
              </p>
            </div>

            {/* Metric 2 */}
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-6 text-red-400">
                <Zap size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3">2. Immediate Efficiency</h4>
              <p className="text-md leading-6 opacity-80">
                "Breaking in" a pad is a waste of time. Our grain structure bites the surface instantly, maintaining cycle times without glazing over.
              </p>
            </div>

            {/* Metric 3 */}
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-6 text-green-600">
                <ShieldCheck size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3">3. Industrial Durability</h4>
              <p className="text-md leading-6 opacity-80">
                Standard pads disintegrate under heat. MeshMight uses a high-strength resin bond and 3D web structure to survive industrial friction.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}