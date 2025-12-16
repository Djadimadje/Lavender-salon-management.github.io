import Navigation from '@/components/layout/Header/Navigation';
import Footer from '@/components/layout/Footer';
import ContactHero from '@/components/contact/ContactHero';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';
import BusinessHours from '@/components/contact/BusinessHours';
import MapSection from '@/components/contact/MapSection';

export const metadata = {
  title: 'Contact Us - Lavender Salon',
  description: 'Get in touch with Lavender Salon. Find our location, business hours, and contact information. We\'re here to answer your questions and book your appointment.',
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <ContactHero />
        <ContactInfo />
        <ContactForm />
        <BusinessHours />
        <MapSection />
      </main>
      <Footer />
    </>
  );
}
