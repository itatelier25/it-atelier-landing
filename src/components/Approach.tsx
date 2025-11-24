import { useLanguage } from "@/contexts/LanguageContext";
import { MessageCircle, ClipboardList, Wrench, HandshakeIcon } from "lucide-react";

const Approach = () => {
  const { t } = useLanguage();

  const steps = [
    { icon: MessageCircle, key: "1" },
    { icon: ClipboardList, key: "2" },
    { icon: Wrench, key: "3" },
    { icon: HandshakeIcon, key: "4" },
  ];

  return (
    <section id="approach" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("approach.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("approach.intro")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="flex gap-6 p-6 rounded-2xl bg-card border border-border shadow-[var(--shadow-card)] hover-lift">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-cyan flex items-center justify-center group-hover:scale-110 transition-transform">
                    <step.icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {t(`approach.${step.key}.title`)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(`approach.${step.key}.text`)}
                  </p>
                </div>
              </div>
              
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent/50 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
