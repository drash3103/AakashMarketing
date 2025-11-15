"use client";

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-primary text-white shadow-sm sticky top-0 z-40">
      <div className="container py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo rasmikantbhai.jpg"
              alt="Aakash Marketing"
              className="w-14 h-14 object-contain"
            />
            <span className="text-xl font-semibold tracking-tight hidden sm:inline">
              Aakash Marketing
            </span>
          </Link>
        </div>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center space-x-6">
          <Link 
            href="/" 
            className={`px-4 py-2 rounded-lg transition-colors ${
              pathname === '/' 
                ? 'bg-warning text-white font-semibold' 
                : 'hover:text-warning'
            }`}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`px-4 py-2 rounded-lg transition-colors ${
              pathname === '/about' 
                ? 'bg-warning text-white font-semibold' 
                : 'hover:text-warning'
            }`}
          >
            About
          </Link>
          <Link 
            href="/services" 
            className={`px-4 py-2 rounded-lg transition-colors ${
              pathname.startsWith('/services') 
                ? 'bg-warning text-white font-semibold' 
                : 'hover:text-warning'
            }`}
          >
            Services
          </Link>
          <Link 
            href="/customers" 
            className={`px-4 py-2 rounded-lg transition-colors ${
              pathname === '/customers' 
                ? 'bg-warning text-white font-semibold' 
                : 'hover:text-warning'
            }`}
          >
            Our Products
          </Link>
          <Link 
            href="/contact" 
            className={`px-4 py-2 rounded-lg transition-colors ${
              pathname === '/contact' 
                ? 'bg-warning text-white font-semibold' 
                : 'hover:text-warning'
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden p-2 rounded-md hover:bg-white/10 transition"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="sm:hidden bg-primary/95 px-4 pb-4">
          <div className="flex flex-col space-y-3">
            <Link 
              href="/" 
              className={`px-4 py-2 rounded-lg transition-colors ${
                pathname === '/' 
                  ? 'bg-warning text-white font-semibold' 
                  : 'hover:text-warning'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`px-4 py-2 rounded-lg transition-colors ${
                pathname === '/about' 
                  ? 'bg-warning text-white font-semibold' 
                  : 'hover:text-warning'
              }`}
            >
              About
            </Link>
            <Link 
              href="/services" 
              className={`px-4 py-2 rounded-lg transition-colors ${
                pathname.startsWith('/services') 
                  ? 'bg-warning text-white font-semibold' 
                  : 'hover:text-warning'
              }`}
            >
              Services
            </Link>
            <Link 
              href="/customers" 
              className={`px-4 py-2 rounded-lg transition-colors ${
                pathname === '/customers' 
                  ? 'bg-warning text-white font-semibold' 
                  : 'hover:text-warning'
              }`}
            >
              Our Products
            </Link>
            <Link 
              href="/contact" 
              className={`px-4 py-2 rounded-lg transition-colors ${
                pathname === '/contact' 
                  ? 'bg-warning text-white font-semibold' 
                  : 'hover:text-warning'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}