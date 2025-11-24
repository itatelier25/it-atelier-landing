import { useLanguage } from "@/contexts/LanguageContext";
import { Cog, Link2, MessageSquare, Brain, GitBranch, Building2 } from "lucide-react";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Cog, key: "1" },
    { icon: Link2, key: "2" },
    { icon: MessageSquare, key: "3" },
    { icon: Brain, key: "4" },
    { icon: GitBranch, key: "5" },
    { icon: Building2, key: "6" },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("services.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("services.intro")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border shadow-[var(--shadow-card)] hover-lift"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-cyan flex items-center justify-center group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-accent-foreground" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {t(`services.${service.key}.title`)}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(`services.${service.key}.text`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
