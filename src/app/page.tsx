import HeroSection from '@/components/sections/HeroSection';
import VideoSection from '@/components/sections/VideoSection';
import FeaturesShowcaseSection from '@/components/sections/FeaturesSection';
import ComboSection from '@/components/sections/ComboSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <VideoSection
       autoPlay={false}
       loop={true}
       muted={false}
      />
      <FeaturesShowcaseSection />
      <ComboSection />
    </div>
  );
}
