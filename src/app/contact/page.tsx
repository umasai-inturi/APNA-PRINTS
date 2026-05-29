import ContactForm from '@/components/ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';

import { client } from '@/sanity/lib/client';
import { CONTACT_QUERY } from '@/sanity/lib/queries';

export const metadata = {
  title: 'Contact Us | APNA PRINTS',
};

export default async function ContactPage() {
  const contact = await client.fetch(CONTACT_QUERY);

  return (
    <div className="bg-background min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're here to help you bring your print ideas to life. Reach out for a quote or a consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Contact Details */}
          <div className="bg-card p-10 rounded-3xl border border-border shadow-lg">
            <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground">{contact?.email || 'hello@apnaprints.com'}</p>
                  <p className="text-muted-foreground text-sm mt-1">We typically reply within 24 hours.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-1">Phone</h4>
                  <p className="text-muted-foreground">{contact?.phone || '+1 (555) 123-4567'}</p>
                  <p className="text-muted-foreground text-sm mt-1">Mon-Fri from 9am to 6pm.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-1">Studio</h4>
                  <p className="text-muted-foreground whitespace-pre-line">{contact?.address || '123 Print Avenue,\nDesign District, NY 10001'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
