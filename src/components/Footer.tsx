import Link from 'next/link';
import Image from 'next/image';
import { Camera, Hash, MessageCircle } from 'lucide-react';
import { SanitySiteSettings } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';

interface FooterProps {
  settings: SanitySiteSettings | null;
}

export default function Footer({ settings }: FooterProps) {
  const navLinks = settings?.navLinks || [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Our Works', path: '/works' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="relative bg-background pt-16 pb-8 border-t border-primary/20 overflow-hidden">
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              {settings?.logo ? (
                <Image
                  src={urlFor(settings.logo).url()}
                  alt={settings?.siteName || 'APNA PRINTS'}
                  width={40}
                  height={40}
                  className="w-auto h-12 object-contain filter grayscale brightness-200 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              ) : (
                <Image
                  src="/logo.png"
                  alt="APNA PRINTS"
                  width={40}
                  height={40}
                  className="w-auto h-12 object-contain filter grayscale brightness-200 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              )}
            </Link>
            <p className="text-muted-foreground max-w-sm">
              We bring your ideas to life with high-quality, premium prints. Handcrafted precision meets modern design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Connect</h4>
            <p className="text-muted-foreground text-sm mb-6">
              {settings?.email || 'hello@apnaprints.com'}<br />
              {settings?.phone || '+1 (555) 123-4567'}<br />
              <a href="https://maps.app.goo.gl/gxYt4CZSWMeBktqd7?g_st=aw" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors mt-2 inline-block">
                View Location
              </a>
            </p>
            <div className="flex gap-4">
              {settings?.socialLinks?.facebook && (
                <a
                  href={settings.socialLinks.facebook}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-background transition-all duration-300 hover:scale-110"
                >
                  <Hash className="w-5 h-5" />
                </a>
              )}
              {settings?.socialLinks?.twitter && (
                <a
                  href={settings.socialLinks.twitter}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-background transition-all duration-300 hover:scale-110"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              )}
              {settings?.socialLinks?.instagram && (
                <a
                  href={settings.socialLinks.instagram}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-background transition-all duration-300 hover:scale-110"
                >
                  <Camera className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {settings?.siteName || 'APNA PRINTS'}. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
