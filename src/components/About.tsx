import { useLanguage } from "@/contexts/LanguageContext";
import { Workflow, Zap, Target } from "lucide-react";

const About = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Workflow,
      title: "Fast prototyping",
      titleRu: "Быстрое прототипирование",
    },
    {
      icon: Zap,
      title: "Practical results",
      titleRu: "Практические результаты",
    },
    {
      icon: Target,
      title: "Simple systems",
      titleRu: "Простые системы",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("about.title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
              {t("about.description")}
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border shadow-[var(--shadow-card)] hover-lift"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-cyan flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {t("about.description").includes("небольшое") ? feature.titleRu : feature.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
