import WorkCard from '@/components/WorkCard';

import { client } from '@/sanity/lib/client';
import { WORKS_QUERY } from '@/sanity/lib/queries';

export const metadata = {
  title: 'Our Works | APNA PRINTS',
};

export default async function WorksPage() {
  const allWorks = await client.fetch(WORKS_QUERY);

  return (
    <div className="bg-background min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of our finest print projects, demonstrating our commitment to quality and detail.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {allWorks.map((work: any, idx: number) => (
            <div key={work._id} className="break-inside-avoid">
              <WorkCard {...work} delay={idx * 0.1} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
