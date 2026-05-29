'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { SanityImage } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';

interface WorkCardProps {
  title: string;
  category: string;
  image: SanityImage;
  delay?: number;
}

export default function WorkCard({ title, category, image, delay = 0 }: WorkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="group relative overflow-hidden rounded-xl bg-card border border-border aspect-square sm:aspect-auto sm:h-80"
    >
      <Image
        src={image ? urlFor(image).url() : 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1200&auto=format&fit=crop'}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Dark overlay that appears on hover */}
      <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          className="translate-y-4 group-hover:translate-y-0 transition-all duration-300"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-2 block">
            {category}
          </span>
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
        </motion.div>
      </div>
    </motion.div>
  );
}
