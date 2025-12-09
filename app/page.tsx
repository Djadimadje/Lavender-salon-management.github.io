import LavenderHero from '@/components/sections/LavenderHero';
import EleganceSection from '@/components/sections/EleganceSection';
import TreatmentsSection from '@/components/sections/TreatmentsSection';
import TestimonialsLavender from '@/components/sections/TestimonialsLavender';
import ValuesSection from '@/components/sections/ValuesSection';
import ShopSection from '@/components/sections/ShopSection';
import InstagramSection from '@/components/sections/InstagramSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <LavenderHero />
      <EleganceSection />
      <TreatmentsSection />
      <TestimonialsLavender />
      <ValuesSection />
      <ShopSection />
     {/* <InstagramSection />*/}
      <Footer />
    </div>
  );
}
