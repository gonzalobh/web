const translations = {
  fr: {
    page: {
      title: {
        home: 'Facture.mu – Eldorado de la facturation',
        pricing: 'Facture.mu – Tarifs'
      }
    },
    nav: {
      home: 'Accueil Facture.mu',
      features: 'Fonctionnalités',
      pricing: 'Tarifs',
      faq: 'FAQ',
      contact: 'Contact'
    },
    actions: {
      login: 'Se connecter',
      free_trial: 'Essai 15j gratuits'
    },
    hero: {
      title: 'La facturation simple et intelligente pour les entreprises à Maurice 🇲🇺',
      subtitle: "Passez moins de temps à facturer et plus de temps à développer votre activité grâce à une facturation professionnelle, multilingue et multi-devises.",
      demo: 'Voir la démo',
      features_link: 'Voir les fonctionnalités',
      tagline: 'Conçu pour les entreprises qui opèrent à Maurice et au-delà',
      quote: '« plus facile et rapide qu’Excel ! »'
    },
    features: {
      title: 'Tout ce dont vous avez besoin pour facturer sereinement',
      subtitle: 'Une plateforme moderne pensée pour l’écosystème business mauricien et international',
      items: {
        quotes: 'Devis & Factures<br>personnalisables',
        export: 'Export & Import<br>de vos données',
        send: 'Envoi par email<br>et WhatsApp',
        currencies: '+160 devises',
        languages: 'Multi-langue',
        reminders: 'Relances automatiques'
      }
    },
    functionalities: {
      title: 'Fonctionnalités',
      subtitle: 'Une plateforme moderne avec les fonctionnalités clés pour gérer la facturation locale et internationale.',
      items: {
        one: 'Faites Devis, Factures et Reçus',
        two: 'Transformez Devis en Factures',
        three: 'Envoyez-les par email ou Whatsapp',
        four: 'Suivez les paiement des factures',
        five: 'Relancez les impayés automatiquement',
        six: 'Peronnalisez le design des factures',
        seven: 'Donnez un accès à vos collaborateurs'
      }
    },
    activity: {
      title: 'Pour votre activité',
      subtitle: 'Une plateforme pensée pour les entreprises, cabinets et indépendants opérant à Maurice et à l’international.',
      heading: 'Le logiciel de facturation gratuit conçu pour les freelances, consultants, indépendants et petites entreprises.',
      body: 'Facturation pour freelances et entreprises de toutes tailles.<br><br>Projetez une image professionnelle avec des factures au design soigné et alignées à votre marque. Gagnez du temps grâce à l’envoi automatique, au suivi des paiements et aux rappels amicaux en cas de retard.',
      cta: 'Essai 15j gratuits'
    },
    usecases: {
      retail: {
        title: 'Détaillant / Distributeur',
        before: 'Avant',
        before_items: [
          'Rapports de vente à partir des factures',
          'Gestion des stocks dans des feuilles de calcul',
          'Serveur local, accessible uniquement au bureau',
          'Impossible de cibler les groupes clients pour la publicité'
        ],
        after_items: [
          'Données dans le cloud, accessibles partout',
          'Analyses intelligentes pour exploiter les données',
          'Identification des clients performants'
        ],
        result: '👉🏽  <strong>+20 % de chiffre d’affaires cette année</strong>'
      },
      services: {
        title: 'Entreprise de services',
        before: 'Avant',
        before_items: [
          'Facturation et dépenses dans des systèmes séparés',
          'Retards constants de paiement'
        ],
        after_items: [
          'Facturation récurrente automatisée',
          'Envoi par email ou WhatsApp',
          'Relances automatiques = trésorerie améliorée'
        ],
        result: '👉🏽  <strong> plus de soucis de trésorerie</strong>'
      },
      sme: {
        title: 'PME',
        before: 'Avant',
        before_items: [
          'Expert-comptable coûteux',
          'Retards TVA et paiements fournisseurs'
        ],
        after_items: [
          'Accès partagé avec l’expert-comptable',
          'Factures scannées et centralisées'
        ],
        result: '👉🏽  <strong>trésorerie assainie et paiements ponctuels</strong>'
      },
      footer: 'Facture.mu vous permet d’automatiser et de rationaliser la facturation, la gestion des dépenses et l’analyse commerciale.<br><strong>Résultat : une trésorerie plus saine et plus de revenus.</strong>'
    },
    testimonials: {
      title: 'Témoignages',
      subtitle: 'Une solution de facturation de confiance pour les entreprises et les indépendants.',
      items: {
        one: {
          text: 'Facture.mu a transformé notre manière de gérer le club. Tout est plus clair, plus organisé, et nous passons beaucoup moins de temps sur l’administratif.',
          by: 'Stéphanie de'
        },
        two: {
          text: 'Grâce à Facture.mu, nous passons beaucoup moins de temps sur l’administratif et bien plus de temps à aider les animaux. La gestion est plus claire, plus organisée et beaucoup plus sereine.',
          by: 'Audrey de'
        },
        three: {
          text: 'Grâce à Facture.mu, La Vanilleraie Vanillart peut désormais gérer des ventes en plusieurs devises en toute simplicité. La facturation est claire, structurée, et nous permet de nous concentrer pleinement sur notre cœur de métier : la vanille.',
          by: 'Dhareena de'
        }
      }
    },
    pricing: {
      title: 'Tarifs',
      toggle_label: 'Basculer la tarification annuelle',
      billing: {
        monthly: 'Mensuel',
        annual: 'Annuel'
      },
      plans: {
        start: {
          name: 'Start',
          price: 'Gratuit',
          equivalent: 'Oui, gratuit',
          features: [
            '1 utilisateur',
            'Jusqu’à 5 clients',
            'Factures et devis sans limite',
            'Documents avec votre logo'
          ],
          cta: "S'inscrire"
        },
        grow: {
          name: 'Grow',
          term: {
            monthly: '/ mois',
            annual: '/ an'
          },
          equivalent: {
            monthly: '(9,9€ / mois)',
            annual: '(99€ / an)'
          },
          features: [
            '1 utilisateur',
            'Clients sans limite',
            'Gestion et suivi de paiements',
            'Rappels automatiques'
          ],
          cta: "S'inscrire"
        },
        scale: {
          name: 'Scale',
          term: {
            monthly: '/ mois',
            annual: '/ an'
          },
          equivalent: {
            monthly: '(19,9€ / mois)',
            annual: '(199€ / an)'
          },
          features: [
            '3 utilisateurs',
            'Multi devises',
            'Emails avec PJ',
            'Accès API'
          ],
          cta: "S'inscrire"
        }
      },
      view_all: 'Voir tous les tarifs'
    },
    final_cta: {
      title: 'Commencez à facturer dès aujourd’hui !',
      subtitle: 'Facturez vos clients, soyez payé rapidement !',
      cta: 'Essai 15j gratuits'
    },
    faq: {
      title: 'Questions fréquentes',
      subtitle: 'Posez-nous vos questions',
      items: {
        one: {
          question: 'Mon entreprise n’est pas enregistrée à Maurice, puis-je utiliser Facture.mu ?',
          answer: 'Oui. Facture.mu peut être utilisé par des entreprises enregistrées à Maurice comme à l’international. Vous pouvez facturer en plusieurs devises et langues.'
        },
        two: {
          question: 'Puis-je facturer en différentes devises (USD, EUR, MUR, etc.) ?',
          answer: "Oui. Facture.mu supporte plus de 160 devises avec choix d'affichage et taux, adaptés aux besoins locaux et internationaux."
        },
        three: {
          question: 'Puis-je importer mes données depuis mon système actuel ?',
          answer: 'Oui, vous pouvez importer vos clients et vos articles au format Excel.'
        },
        four: {
          question: 'Puis-je gérer la TVA avec Facture.mu',
          answer: 'Oui. Facture.mu vous permet de facturer avec ou sans TVA, définir plusieurs taux si nécessaire, ajouter des frais et des remises également.'
        },
        five: {
          question: 'Puis-je utiliser mon logo et ma charte de couleurs ?',
          answer: 'Oui, vous pouvez personnaliser vos factures avec votre logo, vos couleurs et vous pouvez même modifier/ ajouter des informations à vos documents.'
        },
        six: {
          question: 'Puis-je exporter mes données ?',
          answer: 'Bien sûr. Toutes vos données peuvent être exportées à tout moment en PDF ou Excel.'
        },
        seven: {
          question: 'Est-ce adapté aux équipes ?',
          answer: 'Oui. Facture.mu permet de gérer plusieurs utilisateurs avec des rôles et permissions que vous paraméterez.'
        },
        eight: {
          question: 'Y a-t-il un support ?',
          answer: 'Oui, notre équipe support est disponible pour vous accompagner par chat, email et via le centre d’aide.'
        }
      }
    },
    contact: {
      title: 'Contactez-nous',
      success: 'Merci ! Votre message a été envoyé avec succès.',
      submit: 'Envoyer',
      fields: {
        name: {
          label: 'Nom complet',
          placeholder: 'Nom complet'
        },
        email: {
          label: 'Adresse e-mail',
          placeholder: 'Adresse e-mail'
        },
        message: {
          label: 'Message',
          placeholder: 'Écrivez votre message...'
        }
      },
      validation: {
        name: 'Veuillez indiquer votre nom complet.',
        email: 'Veuillez indiquer une adresse e-mail valide.',
        message: 'Veuillez écrire votre message.'
      },
      status: {
        sending: 'Envoi en cours...'
      },
      error: {
        generic: 'Une erreur est survenue. Veuillez réessayer.'
      }
    },
    demo: {
      modal: {
        label: 'Voir la démonstration vidéo',
        close: 'Fermer la vidéo'
      }
    },
    menu: {
      toggle: 'Ouvrir le menu'
    },
    lang: {
      label: 'Langue',
      toggle: 'Changer de langue'
    },
    footer: {
      tagline: 'Eldorado de la facturation',
      product: 'Produit',
      company: 'Société',
      support: 'Assistance',
      links: {
        features: 'Fonctionnalités',
        pricing: 'Tarifs',
        conditions: 'Conditions',
        privacy: 'Données personnelles',
        faq: 'FAQ',
        contact: 'Contact'
      },
      bottom: {
        rights: '© Facture.mu - Tous droits réservés. @2026',
        legal: 'Mentions légales - CGV - Cookies'
      }
    },
    pricing_page: {
      hero: {
        title: 'Plus que de la simple facturation',
        subtitle: 'Prix clairs, fonctionnalités claires.'
      },
      billing: {
        label: 'Basculer entre annuel et mensuel'
      },
      plans: {
        start: {
          cta: 'Essayer',
          heading: 'LE PLAN GRATUIT INCLUT',
          features: [
            '1 utilisateur',
            'Jusqu’à 5 clients',
            'Avec gestion de TVA',
            'Factures et devis illimités',
            'Documents avec votre logo',
            'Création de factures en PDF et envoi par email'
          ]
        },
        grow: {
          cta: 'Essayer',
          heading: 'TOUTES LES FONCTIONNALITÉS GRATUITES +',
          features: [
            '1 utilisateur',
            'Clients illimités',
            'Export / import Excel',
            'Relances automatiques',
            'Modèles de facture illimités',
            'Gestion et suivi de paiements'
          ]
        },
        scale: {
          cta: 'Essayer',
          heading: 'TOUTES LES FONCTIONNALITÉS PRO+',
          features: [
            '3 utilisateurs',
            'Multi-devises',
            'Gestion de stock',
            'Factures récurrentes',
            'Accès API'
          ]
        }
      },
      payments: {
        title: 'Paiements via',
        bank: 'Virement bancaire',
        juice: 'App Juice',
        money: 'App My.t Money',
        card: 'Carte bancaire'
      },
      comparison: {
        base: 'Fonctionnalités de base',
        advanced: 'Fonctionnalités avancées',
        values: {
          unlimited: 'Illim.'
        },
        features: {
          remove_branding: 'Suppression de la mention « Facture.mu »',
          unlimited_clients: 'Création de clients illimitée',
          online_payments: 'Acceptation des paiements en ligne',
          logo_documents: 'Ajout de votre logo sur les documents',
          customizable_templates: 'Modèles de documents personnalisables',
          item_management: 'Gestion des articles',
          stock_management: 'Gestion des stocks',
          tax_settings: 'Paramétrage personnalisé des taxes',
          recurring_billing: 'Facturation récurrente',
          invoice_delivery: 'Envoi des factures par e-mail et WhatsApp',
          invoice_design: 'Personnalisation du design des factures',
          reports: 'Rapports et statistiques (factures, dépenses, etc.)',
          email_templates: 'Personnalisation des objets et modèles d’e-mails',
          email_reminders: 'Relances automatiques par e-mail',
          attachments: 'Ajout de pièces jointes aux e-mails (PDF, JPG, XLS)',
          extra_users: 'Ajout d’utilisateurs supplémentaires au compte',
          einvoicing: 'Facturation électronique (e-Invoicing)',
          api_access: 'Accès à l’API'
        }
      }
    }
  },
  en: {
    page: {
      title: {
        home: 'Facture.mu – Billing made easy',
        pricing: 'Facture.mu – Pricing'
      }
    },
    nav: {
      home: 'Facture.mu home',
      features: 'Features',
      pricing: 'Pricing',
      faq: 'FAQ',
      contact: 'Contact'
    },
    actions: {
      login: 'Log in',
      free_trial: '15-day free trial'
    },
    hero: {
      title: 'Simple, smart invoicing for businesses in Mauritius 🇲🇺',
      subtitle: 'Spend less time invoicing and more time growing your business with professional, multilingual, multi-currency billing.',
      demo: 'Watch the demo',
      features_link: 'See the features',
      tagline: 'Built for businesses operating in Mauritius and beyond',
      quote: '“easier and faster than Excel!”'
    },
    features: {
      title: 'Everything you need to invoice with confidence',
      subtitle: 'A modern platform built for the Mauritian and international business ecosystem',
      items: {
        quotes: 'Customizable quotes<br>& invoices',
        export: 'Export & import<br>your data',
        send: 'Send by email<br>and WhatsApp',
        currencies: '+160 currencies',
        languages: 'Multi-language',
        reminders: 'Automated reminders'
      }
    },
    functionalities: {
      title: 'Features',
      subtitle: 'A modern platform with the key features to manage local and international invoicing.',
      items: {
        one: 'Create quotes, invoices, and receipts',
        two: 'Turn quotes into invoices',
        three: 'Send them by email or WhatsApp',
        four: 'Track invoice payments',
        five: 'Automatically follow up on unpaid invoices',
        six: 'Customize invoice design',
        seven: 'Give access to your collaborators'
      }
    },
    activity: {
      title: 'For your business',
      subtitle: 'A platform designed for businesses, firms, and independents operating in Mauritius and internationally.',
      heading: 'The free invoicing software built for freelancers, consultants, independents, and small businesses.',
      body: 'Invoicing for freelancers and businesses of all sizes.<br><br>Project a professional image with well-designed invoices aligned to your brand. Save time thanks to automatic delivery, payment tracking, and friendly reminders when payments are late.',
      cta: '15-day free trial'
    },
    usecases: {
      retail: {
        title: 'Retailer / Distributor',
        before: 'Before',
        before_items: [
          'Sales reports built from invoices',
          'Stock management in spreadsheets',
          'Local server, accessible only in the office',
          'Unable to target customer groups for advertising'
        ],
        after_items: [
          'Cloud data, accessible everywhere',
          'Smart analytics to make the most of your data',
          'Identify top-performing customers'
        ],
        result: '👉🏽  <strong>+20% revenue this year</strong>'
      },
      services: {
        title: 'Service business',
        before: 'Before',
        before_items: [
          'Invoicing and expenses in separate systems',
          'Constant payment delays'
        ],
        after_items: [
          'Automated recurring billing',
          'Send by email or WhatsApp',
          'Automatic reminders = healthier cash flow'
        ],
        result: '👉🏽  <strong>no more cash flow worries</strong>'
      },
      sme: {
        title: 'SME',
        before: 'Before',
        before_items: [
          'Costly accountant',
          'VAT delays and supplier payments'
        ],
        after_items: [
          'Shared access with your accountant',
          'Scanned and centralized invoices'
        ],
        result: '👉🏽  <strong>healthier cash flow and on-time payments</strong>'
      },
      footer: 'Facture.mu helps you automate and streamline invoicing, expense management, and business analytics.<br><strong>Result: healthier cash flow and more revenue.</strong>'
    },
    testimonials: {
      title: 'Testimonials',
      subtitle: 'A trusted invoicing solution for businesses and independents.',
      items: {
        one: {
          text: 'Facture.mu transformed how we run the club. Everything is clearer, more organized, and we spend much less time on admin.',
          by: 'Stéphanie from'
        },
        two: {
          text: 'Thanks to Facture.mu, we spend much less time on admin and far more time helping animals. Everything is clearer, more organized, and much calmer.',
          by: 'Audrey from'
        },
        three: {
          text: 'Thanks to Facture.mu, La Vanilleraie Vanillart can now manage multi-currency sales with ease. Invoicing is clear, structured, and lets us focus on our core business: vanilla.',
          by: 'Dhareena from'
        }
      }
    },
    pricing: {
      title: 'Pricing',
      toggle_label: 'Toggle annual pricing',
      billing: {
        monthly: 'Monthly',
        annual: 'Annual'
      },
      plans: {
        start: {
          name: 'Start',
          price: 'Free',
          equivalent: 'Yes, free',
          features: [
            '1 user',
            'Up to 5 clients',
            'Unlimited invoices and quotes',
            'Documents with your logo'
          ],
          cta: 'Sign up'
        },
        grow: {
          name: 'Grow',
          term: {
            monthly: '/ month',
            annual: '/ year'
          },
          equivalent: {
            monthly: '(€9.9 / month)',
            annual: '(€99 / year)'
          },
          features: [
            '1 user',
            'Unlimited clients',
            'Payment tracking and management',
            'Automatic reminders'
          ],
          cta: 'Sign up'
        },
        scale: {
          name: 'Scale',
          term: {
            monthly: '/ month',
            annual: '/ year'
          },
          equivalent: {
            monthly: '(€19.9 / month)',
            annual: '(€199 / year)'
          },
          features: [
            '3 users',
            'Multi-currency',
            'Email with attachments',
            'API access'
          ],
          cta: 'Sign up'
        }
      },
      view_all: 'See all pricing'
    },
    final_cta: {
      title: 'Start invoicing today!',
      subtitle: 'Invoice your clients, get paid faster!',
      cta: '15-day free trial'
    },
    faq: {
      title: 'Frequently asked questions',
      subtitle: 'Ask us your questions',
      items: {
        one: {
          question: 'My company is not registered in Mauritius, can I use Facture.mu?',
          answer: 'Yes. Facture.mu can be used by companies registered in Mauritius and internationally. You can invoice in multiple currencies and languages.'
        },
        two: {
          question: 'Can I invoice in different currencies (USD, EUR, MUR, etc.)?',
          answer: 'Yes. Facture.mu supports over 160 currencies with display choices and rates adapted to local and international needs.'
        },
        three: {
          question: 'Can I import my data from my current system?',
          answer: 'Yes, you can import your clients and items in Excel format.'
        },
        four: {
          question: 'Can I manage VAT with Facture.mu?',
          answer: 'Yes. Facture.mu lets you invoice with or without VAT, set multiple rates if needed, and add fees and discounts.'
        },
        five: {
          question: 'Can I use my logo and brand colors?',
          answer: 'Yes, you can customize your invoices with your logo and colors, and even edit/add information to your documents.'
        },
        six: {
          question: 'Can I export my data?',
          answer: 'Of course. All your data can be exported at any time in PDF or Excel.'
        },
        seven: {
          question: 'Is it suitable for teams?',
          answer: 'Yes. Facture.mu lets you manage multiple users with roles and permissions that you set.'
        },
        eight: {
          question: 'Is there support?',
          answer: 'Yes, our support team is available to help you via chat, email, and the help center.'
        }
      }
    },
    contact: {
      title: 'Contact us',
      success: 'Thank you! Your message has been sent successfully.',
      submit: 'Send',
      fields: {
        name: {
          label: 'Full name',
          placeholder: 'Full name'
        },
        email: {
          label: 'Email address',
          placeholder: 'Email address'
        },
        message: {
          label: 'Message',
          placeholder: 'Write your message...'
        }
      },
      validation: {
        name: 'Please enter your full name.',
        email: 'Please enter a valid email address.',
        message: 'Please write your message.'
      },
      status: {
        sending: 'Sending...'
      },
      error: {
        generic: 'Something went wrong. Please try again.'
      }
    },
    demo: {
      modal: {
        label: 'Watch the demo video',
        close: 'Close the video'
      }
    },
    menu: {
      toggle: 'Open the menu'
    },
    lang: {
      label: 'Language',
      toggle: 'Change language'
    },
    footer: {
      tagline: 'Billing paradise',
      product: 'Product',
      company: 'Company',
      support: 'Support',
      links: {
        features: 'Features',
        pricing: 'Pricing',
        conditions: 'Terms',
        privacy: 'Privacy policy',
        faq: 'FAQ',
        contact: 'Contact'
      },
      bottom: {
        rights: '© Facture.mu - All rights reserved. @2026',
        legal: 'Legal notice - Terms - Cookies'
      }
    },
    pricing_page: {
      hero: {
        title: 'More than just invoicing',
        subtitle: 'Clear pricing, clear features.'
      },
      billing: {
        label: 'Toggle between annual and monthly'
      },
      plans: {
        start: {
          cta: 'Try it',
          heading: 'THE FREE PLAN INCLUDES',
          features: [
            '1 user',
            'Up to 5 clients',
            'VAT management',
            'Unlimited invoices and quotes',
            'Documents with your logo',
            'Create PDF invoices and send by email'
          ]
        },
        grow: {
          cta: 'Try it',
          heading: 'ALL FREE FEATURES +',
          features: [
            '1 user',
            'Unlimited clients',
            'Excel export / import',
            'Automatic reminders',
            'Unlimited invoice templates',
            'Payment tracking and management'
          ]
        },
        scale: {
          cta: 'Try it',
          heading: 'ALL PRO FEATURES+',
          features: [
            '3 users',
            'Multi-currency',
            'Stock management',
            'Recurring invoices',
            'API access'
          ]
        }
      },
      payments: {
        title: 'Payments via',
        bank: 'Bank transfer',
        juice: 'Juice app',
        money: 'My.t Money app',
        card: 'Credit card'
      },
      comparison: {
        base: 'Core features',
        advanced: 'Advanced features',
        values: {
          unlimited: 'Unlimited'
        },
        features: {
          remove_branding: 'Remove the “Facture.mu” mention',
          unlimited_clients: 'Unlimited client creation',
          online_payments: 'Accept online payments',
          logo_documents: 'Add your logo to documents',
          customizable_templates: 'Customizable document templates',
          item_management: 'Item management',
          stock_management: 'Stock management',
          tax_settings: 'Custom tax settings',
          recurring_billing: 'Recurring billing',
          invoice_delivery: 'Send invoices by email and WhatsApp',
          invoice_design: 'Customize invoice design',
          reports: 'Reports and statistics (invoices, expenses, etc.)',
          email_templates: 'Customize email subjects and templates',
          email_reminders: 'Automatic email reminders',
          attachments: 'Add attachments to emails (PDF, JPG, XLS)',
          extra_users: 'Add additional users to the account',
          einvoicing: 'Electronic invoicing (e-Invoicing)',
          api_access: 'API access'
        }
      }
    }
  },

};

const defaultLang = 'fr';
const languageFlags = {
  fr: '🇫🇷',
  en: '🇬🇧'
};
let currentLang = defaultLang;

const getNestedTranslation = (lang, key) => {
  if (!key) return null;
  const parts = key.split('.');
  let value = translations[lang];
  for (const part of parts) {
    if (!value || typeof value !== 'object') return null;
    value = value[part];
  }
  if (typeof value === 'string') return value;
  return null;
};

const getTranslation = (key, lang = currentLang) => {
  const translated = getNestedTranslation(lang, key);
  if (translated) return translated;
  if (lang !== defaultLang) {
    return getNestedTranslation(defaultLang, key) || key;
  }
  return key;
};

const updateTranslatedContent = lang => {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const value = getTranslation(key, lang);
    if (element.hasAttribute('data-i18n-html')) {
      element.innerHTML = value;
    } else {
      element.textContent = value;
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    element.setAttribute('placeholder', getTranslation(key, lang));
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach(element => {
    const key = element.getAttribute('data-i18n-aria-label');
    element.setAttribute('aria-label', getTranslation(key, lang));
  });

  document.querySelectorAll('[data-i18n-title]').forEach(element => {
    const key = element.getAttribute('data-i18n-title');
    element.setAttribute('title', getTranslation(key, lang));
  });

  document.querySelectorAll('[data-i18n-value]').forEach(element => {
    const key = element.getAttribute('data-i18n-value');
    element.setAttribute('value', getTranslation(key, lang));
  });
};

const updateBillingText = lang => {
  const billingIsAnnual = (() => {
    const pricingToggle = document.querySelector('.pricing-toggle');
    if (pricingToggle) return pricingToggle.classList.contains('is-annual');
    const billingToggle = document.getElementById('billing-toggle');
    if (billingToggle) return billingToggle.checked;
    return false;
  })();

  document.querySelectorAll('[data-i18n-monthly][data-i18n-annual]').forEach(element => {
    const monthlyKey = element.getAttribute('data-i18n-monthly');
    const annualKey = element.getAttribute('data-i18n-annual');
    const monthlyValue = getTranslation(monthlyKey, lang);
    const annualValue = getTranslation(annualKey, lang);
    element.dataset.monthly = monthlyValue;
    element.dataset.annual = annualValue;
    element.textContent = billingIsAnnual ? annualValue : monthlyValue;
  });
};

const updateLanguageToggle = lang => {
  const flagElement = document.querySelector('.lang-toggle .flag');
  if (flagElement) {
    flagElement.textContent = languageFlags[lang] || languageFlags[defaultLang];
  }

  document.querySelectorAll('.lang-option').forEach(option => {
    option.classList.toggle('is-active', option.dataset.lang === lang);
  });
};

const setLanguage = lang => {
  const nextLang = translations[lang] ? lang : defaultLang;
  currentLang = nextLang;
  try {
    localStorage.setItem('lang', nextLang);
  } catch (error) {
    // Ignore storage errors (private mode or disabled storage)
  }

  document.documentElement.setAttribute('lang', nextLang);
  updateTranslatedContent(nextLang);
  updateBillingText(nextLang);
  updateLanguageToggle(nextLang);
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: nextLang } }));
};

window.setLanguage = setLanguage;
window.getTranslation = getTranslation;

const initLanguage = () => {
  let storedLang = defaultLang;
  try {
    storedLang = localStorage.getItem('lang') || defaultLang;
  } catch (error) {
    storedLang = defaultLang;
  }

  setLanguage(storedLang);

  const langOptions = document.querySelectorAll('.lang-option[data-lang]');
  langOptions.forEach(option => {
    option.addEventListener('click', event => {
      const selectedLang = event.currentTarget.dataset.lang;
      setLanguage(selectedLang);
      event.currentTarget.blur();
    });
  });
};

document.addEventListener('DOMContentLoaded', initLanguage);
