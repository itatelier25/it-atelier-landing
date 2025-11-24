import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Send, MessageCircle, Mail, Instagram, Facebook } from "lucide-react";

const Contacts = () => {
  const { t } = useLanguage();

  const contactMethods = [
    {
      icon: Send,
      label: t("contacts.telegram"),
      href: "https://t.me/your_it_atelier",
      color: "from-accent to-cyan",
    },
    {
      icon: MessageCircle,
      label: t("contacts.whatsapp"),
      href: "https://wa.me/your_number",
      color: "from-green to-accent",
    },
    {
      icon: Mail,
      label: t("contacts.email"),
      href: "mailto:hello@itatelier.example",
      color: "from-cyan to-accent",
    },
    {
      icon: Instagram,
      label: t("contacts.instagram"),
      href: "https://instagram.com/your_it_atelier",
      color: "from-pink to-accent",
    },
    {
      icon: Facebook,
      label: t("contacts.facebook"),
      href: "https://facebook.com/your_it_atelier",
      color: "from-blue to-accent",
    },
  ];

  return (
    <section id="contacts" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("contacts.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("contacts.description")}
          </p>
        </div>

        <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-card border border-border shadow-[var(--shadow-card)] hover-lift">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <method.icon className="w-7 h-7 text-white" />
                </div>
                <span className="font-medium text-foreground">{method.label}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center pt-12 border-t border-border">
          <p className="text-sm text-muted-foreground">
            {t("footer.text")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
