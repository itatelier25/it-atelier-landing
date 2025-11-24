import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Send, MessageCircle, Mail, Instagram, Facebook } from "lucide-react";

const Contacts = () => {
  const { t, lang } = useLanguage(); // или { t, language };

  const contactMethods = [
    {
      icon: Send,
      label: t("contacts.telegram"),
      href:
        lang === "ru"
          ? "https://t.me/It_Atelier" // русская телега
          : "https://t.me/It_Atelier_en", // англ. телега
      color: "from-accent to-cyan",
    },
    {
      icon: MessageCircle,
      label: t("contacts.whatsapp"),
      href: "https://wa.me/85566504612",
      color: "from-green to-accent",
    },
    {
      icon: Mail,
      label: t("contacts.email"),
      href: "mailto:it.atelier25@gmail.com",
      color: "from-cyan to-accent",
    },
    {
      icon: Instagram,
      label: t("contacts.instagram"),
      href: "https://www.instagram.com/it_._atelier",
      color: "from-pink to-accent",
    },
    {
      icon: Facebook,
      label: t("contacts.facebook"),
      href: "https://www.facebook.com/share/1GLXyLxbak/",
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
                  <method.icon className="w-7 h-7 text-accent-foreground" />
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
