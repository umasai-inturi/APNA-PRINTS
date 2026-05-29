import Hero from '@/components/Hero';
import WorkCard from '@/components/WorkCard';
import ServiceRow from '@/components/ServiceRow';
import TestimonialCard from '@/components/TestimonialCard';
import ContactForm from '@/components/ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';

import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { 
  HERO_QUERY, ABOUT_QUERY, SERVICES_QUERY, 
  WORKS_QUERY, TESTIMONIALS_QUERY, CONTACT_QUERY 
} from '@/sanity/lib/queries';

export default async function Home() {
  const [hero, about, services, works, testimonials, contact] = await Promise.all([
    client.fetch(HERO_QUERY),
    client.fetch(ABOUT_QUERY),
    client.fetch(SERVICES_QUERY),
    client.fetch(WORKS_QUERY),
    client.fetch(TESTIMONIALS_QUERY),
    client.fetch(CONTACT_QUERY),
  ]);

  return (
    <>
      <Hero data={hero} />

      {/* About Snippet */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{about?.heading || "Crafting Impressions That Last"}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {about?.description1 || "We don't just print ink on paper. We take your vision, wrap it in premium materials, and deliver an experience that your clients will remember. Every project is handled with a designer's eye and a craftsman's precision."}
            </p>
          </div>
        </div>
      </section>

      {/* Recent Works */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Masterpieces</h2>
              <p className="text-muted-foreground">A glimpse into our crafted portfolio.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {works.slice(0, 3).map((work: any, idx: number) => (
              <WorkCard key={work._id} {...work} delay={idx * 0.2} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <div className="bg-background pt-12 pb-24">
        <div className="container mx-auto px-6 lg:px-12 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Tailored solutions for businesses that refuse to compromise on quality.</p>
        </div>
        {services.slice(0, 2).map((service: any, idx: number) => (
          <ServiceRow key={service._id} {...service} reversed={idx % 2 !== 0} />
        ))}
      </div>

      {/* Testimonials */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial: any, idx: number) => (
              <TestimonialCard key={testimonial._id} {...testimonial} delay={idx * 0.2} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Create Together</h2>
              <p className="text-lg text-muted-foreground mb-12">
                Ready to elevate your brand's physical presence? Reach out to us and let's discuss your next project.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Email Us</h4>
                    <p className="text-muted-foreground">{contact?.email || 'hello@apnaprints.com'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Call Us</h4>
                    <p className="text-muted-foreground">{contact?.phone || '+1 (555) 123-4567'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Visit Us</h4>
                    <p className="text-muted-foreground whitespace-pre-line">{contact?.address || '123 Print Avenue, Design District'}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
