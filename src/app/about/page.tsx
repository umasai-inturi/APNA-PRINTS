import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { ABOUT_QUERY } from '@/sanity/lib/queries';

export const metadata = {
  title: 'About Us | APNA PRINTS',
};

export default async function AboutPage() {
  const about = await client.fetch(ABOUT_QUERY);

  return (
    <div className="bg-background min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">{about?.title || "Our Story"}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src={about?.image ? urlFor(about.image).url() : "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1200&auto=format&fit=crop"}
              alt={about?.title || "Our Workshop"}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">{about?.heading || "A Legacy of Quality"}</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {about?.description1 || "Founded on the belief that print is not dead, but rather evolving into a premium medium, APNA PRINTS was established to bridge the gap between digital design and physical reality."}
            </p>
            {about?.description2 && (
              <p className="text-lg text-muted-foreground leading-relaxed">
                {about.description2}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
