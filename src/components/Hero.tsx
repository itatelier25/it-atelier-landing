import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Decorative circuit pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="2" fill="currentColor" className="text-accent" />
              <circle cx="90" cy="90" r="2" fill="currentColor" className="text-green" />
              <line x1="10" y1="10" x2="90" y2="10" stroke="currentColor" strokeWidth="1" className="text-cyan" />
              <line x1="90" y1="10" x2="90" y2="90" stroke="currentColor" strokeWidth="1" className="text-cyan" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-accent/20">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground">Automation Studio</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground max-w-4xl mx-auto">
            {t("hero.title")}
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("hero.subtitle")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("contacts")}
              className="group bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/20"
            >
              {t("hero.cta.primary")}
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("services")}
              className="border-2 hover:bg-secondary"
            >
              {t("hero.cta.secondary")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
