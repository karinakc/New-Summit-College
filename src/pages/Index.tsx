import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SideNavigation from "@/components/SideNavigation";
import FeatureStatement from "@/components/FeatureStatement";
import Academics from "@/components/Academics";
import Research from "@/components/Research";
import Notices from "@/components/Notices";
import CampusLife from "@/components/CampusLife";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);
  return (
    <div className="min-h-screen bg-background relative">
      {/* Left vertical bar - similar to top bar */}
      <div className="hidden xl:block fixed left-0 top-0 h-full w-10 bg-[hsl(0,60%,35%)] z-30" />
      
      <Header />
      <SideNavigation />
      <main className="xl:pl-24">
        <Hero />
        <FeatureStatement />
        <Academics />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="h-px bg-[hsl(0,60%,35%)]"></div>
        </div>
        <Research />
        <Notices />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="h-px bg-[hsl(0,60%,35%)]"></div>
        </div>
        <CampusLife />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
