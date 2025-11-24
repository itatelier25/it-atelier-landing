import { useLanguage } from "@/contexts/LanguageContext";
import { Hotel, ShoppingCart, Briefcase, Rocket } from "lucide-react";

const Industries = () => {
  const { t } = useLanguage();

  const industries = [
    { icon: Hotel, key: "1" },
    { icon: ShoppingCart, key: "2" },
    { icon: Briefcase, key: "3" },
    { icon: Rocket, key: "4" },
  ];

  return (
    <section id="industries" className="py-20 px-4 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("industries.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("industries.intro")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border shadow-[var(--shadow-card)] hover-lift"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-green to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                  <industry.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {t(`industries.${industry.key}.title`)}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {t(`industries.${industry.key}.text`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
