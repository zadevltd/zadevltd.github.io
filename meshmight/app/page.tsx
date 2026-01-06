import Image from 'next/image';
import { ShieldCheck, Layers, Hammer, MapPin } from 'lucide-react';
import ContactForm from './components/ContactForm';


export default function Home() {
  return (
    <main className="flex flex-col">
      
      {/* 1. HERO SECTION (id="home") */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-hero-bg text-hero-text px-0 relative overflow-hidden">
        {/* Background Image with 40% opacity */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/DSC09403.gif" 
            alt="Background" 
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <Image 
            src="/MeshMight_Gear_Logo.png" 
            alt="MeshMight Logo" 
            width={500} // Made slightly smaller for better fit
            height={100} 
            className="mb-8"
          />
          <p className="text-3xl  max-w-lg font-bold text-center">
            Consistent Cut. Every Time.
          </p>
        </div>
      </section>

      {/* 2. ABOUT SECTION (id="about") */}
      <section id="about" className="min-h-screen flex flex-col justify-center items-center bg-about-bg  text-about-text px-4 py-12">
  
        {/* MAIN CONTAINER: Stacks the rows vertically (Column) */}
        <div className="container mx-auto flex flex-col gap-16 md:gap-24 max-w-6xl px-6">
          
          {/* ==========================
              ROW 1: Introduction
            ========================== */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 px-4">
            
            {/* 1. Text (Right on Desktop) */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
              <h2 className="text-base font-bold uppercase tracking-wide text-about-accent">
                MeshMight: Consistent Cut. Every Time.
              </h2>
              <p className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl text-white">
                The Consistency of a Premium Brand.<br />
                <span className="opacity-80">The Value of MeshMight.</span>
              </p>
              <p className="mt-6 text-lg leading-8 opacity-90">
                In the abrasives industry, "generic" usually means "unpredictable." 
                We founded MeshMight in Canada to break that cycle. We wanted the premium performance 
                of the industry giants without the inflated price tag.
              </p>
            </div>

            {/* 2. Image (Left on Desktop) */}
            <div className="w-full md:w-1/2 flex justify-center">
              <Image 
                src="/DSC09379.gif" 
                alt="Brand" 
                width={400} 
                height={400} 
                className="rounded-lg overflow-hidden object-cover" 
              />
            </div>
          </div>

          {/* ==========================
              ROW 2: The Mesh Detail
              (I moved this OUT of Row 1 so it sits underneath)
            ========================== */}
          <div className="flex flex-col md:flex-row items-start gap-8 px-4">
            
            {/* 1. Text (Right on Desktop) */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
              <div className="relative pl-16">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-400">
                  <Layers className="h-6 w-6 text-black" aria-hidden="true" />
                  </div>
                  <div className="text-xl font-bold leading-7 text-white">
                    The Mesh: Engineered for Conformability
                  </div>
                  <div className="mt-2 text-base leading-7 opacity-80">
                    <p>
                      We engineered our pads with a specific resin formula designed for the North American workflow. 
                      We demanded a "softer" open-web structure that offers superior conformability.
                    </p>
                  </div>
              </div>
            </div>

            {/* 2. Image (Left on Desktop) */}

            <div className="w-full md:w-1/2 flex flex-col items-start md:items-start">
              <div className="relative pl-16">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-400">
                  <Hammer className="h-6 w-6 text-black" aria-hidden="true" />
                </div>
                <div className="text-xl font-bold leading-7 text-white">
                  The Might: Silicon Carbide Power
                </div>
                <div className="mt-2 text-base leading-7 opacity-80">
                  <p>
                    Softness means nothing without durability. We upgraded our fine-finish lines to use 
                    <strong> Silicon Carbide</strong> —a sharper, more aggressive mineral 
                    that cuts faster and cleaner than standard aluminum oxide found in cheaper alternatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* QUALITY CONTROL SECTION */}
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div 
            className="rounded-2xl p-8 sm:p-10 border-2"
          >
              <div className="mx-auto max-w-3xl text-center">
                <div className="flex justify-center mb-4">
                  <ShieldCheck className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-white">
                  Our Standard: Boots on the Ground
                </h3>
                <p className="mt-4 text-lg opacity-90">
                  While we manufacture globally to maximize value, our quality control is strictly Canadian. 
                  We don't just ship boxes; <strong>we have our own team at the factory.</strong>
                </p>
                <p className="mt-4 text-base opacity-70">
                  We retain samples of every single batch to ensure the scratch pattern you trust is the 
                  one you get every time.
                </p>
                
                <div className="mt-8 flex items-center justify-center gap-x-2 text-sm font-medium opacity-60">
                  <MapPin className="h-4 w-4" />
                  <span>Designed & Formulated in Canada. Responsibly Made in China.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
              Ready to experience the difference?
            </h3>
            <p className="text-lg leading-8 opacity-90 mb-8">
              Stop settling for inconsistent generic pads. 
              Upgrade your workflow with MeshMight today.
            </p>
            
            {/* Optional Button */}
            <a 
              href="#contact"
              className="inline-block rounded-md transition-all duration-200 bg-white px-6 py-3 text-md font-semibold text-black shadow-sm hover:bg-[#f9c22d] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Contact Us
            </a>
          </div>

        </div>
      </section>

      {/* 3. PRODUCTS SECTION (id="products") */}
      <section id="products" className="min-h-screen flex flex-col items-center justify-start py-20 bg-products-bg text-products-text px-4">
        <div className="container mx-auto flex flex-col gap-8 md:gap-8 px-4 justify-center items-center">

          <div className="flex flex-col max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold">Our Products</h2>
            <p className="text-lg leading-10 opacity-80">
              Two distinct thicknesses engineered for specific applications.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-20 px-4 xl:gap-40">
              <div className="w-full md:w-1/2 flex flex-col justify-center md:items-center">
                <Image 
                  src="/flex.gif" 
                  alt="Products" 
                  width={400} 
                  height={400} 
                  className="rounded-4xl overflow-hidden object-cover" 
                />
                <a 
                  href="https://www.amazon.com/MeshMight-Flex-6-Pack-Scuff-Pads/dp/B0FP8MB1WF" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex items-center justify-center px-6 py-3 text-base font-bold text-black transition-all duration-200 bg-white rounded-full hover:bg-black hover:text-[#f9c22d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF9900]"
                >
                  Buy on Amazon.com
                </a>
                <a 
                  href="https://www.amazon.ca/Meshmight-Flex-6-Pack-Scuff-Pads/dp/B0FP8MB1WF" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center px-8 py-3 text-base font-bold text-black transition-all duration-200 bg-white rounded-full hover:bg-black hover:text-[#f9c22d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF9900]"
                >
                  Buy on Amazon.ca
                </a>
                </div>

              <div className="w-full md:w-1/2 flex flex-col justify-center md:items-center">
                <Image 
                  src="/regular.gif" 
                  alt="Products" 
                  width={400} 
                  height={400} 
                  className="rounded-4xl overflow-hidden object-cover" 
                />
                <a 
                  href="https://www.amazon.com/MeshMight-Non-Woven-Aluminum-Abrasive-Scouring/dp/B0DYHWKZQ2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex items-center justify-center px-6 py-3 text-base font-bold text-black transition-all duration-200 bg-white rounded-full hover:bg-black hover:text-[#f9c22d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF9900]"
                >
                  Buy on Amazon.com
                </a>
                <a 
                  href="https://www.amazon.ca/12-Pack-Non-Woven-Aluminum-Woodworking-Finishing/dp/B0DYHWKZQ2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center px-8 py-3 text-base font-bold text-black transition-all duration-200 bg-white rounded-full hover:bg-black hover:text-[#f9c22d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF9900]"
                >
                  Buy on Amazon.ca
                </a>
                </div>
            </div>
          

            </div>
      </section>

      {/* 4. CONTACT SECTION (id="contact") */}
      <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-contact-bg text-contact-text px-4 py-12">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-contact-text mb-6 text-center">Ready to start your project?</h2>
          <ContactForm />
        </div>
      </section>

    </main>
  )
}