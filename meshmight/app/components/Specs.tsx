import React from 'react';
import { Maximize, Layers, Info } from 'lucide-react';

const standardSeries = [
  {
    name: "MeshMight Gold",
    grade: "P150",
    type: "Heavy Duty",
    mineral: "Aluminum Oxide",
    color: "bg-yellow-600",
    desc: "Best for aggressive stock removal, heavy rust/corrosion removal, and stripping peeling paint. The tough grain cuts fast for demanding surface prep.",
  },
  {
    name: "MeshMight Green",
    grade: "P240",
    type: "Industrial Maintenance",
    mineral: "Aluminum Oxide",
    color: "bg-green-700",
    desc: "The versatile 'workhorse'. Ideal for scrubbing cookware, cleaning fabrication machinery, and preparing metal surfaces for initial coating.",
  },
  {
    name: "MeshMight Maroon",
    grade: "P320",
    type: "General Purpose",
    mineral: "Aluminum Oxide",
    color: "bg-red-900",
    desc: "The industry standard for paint prep. Perfect for scuffing before primer or paint, ensuring optimal adhesion and a consistent matte finish.",
  },
  {
    name: "MeshMight Purple",
    grade: "P600",
    type: "Fine Finishing",
    mineral: "Silicon Carbide",
    color: "bg-purple-700",
    desc: "Sharper grain for a consistent scratch pattern. Ideal for automotive clear coat preparation or finishing stainless steel.",
  },
  {
    name: "MeshMight Gray",
    grade: "P800",
    type: "Ultra Fine",
    mineral: "Silicon Carbide",
    color: "bg-gray-500",
    desc: "Light scuffing and blending. Use as the final step before painting or blending clear coats without altering workpiece geometry.",
  },
  {
    name: "MeshMight White",
    grade: "N/A",
    type: "Light Duty Cleaning",
    mineral: "None",
    color: "bg-slate-100",
    desc: "Non-abrasive. Will not scratch glass, ceramic, or chrome. Ideal for applying liquid detergents, wax, or polishing compounds.",
  },
];

const flexSeries = [
  {
    name: "Flex Red",
    grade: "P400",
    type: "Contour Scuffing",
    mineral: "Silicon Carbide",
    color: "bg-red-900",
    desc: "Best for irregular shapes and tight corners. Wraps around pipes, door handles, and complex automotive trim.",
  },
  {
    name: "Flex Dark Grey",
    grade: "P1000",
    type: "Fine Blending",
    mineral: "Silicon Carbide",
    color: "bg-gray-600",
    desc: "Precision blending on curved surfaces. Removes light oxidation or imperfections without flattening the finish.",
  },
  {
    name: "Flex Brown",
    grade: "P2500",
    type: "Micro Fine Polish",
    mineral: "Silicon Carbide",
    color: "bg-orange-800",
    desc: "High-gloss polishing prep. Ultra-fine abrasive for wet sanding where maintaining surface luster is critical.",
  },
];

export default function Specs() {
  return (
    <section id="specs" className="bg-products-bg text-products-text px-6 pt-10 pb-0">
      <div className="container mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">Technical Specifications</h2>
          <p className="opacity-80 text-lg">
            Engineered specific grades for every stage of the finishing process.
          </p>
        </div>

         {/* --- FLEX SERIES --- */}
         <div>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b border-white/20 pb-4">
            <div>
              <h3 className="text-2xl font-bold">Flex Series</h3>
              <p className="opacity-70 mt-1">Thinner, highly conformable pads designed for precision suface conditioning on curves, contours, and tight spaces.</p>
            </div>
            <div className="flex items-center mt-4 md:mt-0 bg-white/10 px-4 py-2 rounded-full">
              <Maximize className="w-4 h-4 mr-2 opacity-70" />
              <span className="text-sm font-mono">6" x 9" x 0.25"</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {flexSeries.map((item, index) => (
              <div key={index} className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/30 transition-colors">
                 <div className="flex justify-between items-start mb-4">
                  <div className={`w-8 h-8 rounded-full shadow-sm ${item.color} border-2 border-white/20`}></div>
                  <span className="font-mono text-sm bg-black/20 px-2 py-1 rounded text-white/90">
                    {item.grade}
                  </span>
                </div>
                
                <h4 className="text-xl font-bold mb-1">{item.name}</h4>
                <p className="text-sm font-medium opacity-60 uppercase tracking-wider mb-4 text-xs">
                  {item.mineral}
                </p>
                
                <p className="text-sm leading-relaxed opacity-80 border-t border-white/10 pt-4 ">
                  <strong className="block text-gray-600 mb-1">{item.type}</strong>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- STANDARD SERIES --- */}
        <div className="mb-20 mt-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b border-white/20 pb-4">
            <div>
              <h3 className="text-2xl font-bold">Standard Series</h3>
              <p className="opacity-70 mt-1">Durable non-woven pads designed for larger surfaces and general-purpose scuffing. </p>
            </div>
            <div className="flex items-center mt-4 md:mt-0 bg-white/5 px-4 py-2 rounded-full">
              <Maximize className="w-4 h-4 mr-2 opacity-70" />
              <span className="text-sm font-mono">6" x 9" x 0.39"</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {standardSeries.map((item, index) => (
              <div key={index} className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/30 transition-colors group">
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-8 h-8 rounded-full shadow-sm ${item.color} border-2 border-white/20`}></div>
                  <span className="font-mono text-sm bg-black/20 px-2 py-1 rounded text-white/90">
                    {item.grade}
                  </span>
                </div>
                
                <h4 className="text-xl font-bold mb-1">{item.name}</h4>
                <p className="text-sm font-medium opacity-60 uppercase tracking-wider mb-4 text-xs">
                  {item.mineral}
                </p>
                
                <p className="text-sm leading-relaxed opacity-80 border-t border-white/10 pt-4">
                  <strong className="block text-gray-600 mb-1">{item.type}</strong>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}