/**
 * Bilingual content dictionary (EN / ES)
 * Switch language with setLanguage('en' | 'es') — no page reload.
 */
const translations = {
  en: {
    // Nav
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.certificates": "Certificates",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.contact": "Contact",

    // Hero
    "hero.badge": "Open to opportunities",
    "hero.greeting": "Hi, I'm",
    "hero.title": "Vocational Student in Multiplatform Application Development",
    "hero.tagline":
      "Building modern apps across web, mobile, and desktop — learning by shipping real projects every day.",
    "hero.ctaProjects": "View Projects",
    "hero.ctaResume": "Download Resume",
    "hero.statProjects": "Projects",
    "hero.statCerts": "Key Certs",
    "hero.statCuriosity": "Curiosity",

    // About
    "about.label": "About me",
    "about.title": "Backend-focused developer in training",
    "about.p1":
      "I'm a developer in training specialized in backend, with a strong focus on Python and a real interest in designing services, APIs, and robust systems.",
    "about.p2":
      "I'm currently finishing my second year of vocational training in Multiplatform Application Development (DAM), with hands-on experience in software development, databases, and professional environments.",
    "about.p3":
      "My goal is to join a team where I can deliver real value in backend, automation, and systems integration — while continuing to learn at a high level and taking on progressive technical responsibilities.",
    "about.card1Title": "Backend & APIs",
    "about.card1Desc": "Services, APIs, and solid system design with a Python-first approach.",
    "about.card2Title": "Databases",
    "about.card2Desc": "Practical experience modeling data and working with databases in real projects.",
    "about.card3Title": "Automation",
    "about.card3Desc": "Integrations and automation that connect systems and streamline workflows.",

    // Projects
    "projects.label": "Projects",
    "projects.title": "Things I've built and shipped",
    "projects.subtitle":
      "A selection of school and personal projects. Placeholders ready for your real work.",
    "projects.github": "GitHub",
    "projects.demo": "Live Demo",
    "projects.p1.title": "TaskFlow — Productivity App",
    "projects.p1.desc":
      "A multiplatform task manager with categories, reminders, and a clean dashboard. Built as a school project focused on UX and local storage.",
    "projects.p2.title": "FitTrack — Mobile Workout Log",
    "projects.p2.desc":
      "Cross-platform mobile app to log workouts, track progress, and visualize weekly stats with simple charts.",
    "projects.p3.title": "Portfolio Web — This Site",
    "projects.p3.desc":
      "A bilingual, responsive single-page portfolio with dynamic language switching, smooth scrolling, and a modern developer aesthetic.",
    "projects.p4.title": "ShopLite — Inventory API",
    "projects.p4.desc":
      "REST API for a small inventory system with CRUD operations, validation, and basic authentication — practice project for backend skills.",

    // Certificates
    "certs.label": "Certificates",
    "certs.title": "Credentials & continuous learning",
    "certs.subtitle": "Highlighted achievements and additional online courses.",
    "certs.featured": "Featured",
    "certs.view": "View certificate",
    "certs.other": "Other certificates",
    "certs.stanford.title": "Stanford Code in Place",
    "certs.stanford.issuer": "Stanford University",
    "certs.stanford.desc":
      "Intensive introductory programming course covering Python fundamentals, problem-solving, and computational thinking.",
    "certs.backend.title": "Backend Development with Python & FastAPI",
    "certs.backend.issuer": "Online Course / Platform",
    "certs.backend.desc": "Certificate focused on building robust REST APIs with Python and FastAPI, including authentication, databases, and modern backend practices.",
    "certs.cambridge.title": "Cambridge C1 English",
    "certs.cambridge.issuer": "Cambridge Assessment English",
    "certs.cambridge.desc":
      "Advanced English proficiency certification (C1 level) — strong reading, writing, listening, and speaking skills for professional contexts.",
    "certs.o1.title": "Java Programming",
    "certs.o2.title": "Bash/Shell — Terminal & Command Line",
    "certs.o3.title": "Git & GitHub Essentials",

    // Skills
    "skills.label": "Skills",
    "skills.title": "Tools & technologies I work with",
    "skills.languages": "Languages",
    "skills.frameworks": "Frameworks",
    "skills.tools": "Tools",
    "skills.other": "Other",

    // Education
    "edu.label": "Education",
    "edu.title": "Training & academic path",
    "edu.current": "Current",
    "edu.dam.title":
      "Higher Vocational Training — Multiplatform Application Development (DAM)",
    "edu.dam.school": "Vocational Training Center",
    "edu.dam.desc":
      "Comprehensive program covering software development for web, mobile, and desktop platforms: programming, databases, interfaces, services, and enterprise systems.",
    "edu.secondary.title": "Secondary Education / Bachillerato",
    "edu.secondary.school": "Secondary School",
    "edu.secondary.desc":
      "Foundation in science and technology that led me to pursue multiplatform software development.",

    // Contact
    "contact.label": "Contact",
    "contact.title": "Let's build something together",
    "contact.subtitle":
      "I'm open to internships, junior roles, collaborations, and interesting projects. Send a message or reach out on social media.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.namePh": "Your name",
    "contact.emailPh": "you@example.com",
    "contact.messagePh": "How can I help?",
    "contact.send": "Send message",
    "contact.success":
      "Thanks! Your message is ready to send via your email client.",
    "contact.note":
      "Opens your email client with the message pre-filled (mailto). For production, connect Formspree or a backend.",
    "contact.errName": "Please enter your name.",
    "contact.errEmail": "Please enter a valid email.",
    "contact.errMessage": "Please write a short message.",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.langNote": "This site is available in English and Spanish.",
  },

  es: {
    // Nav
    "nav.about": "Sobre mí",
    "nav.projects": "Proyectos",
    "nav.certificates": "Certificados",
    "nav.skills": "Habilidades",
    "nav.education": "Formación",
    "nav.contact": "Contacto",

    // Hero
    "hero.badge": "Abierto a oportunidades",
    "hero.greeting": "Hola, soy",
    "hero.title":
      "Estudiante de FP en Desarrollo de Aplicaciones Multiplataforma",
    "hero.tagline":
      "Creo aplicaciones modernas para web, móvil y escritorio — aprendo lanzando proyectos reales cada día.",
    "hero.ctaProjects": "Ver proyectos",
    "hero.ctaResume": "Descargar CV",
    "hero.statProjects": "Proyectos",
    "hero.statCerts": "Cert. clave",
    "hero.statCuriosity": "Curiosidad",

    // About
    "about.label": "Sobre mí",
    "about.title": "Programador en formación con foco en backend",
    "about.p1":
      "Programador en formación especializado en backend, con foco en Python y gran interés en diseñar servicios, APIs y sistemas robustos.",
    "about.p2":
      "Actualmente completando el segundo año de FP DAM, con experiencia práctica en desarrollo de software, bases de datos y trabajo con entornos profesionales.",
    "about.p3":
      "Mi objetivo es incorporarme a un equipo donde pueda aportar valor real en backend, automatización e integración de sistemas, mientras sigo aprendiendo a un nivel alto y asumiendo responsabilidades técnicas progresivas.",
    "about.card1Title": "Backend y APIs",
    "about.card1Desc":
      "Servicios, APIs y diseño de sistemas sólidos con un enfoque priorizado en Python.",
    "about.card2Title": "Bases de datos",
    "about.card2Desc":
      "Experiencia práctica modelando datos y trabajando con bases de datos en proyectos reales.",
    "about.card3Title": "Automatización",
    "about.card3Desc":
      "Integraciones y automatización que conectan sistemas y agilizan flujos de trabajo.",

    // Projects
    "projects.label": "Proyectos",
    "projects.title": "Lo que he construido y publicado",
    "projects.subtitle":
      "Selección de proyectos de clase y personales. Placeholders listos para tu trabajo real.",
    "projects.github": "GitHub",
    "projects.demo": "Demo en vivo",
    "projects.p1.title": "TaskFlow — App de productividad",
    "projects.p1.desc":
      "Gestor de tareas multiplataforma con categorías, recordatorios y un dashboard limpio. Proyecto de clase centrado en UX y almacenamiento local.",
    "projects.p2.title": "FitTrack — Registro de entrenamientos",
    "projects.p2.desc":
      "App móvil multiplataforma para registrar entrenamientos, seguir el progreso y visualizar estadísticas semanales con gráficos simples.",
    "projects.p3.title": "Portfolio Web — Este sitio",
    "projects.p3.desc":
      "Portfolio bilingüe y responsive de una sola página, con cambio de idioma dinámico, scroll suave y estética moderna de desarrollador.",
    "projects.p4.title": "ShopLite — API de inventario",
    "projects.p4.desc":
      "API REST para un sistema de inventario con operaciones CRUD, validación y autenticación básica — proyecto de práctica de backend.",

    // Certificates
    "certs.label": "Certificados",
    "certs.title": "Credenciales y aprendizaje continuo",
    "certs.subtitle":
      "Logros destacados y cursos online adicionales.",
    "certs.featured": "Destacado",
    "certs.view": "Ver certificado",
    "certs.other": "Otros certificados",
    "certs.stanford.title": "Stanford Code in Place",
    "certs.stanford.issuer": "Universidad de Stanford",
    "certs.stanford.desc":
      "Curso intensivo de introducción a la programación: fundamentos de Python, resolución de problemas y pensamiento computacional.",
    "certs.cambridge.title": "Cambridge C1 English",
    "certs.cambridge.issuer": "Cambridge Assessment English",
    "certs.cambridge.desc":
      "Certificación de inglés avanzado (nivel C1) — lectura, escritura, comprensión oral y expresión oral para contextos profesionales.",
    "certs.o1.title": "Java Programming",
    "certs.o2.title": "Bash/Shell: Terminal y línea de Comandos",
    "certs.o3.title": "Git & GitHub Essentials",

    // Skills
    "skills.label": "Habilidades",
    "skills.title": "Herramientas y tecnologías con las que trabajo",
    "skills.languages": "Lenguajes",
    "skills.frameworks": "Frameworks",
    "skills.tools": "Herramientas",
    "skills.other": "Otros",

    // Education
    "edu.label": "Formación",
    "edu.title": "Formación y trayectoria académica",
    "edu.current": "Actual",
    "edu.dam.title":
      "Ciclo Formativo de Grado Superior — Desarrollo de Aplicaciones Multiplataforma (DAM)",
    "edu.dam.school": "Centro de Formación Profesional",
    "edu.dam.desc":
      "Programa integral de desarrollo de software para web, móvil y escritorio: programación, bases de datos, interfaces, servicios y sistemas empresariales.",
    "edu.secondary.title": "Educación secundaria / Bachillerato",
    "edu.secondary.school": "Instituto de Educación Secundaria",
    "edu.secondary.desc":
      "Base en ciencias y tecnología que me impulsó a especializarme en desarrollo de software multiplataforma.",

    // Contact
    "contact.label": "Contacto",
    "contact.title": "Construyamos algo juntos",
    "contact.subtitle":
      "Estoy abierto a prácticas, puestos junior, colaboraciones y proyectos interesantes. Escríbeme o contáctame en redes.",
    "contact.name": "Nombre",
    "contact.email": "Correo",
    "contact.message": "Mensaje",
    "contact.namePh": "Tu nombre",
    "contact.emailPh": "tu@email.com",
    "contact.messagePh": "¿En qué puedo ayudarte?",
    "contact.send": "Enviar mensaje",
    "contact.success":
      "¡Gracias! Tu mensaje está listo para enviarse con tu cliente de correo.",
    "contact.note":
      "Abre tu cliente de correo con el mensaje precargado (mailto). En producción, conecta Formspree o un backend.",
    "contact.errName": "Por favor, introduce tu nombre.",
    "contact.errEmail": "Por favor, introduce un email válido.",
    "contact.errMessage": "Por favor, escribe un mensaje breve.",

    // Footer
    "footer.rights": "Todos los derechos reservados.",
    "footer.langNote": "Este sitio está disponible en inglés y español.",
  },
};

const LANG_STORAGE_KEY = "portfolio-lang";

function getNestedTranslation(lang, key) {
  const dict = translations[lang] || translations.en;
  return dict[key];
}

function setLanguage(lang) {
  if (!translations[lang]) lang = "en";

  document.documentElement.lang = lang;
  localStorage.setItem(LANG_STORAGE_KEY, lang);

  // Text content
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = getNestedTranslation(lang, key);
    if (value != null) el.textContent = value;
  });

  // Placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    const value = getNestedTranslation(lang, key);
    if (value != null) el.setAttribute("placeholder", value);
  });

  // Toggle button states
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const isActive = btn.getAttribute("data-lang") === lang;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });

  // Document title
  document.title =
    lang === "es"
      ? "Eduardo Fernández Zarza | Desarrollador Multiplataforma"
      : "Eduardo Fernández Zarza | Multiplatform Developer";
}

function initI18n() {
  const saved = localStorage.getItem(LANG_STORAGE_KEY);
  const browser = (navigator.language || "en").slice(0, 2).toLowerCase();
  const initial = saved || (browser === "es" ? "es" : "en");

  setLanguage(initial);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      setLanguage(lang);
    });
  });
}

// Export for main.js (global)
window.portfolioI18n = { setLanguage, initI18n, translations };
