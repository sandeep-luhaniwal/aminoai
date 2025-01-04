import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import AmiloAiList from "@/components/homepage/AmiloAiList";
import AmiloAiSlider from "@/components/homepage/AmiloAiSlider";
import ContactHere from "@/components/homepage/ContactHere";
import Hero from "@/components/homepage/Hero";
import WhyJoin from "@/components/homepage/WhyJoin";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AmiloAiSlider heading={"AMILO AI ki duniya ko explore karein!"} paragraph={"Aapki Growth ke liye transparent policies aur easy payments, hamesha!"} />
      <AmiloAiSlider classname={'pt-10 lg:pt-12'} heading={"Patrons humein pasand karte hai!"} paragraph={"India me hazaron hotels aur home owners ka trust hai OYO pe. Suniye unke ache experiences"} />
      <WhyJoin />
      <AmiloAiList />
      <ContactHere />
      <Footer />
    </>
  );
}
