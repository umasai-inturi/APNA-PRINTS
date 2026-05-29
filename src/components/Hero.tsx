'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

import { SanityHero } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';

interface HeroProps {
  data: SanityHero | null;
}

export default function Hero({ data }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background with Dark Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${data?.backgroundImage ? urlFor(data.backgroundImage).url() : 'https://images.unsplash.com/photo-1562664377-709f2c337eb2?q=80&w=2070&auto=format&fit=crop'}")` }}
      >
        <div className="absolute inset-0 bg-background/80 bg-gradient-to-t from-background via-background/70 to-background/30" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Aligned Content */}
        <div className="text-left flex flex-col items-start max-w-2xl">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {data?.title || 'Print Designs That Define Your'}{' '}
            <span className="text-primary relative inline-block">
              {data?.highlightedWord || 'Style'}
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-primary/40 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
              />
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {data?.description || 'From custom T-shirts to phone cases and frames, we turn your ideas into high-quality prints you can wear, use, and share.'}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button nativeButton={false} render={<Link href={data?.primaryButtonLink || "/contact"} />} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all shadow-lg shadow-primary/20 text-lg px-8 py-6">
              {data?.primaryButtonText || 'Start Your Order'}
            </Button>
          </motion.div>
        </div>

        {/* Overlay card/button on right */}
        <motion.div 
          className="hidden md:flex flex-col bg-card/40 backdrop-blur-md p-8 rounded-2xl border border-border/50 max-w-sm shadow-2xl"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-3">Professional Printing</h3>
          <p className="text-muted-foreground mb-6 text-base">Explore our extensive portfolio of high-quality customized merchandise.</p>
          <Button nativeButton={false} render={<Link href={data?.secondaryButtonLink || "/services"} />} variant="outline" size="lg" className="w-full border-primary text-primary hover:bg-primary/10 transition-all text-base py-6">
            {data?.secondaryButtonText || 'View Our Work'}
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
