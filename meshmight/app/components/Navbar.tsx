"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.split('#')[1];
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        const offset = window.innerWidth <= 768 ? 60 : 0; // Mobile vs desktop navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const threshold = 10; // Minimum scroll distance to trigger hide/show

    const controlNavbar = () => {
      // Don't hide navbar if mobile menu is open
      if (isOpen) return;
      
      const currentScrollY = window.scrollY;
      
      // Only hide if scrolling down and past threshold
      if (currentScrollY > lastScrollY && currentScrollY > threshold) {
        setIsVisible(false);
      } 
      // Show if scrolling up
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      lastScrollY = currentScrollY;
    };
    
    window.addEventListener('scroll', controlNavbar, { passive: true });
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [isOpen]);

  return (
    // 1. The Main Wrapper (Sticky & Z-Index)
    <nav className={`sticky top-0 z-50 w-full text-white shadow-md transition-transform duration-300 ease-in-out ${
      isVisible || isOpen ? 'translate-y-0' : '-translate-y-full'
    }`}>
      
      
      {/* 2. Top Bar (Logo & Desktop Links) */}
      <div className="w-full bg-black relative z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-White">
            <Link href="/#home" onClick={(e) => handleNavClick(e, '/#home')}>MeshMight</Link>
          </div>

          {/* Hamburger Icon (Mobile Only) */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden focus:outline-none"
          >
            <span className="text-2xl">☰</span>
          </button>

          {/* Desktop Menu (Desktop Only) */}
          <div className="hidden md:flex gap-6">
            <Link href="/#home" className="hover:text-yellow-500 transition" onClick={(e) => handleNavClick(e, '/#home')}>Home</Link>
            <Link href="/#about" className="hover:text-yellow-500 transition" onClick={(e) => handleNavClick(e, '/#about')}>About</Link>
            <Link href="/#story" className="hover:text-yellow-500 transition" onClick={(e) => handleNavClick(e, '/#story')}>Story</Link>
            <Link href="/#products" className="hover:text-yellow-500 transition" onClick={(e) => handleNavClick(e, '/#products')}>Products</Link>
            <Link href="/#specs" className="hover:text-yellow-500 transition" onClick={(e) => handleNavClick(e, '/#specs')}>Specs</Link>
            <Link href="/#contact" className="hover:text-yellow-500 transition" onClick={(e) => handleNavClick(e, '/#contact')}>Contact</Link>
          </div>
        </div>
      </div>

      {/* 3. Mobile Menu Pills (Must be OUTSIDE the Top Bar div) */}
      <div 
        className={`
          md:hidden 
          w-full
          overflow-hidden 
          !bg-transparent
          transition-all duration-300 ease-in-out 
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="max-w-4xl mx-auto px-4 pb-4 pt-2 flex flex-wrap gap-2 justify-end border-t border-transparent !bg-transparent">
          <Link 
            href="/#home" 
            className="px-4 py-2 rounded-full bg-gray-800 text-white text-sm font-medium hover:bg-yellow-500 hover:text-black transition-colors duration-200" 
            onClick={(e) => handleNavClick(e, '/#home')}
          >
            Home
          </Link>
          <Link 
            href="/#about" 
            className="px-4 py-2 rounded-full bg-gray-800 text-white text-sm font-medium hover:bg-yellow-500 hover:text-black transition-colors duration-200" 
            onClick={(e) => handleNavClick(e, '/#about')}
          >
            About
          </Link>
          <Link 
            href="/#story" 
            className="px-4 py-2 rounded-full bg-gray-800 text-white text-sm font-medium hover:bg-yellow-500 hover:text-black transition-colors duration-200" 
            onClick={(e) => handleNavClick(e, '/#story')}
          >
            Story
          </Link>
          <Link 
            href="/#products" 
            className="px-4 py-2 rounded-full bg-gray-800 text-white text-sm font-medium hover:bg-yellow-500 hover:text-black transition-colors duration-200" 
            onClick={(e) => handleNavClick(e, '/#products')}
          >
            Products
          </Link>
          <Link 
            href="/#specs" 
            className="px-4 py-2 rounded-full bg-gray-800 text-white text-sm font-medium hover:bg-yellow-500 hover:text-black transition-colors duration-200" 
            onClick={(e) => handleNavClick(e, '/#specs')}
          >
            Specs
          </Link>
          <Link 
            href="/#contact" 
            className="px-4 py-2 rounded-full bg-gray-800 text-white text-sm font-medium hover:bg-yellow-500 hover:text-black transition-colors duration-200" 
            onClick={(e) => handleNavClick(e, '/#contact')}
          >
            Contact
          </Link>
        </div>
      </div>

    </nav>
  );
}