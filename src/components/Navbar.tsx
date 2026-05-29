'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

import { SanitySiteSettings } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';

interface NavbarProps {
  settings: SanitySiteSettings | null;
}

export default function Navbar({ settings }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const leftLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
  ];

  const rightLinks = [
    { name: 'Our Works', path: '/works' },
    { name: 'Contact', path: '/contact' },
  ];

  const allLinks = [...leftLinks, ...rightLinks];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* Desktop Left Nav */}
        <nav className="hidden md:flex flex-1 items-center justify-start gap-8">
          {leftLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`relative text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? 'text-primary' : 'text-foreground'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary scale-x-0 transition-transform origin-left hover:scale-x-100 peer-hover:scale-x-100" />
              </Link>
            );
          })}
        </nav>

        {/* Center Logo */}
        <Link href="/" className="relative z-10 flex flex-1 justify-center items-center">
          {settings?.logo ? (
            <Image
              src={urlFor(settings.logo).url()}
              alt={settings?.siteName || 'APNA PRINTS Logo'}
              width={60}
              height={60}
              className="w-auto h-12 object-contain"
            />
          ) : (
            <Image
              src="/logo.png"
              alt="APNA PRINTS Logo"
              width={60}
              height={60}
              className="w-auto h-12 object-contain"
            />
          )}
          <span className="sr-only">{settings?.siteName || 'APNA PRINTS'}</span>
        </Link>

        {/* Desktop Right Nav */}
        <nav className="hidden md:flex flex-1 items-center justify-end gap-8">
          {rightLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`relative text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? 'text-primary' : 'text-foreground'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary scale-x-0 transition-transform origin-left hover:scale-x-100 peer-hover:scale-x-100" />
              </Link>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-10 p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Nav */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
          transition={{ duration: 0.2 }}
          className={`absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border md:hidden ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className="flex flex-col py-6 px-6 gap-6 text-center items-center">
            {allLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium transition-colors ${
                    pathname === link.path ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </header>
  );
}
