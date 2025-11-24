import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "ru";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    "nav.about": "About",
    "nav.services": "Services",
    "nav.approach": "Approach",
    "nav.industries": "Industries",
    "nav.contacts": "Contacts",
    
    // Hero
    "hero.title": "Automation studio for businesses that are ready to stop doing everything by hand.",
    "hero.subtitle": "IT-Atelier designs and implements end-to-end automations, chat-bots and AI-assistants. We connect services, build flows and make sure your tools finally work together instead of stealing your time.",
    "hero.cta.primary": "Talk to us about automation",
    "hero.cta.secondary": "See what we can automate",
    
    // About
    "about.title": "About IT-Atelier",
    "about.description": "IT-Atelier is a small, flexible automation studio. We help entrepreneurs and teams connect their tools, remove routine work and build simple, reliable systems instead of fragile manual processes.\n\nWe prototype fast, use tools like n8n, custom APIs and AI-models, and focus on practical results: fewer clicks, fewer mistakes, more time for real work.",
    
    // Services
    "services.title": "What we do",
    "services.intro": "We cover the full cycle: from idea and audit to implementation and support. A short overview of our core services:",
    "services.1.title": "Business process automation",
    "services.1.text": "We analyze how your work is done today and design lean workflows: fewer manual steps, fewer spreadsheets, more clarity and control.",
    "services.2.title": "API and service integrations",
    "services.2.text": "We connect CRMs, booking systems, messengers, payment providers and internal tools so that data flows automatically between them.",
    "services.3.title": "Telegram and WhatsApp bots",
    "services.3.text": "We build bots that answer clients, collect requests, send notifications, take orders or connect a human at the right moment.",
    "services.4.title": "RAG and AI-assistants",
    "services.4.text": "We create assistants that answer from your documents and knowledge base: regulations, FAQs, manuals, onboarding materials and more.",
    "services.5.title": "n8n scenarios and automation pipelines",
    "services.5.text": "We design and maintain automation flows on n8n: from simple triggers to multi-step pipelines with conditions, retries and logging.",
    "services.6.title": "Integrations for different business domains",
    "services.6.text": "Hotels, e-commerce, services, internal tools: we adapt our patterns to your exact industry and stack instead of forcing yet another generic template.",
    
    // Approach
    "approach.title": "How we work",
    "approach.intro": "We try to keep the process simple and transparent.",
    "approach.1.title": "1. Quick call or chat",
    "approach.1.text": "We discuss what steals your time today and what systems you already use.",
    "approach.2.title": "2. Mini-audit and proposal",
    "approach.2.text": "We map your processes, suggest where automation makes sense and outline a minimal practical scope.",
    "approach.3.title": "3. Implementation and testing",
    "approach.3.text": "We build flows, connect services, test with real scenarios and adjust until it works smoothly.",
    "approach.4.title": "4. Handover and support",
    "approach.4.text": "We document what we built, show how to use it and can stay nearby to support and extend the system.",
    
    // Industries
    "industries.title": "Who we work with",
    "industries.intro": "We like working with teams that are ready to experiment and iterate, not just talk about 'digital transformation'.",
    "industries.1.title": "Hotels and hospitality",
    "industries.1.text": "Guest communication bots, booking notifications, integrations with OTAs, internal request routing.",
    "industries.2.title": "E-commerce and retail",
    "industries.2.text": "Order flows, customer support bots, inventory sync, notification systems.",
    "industries.3.title": "Service businesses",
    "industries.3.text": "Consulting, education, creative studios — from lead collection to onboarding and project communication.",
    "industries.4.title": "Internal tools and startups",
    "industries.4.text": "Glue between tools, prototypes of internal products, automation around existing SaaS.",
    
    // Contacts
    "contacts.title": "Contacts",
    "contacts.description": "If you need a consultation or still have questions, send us a message in any convenient channel — we will get back to you soon.",
    "contacts.telegram": "Telegram",
    "contacts.whatsapp": "WhatsApp",
    "contacts.email": "Email",
    "contacts.instagram": "Instagram",
    "contacts.facebook": "Facebook",
    "footer.text": "IT-Atelier · Automation, integrations and AI-assistants",
  },
  ru: {
    // Navigation
    "nav.about": "О нас",
    "nav.services": "Услуги",
    "nav.approach": "Подход",
    "nav.industries": "Сферы",
    "nav.contacts": "Контакты",
    
    // Hero
    "hero.title": "Ателье автоматизации для бизнеса, который готов перестать делать всё вручную.",
    "hero.subtitle": "IT-Atelier проектирует и внедряет сквозные автоматизации, чат-ботов и AI-ассистентов. Мы соединяем сервисы, строим сценарии и делаем так, чтобы ваши инструменты работали вместе, а не отнимали время.",
    "hero.cta.primary": "Обсудить автоматизацию",
    "hero.cta.secondary": "Посмотреть, что мы автоматизируем",
    
    // About
    "about.title": "О нас",
    "about.description": "IT-Atelier — небольшое гибкое ателье автоматизации. Мы помогаем предпринимателям и командам связать свои сервисы, убрать рутину и собрать простые, надёжные системы вместо хрупких ручных процессов.\n\nМы быстро прототипируем, используем n8n, собственные API и AI-модели и ориентируемся на практический результат: меньше кликов, меньше ошибок, больше времени на настоящую работу.",
    
    // Services
    "services.title": "Что мы делаем",
    "services.intro": "Мы закрываем весь цикл — от идеи и аудита до внедрения и поддержки. Кратко о наших основных направлениях:",
    "services.1.title": "Автоматизация бизнес-процессов",
    "services.1.text": "Разбираем, как у вас устроена работа сейчас, и проектируем более стройные процессы: меньше ручных шагов, меньше таблиц, больше прозрачности и контроля.",
    "services.2.title": "Интеграция API и сервисов",
    "services.2.text": "Соединяем CRM, системы бронирования, мессенджеры, платёжные сервисы и внутренние инструменты так, чтобы данные передавались автоматически.",
    "services.3.title": "Создание Telegram/WhatsApp-ботов",
    "services.3.text": "Делаем ботов, которые отвечают клиентам, собирают заявки, отправляют уведомления, принимают заказы или подключают человека в нужный момент.",
    "services.4.title": "Построение RAG и AI-ассистентов",
    "services.4.text": "Создаём ассистентов, которые отвечают на основе ваших документов и базы знаний: регламенты, FAQ, инструкции, материалы для онбординга и другое.",
    "services.5.title": "Сценарии и пайплайны на n8n",
    "services.5.text": "Проектируем и сопровождаем сценарии на n8n: от простых триггеров до многошаговых пайплайнов с условиями, повторами и логированием.",
    "services.6.title": "Интеграции для разных сфер бизнеса",
    "services.6.text": "Отели, e-commerce, услуги, внутренние инструменты — мы адаптируем свои подходы под вашу отрасль и стек, а не навязываем универсальный шаблон.",
    
    // Approach
    "approach.title": "Наш подход",
    "approach.intro": "Мы стараемся, чтобы процесс был простым и прозрачным.",
    "approach.1.title": "1. Короткий созвон или переписка",
    "approach.1.text": "Обсуждаем, что забирает у вас время сейчас и какими сервисами вы уже пользуетесь.",
    "approach.2.title": "2. Мини-аудит и предложение",
    "approach.2.text": "Схематично фиксируем процессы, предлагаем, что имеет смысл автоматизировать, и обозначаем минимальный практичный объём работ.",
    "approach.3.title": "3. Внедрение и тестирование",
    "approach.3.text": "Собираем сценарии, подключаем сервисы, тестируем на реальных кейсах и дорабатываем, пока всё не начнёт работать спокойно.",
    "approach.4.title": "4. Передача и поддержка",
    "approach.4.text": "Документируем, что сделано, показываем, как этим пользоваться, и при желании остаёмся рядом для поддержки и развития системы.",
    
    // Industries
    "industries.title": "С кем мы работаем",
    "industries.intro": "Нам комфортно с командами, которые готовы пробовать и дорабатывать решения, а не просто говорить о 'цифровой трансформации'.",
    "industries.1.title": "Отели и гостеприимство",
    "industries.1.text": "Боты для общения с гостями, уведомления о бронированиях, интеграции с OTA, маршрутизация внутренних запросов.",
    "industries.2.title": "E-commerce и розница",
    "industries.2.text": "Потоки заказов, боты поддержки, синхронизация остатков, системы уведомлений.",
    "industries.3.title": "Сервисный бизнес",
    "industries.3.text": "Консалтинг, обучение, креативные студии — от сбора лидов до онбординга и коммуникации по проектам.",
    "industries.4.title": "Внутренние инструменты и стартапы",
    "industries.4.text": "Связка между существующими сервисами, прототипы внутренних продуктов, автоматизация вокруг текущего SaaS.",
    
    // Contacts
    "contacts.title": "Контакты",
    "contacts.description": "Если вам нужна консультация или у вас остались вопросы, напишите нам любым удобным способом — мы ответим в ближайшее время.",
    "contacts.telegram": "Telegram",
    "contacts.whatsapp": "WhatsApp",
    "contacts.email": "Email",
    "contacts.instagram": "Instagram",
    "contacts.facebook": "Facebook",
    "footer.text": "IT-Atelier · Автоматизация, интеграции и AI-ассистенты",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
