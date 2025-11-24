import { LanguageProvider } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import Industries from "@/components/Industries";
import Contacts from "@/components/Contacts";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <Hero />
        <About />
        <Services />
        <Approach />
        <Industries />
        <Contacts />
      </div>
    </LanguageProvider>
  );
};

export default Index;
