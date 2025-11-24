import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
const Navigation = () => {
  const {
    language,
    setLanguage,
    t
  } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
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
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-[var(--shadow-card)]" : "bg-transparent"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={() => scrollToSection("hero")} className="flex items-center gap-3 group">
            <img alt="IT-Atelier" className="h-10 w-auto" src="/lovable-uploads/bc7ff13b-bbf6-4f86-bb08-1f79aa39c8ea.png" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("about")} className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              {t("nav.about")}
            </button>
            <button onClick={() => scrollToSection("services")} className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              {t("nav.services")}
            </button>
            <button onClick={() => scrollToSection("approach")} className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              {t("nav.approach")}
            </button>
            <button onClick={() => scrollToSection("industries")} className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              {t("nav.industries")}
            </button>
            <button onClick={() => scrollToSection("contacts")} className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              {t("nav.contacts")}
            </button>

            {/* Language Switcher */}
            <div className="flex items-center gap-1 ml-4 border-l border-border pl-4">
              <Button variant={language === "en" ? "default" : "ghost"} size="sm" onClick={() => setLanguage("en")} className="h-8 px-3">
                EN
              </Button>
              <Button variant={language === "ru" ? "default" : "ghost"} size="sm" onClick={() => setLanguage("ru")} className="h-8 px-3">
                RU
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button + Language Switcher */}
          <div className="flex md:hidden items-center gap-2">
            <Button variant={language === "en" ? "default" : "ghost"} size="sm" onClick={() => setLanguage("en")} className="h-8 px-2 text-xs">
              EN
            </Button>
            <Button variant={language === "ru" ? "default" : "ghost"} size="sm" onClick={() => setLanguage("ru")} className="h-8 px-2 text-xs">
              RU
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className="md:hidden pb-4 space-y-2">
          <button onClick={() => scrollToSection("about")} className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-lg transition-colors">
            {t("nav.about")}
          </button>
          <button onClick={() => scrollToSection("services")} className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-lg transition-colors">
            {t("nav.services")}
          </button>
          <button onClick={() => scrollToSection("approach")} className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-lg transition-colors">
            {t("nav.approach")}
          </button>
          <button onClick={() => scrollToSection("industries")} className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-lg transition-colors">
            {t("nav.industries")}
          </button>
          <button onClick={() => scrollToSection("contacts")} className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-lg transition-colors">
            {t("nav.contacts")}
          </button>
        </div>
      </div>
    </nav>;
};
export default Navigation;