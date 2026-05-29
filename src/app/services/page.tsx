import ServiceRow from '@/components/ServiceRow';

import { client } from '@/sanity/lib/client';
import { SERVICES_QUERY } from '@/sanity/lib/queries';

export const metadata = {
  title: 'Services | APNA PRINTS',
};

export default async function ServicesPage() {
  const allServices = await client.fetch(SERVICES_QUERY);

  return (
    <div className="bg-background min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-6 lg:px-12 text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Comprehensive printing solutions tailored for brands that demand excellence.
        </p>
      </div>

      <div className="space-y-4">
        {allServices.map((service: any, idx: number) => (
          <ServiceRow key={service._id} {...service} reversed={idx % 2 !== 0} />
        ))}
      </div>
    </div>
  );
}
