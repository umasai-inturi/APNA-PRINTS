'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import * as Icons from 'lucide-react';
import { SanityImage } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';

interface ServiceRowProps {
  title: string;
  description: string;
  icon?: string;
  image: SanityImage;
  reversed?: boolean;
}

export default function ServiceRow({ title, description, icon, image, reversed = false }: ServiceRowProps) {
  // Map icon safely
  const LucideIcon = icon ? (Icons[icon as keyof typeof Icons] as React.ElementType) || Icons.HelpCircle : null;

  return (
    <section className="py-16">
      <div className={`container mx-auto px-6 lg:px-12 flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
        
        {/* Image Side */}
        <motion.div 
          className="w-full md:w-1/2 relative h-[400px] rounded-2xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/5"
          initial={{ opacity: 0, x: reversed ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={image ? urlFor(image).url() : 'https://images.unsplash.com/photo-1598306448962-eb7bf3096b42?q=80&w=1200&auto=format&fit=crop'}
            alt={title}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Text Side */}
        <motion.div 
          className="w-full md:w-1/2 flex flex-col"
          initial={{ opacity: 0, x: reversed ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-4 mb-4">
            {LucideIcon && (
              <div className="p-3 bg-primary/10 rounded-xl text-primary">
                <LucideIcon className="w-8 h-8" />
              </div>
            )}
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h3>
          </div>
          <div className="w-16 h-1 bg-primary mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground mb-8">
            {description}
          </p>
          <div>
            <Button nativeButton={false} render={<Link href="/services" />} variant="outline" className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all">
              Learn More
              <Icons.ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
