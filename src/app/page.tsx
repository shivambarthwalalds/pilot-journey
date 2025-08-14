import BannerImage from "@/components/LandingPage/BannerImage";
import FormSection from "@/components/LandingPage/FormSection";
import Gallery from "@/components/LandingPage/Gallery";
import HomeCourse from "@/components/LandingPage/HomeCourse";
import EnhancedUSPS from "@/components/LandingPage/USPS";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <BannerImage />
      {/* <div className="block md:hidden">
        <FormSection />
      </div> */}
      <Gallery />
      <EnhancedUSPS />
      <HomeCourse />
    </div>
  );
}
