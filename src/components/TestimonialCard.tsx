'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

import { SanityImage } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';

interface TestimonialCardProps {
  name: string;
  feedback: string;
  avatar?: SanityImage;
  delay?: number;
}

export default function TestimonialCard({ name, feedback, avatar, delay = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5, rotate: 1 }}
      className="bg-card p-8 rounded-2xl border border-border shadow-lg relative"
    >
      <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
      <div className="mb-6 relative z-10">
        <p className="text-muted-foreground text-lg leading-relaxed italic">
          "{feedback}"
        </p>
      </div>
      <div className="flex items-center gap-4 border-t border-border pt-6">
        {avatar ? (
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image src={urlFor(avatar).url()} alt={name} fill className="object-cover" />
          </div>
        ) : (
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <h4 className="text-foreground font-semibold">{name}</h4>
        </div>
      </div>
    </motion.div>
  );
}
