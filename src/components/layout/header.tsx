"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { AlignJustify, X } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Helper function to determine if a link is active
  const isActive = (path: string) => {
    // For homepage, only exact match
    if (path === "/") {
      return pathname === path;
    }
    // For other pages, check if pathname starts with the path
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-white shadow-sm">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center md:mr-6">
          <Link href="/" className="flex items-center space-x-2">
            <picture>
              <img
                src="/images/wgs-logo.png"
                alt="We Gotcha Served LLC Logo"
                className="h-10 w-auto transition-transform duration-300 hover:scale-105"
                width="40"
                height="40"
                loading="eager"
              />
            </picture>
            <span className="font-bold text-sm md:text-lg text-primary">
              We Gotcha Served LLC
            </span>
          </Link>
        </div>
        <div className="hidden md:flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-4">
            <Link
              href="/services"
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/services') ? 'text-primary' : ''}`}
            >
              Services
            </Link>
            <Link
              href="/areas"
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/areas') ? 'text-primary' : ''}`}
            >
              Service Area
            </Link>
            <Link
              href="/pricing"
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/pricing') ? 'text-primary' : ''}`}
            >
              Pricing
            </Link>
            <Link
              href="/upload"
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/upload') ? 'text-primary' : ''}`}
            >
              Upload
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/contact') ? 'text-primary' : ''}`}
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="md:hidden flex flex-1 items-center justify-end">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="p-2 hover:bg-gray-100"
          >
            {mobileMenuOpen ?
              <X className="h-6 w-6 text-primary" /> :
              <AlignJustify className="h-6 w-6 text-primary" />
            }
          </Button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        ></div>
      )}

      {/* Mobile menu drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[80%] max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-modal="true"
        role="dialog"
      >
        <div className="flex items-center justify-between p-4 border-b bg-white">
          <div className="flex items-center space-x-2">
            <img
              src="/images/wgs-logo.png"
              alt="We Gotcha Served LLC Logo"
              className="h-10 w-auto"
              width="40"
              height="40"
              loading="lazy"
            />
            <span className="font-bold text-base text-primary">
              We Gotcha Served LLC
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:bg-gray-100"
            aria-label="Close menu"
          >
            <X className="h-6 w-6 text-primary" />
          </Button>
        </div>
        <nav className="p-4 bg-white">
          <ul className="space-y-4">
            <li>
              <Link
                href="/services"
                className={`block px-4 py-3 text-lg font-semibold rounded-md bg-white hover:bg-gray-100 hover:text-primary ${isActive('/services') ? 'text-primary' : 'text-gray-900'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/areas"
                className={`block px-4 py-3 text-lg font-semibold rounded-md bg-white hover:bg-gray-100 hover:text-primary ${isActive('/areas') ? 'text-primary' : 'text-gray-900'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Service Area
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className={`block px-4 py-3 text-lg font-semibold rounded-md bg-white hover:bg-gray-100 hover:text-primary ${isActive('/pricing') ? 'text-primary' : 'text-gray-900'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/upload"
                className={`block px-4 py-3 text-lg font-semibold rounded-md bg-white hover:bg-gray-100 hover:text-primary ${isActive('/upload') ? 'text-primary' : 'text-gray-900'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Upload
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`block px-4 py-3 text-lg font-semibold rounded-md bg-white hover:bg-gray-100 hover:text-primary ${isActive('/contact') ? 'text-primary' : 'text-gray-900'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
