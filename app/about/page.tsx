import Navigation from '@/components/layout/Header/Navigation';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/about/HeroSection';
import OurStory from '@/components/about/OurStory';
import WhyChooseUs from '@/components/about/WhyChooseUs';
import TeamSection from '@/components/about/TeamSection';
import GallerySection from '@/components/about/GallerySection';

export const metadata = {
  title: 'About Us - Lavender Salon',
  description: 'Learn about Lavender Salon - where beauty meets wellness. Meet our expert team and discover why we\'re the premier destination for beauty services.',
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <HeroSection />
        <OurStory />
        <WhyChooseUs />
        <TeamSection />
        <GallerySection />
      </main>
      <Footer />
    </>
  );
}
