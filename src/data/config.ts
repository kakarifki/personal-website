export const SITE_CONFIG = {
  // General Info
  author: "Rifki Septiawan",
  role: "Software Engineer",
  email: "rifkim91@gmail.com",
  copyrightYear: new Date().getFullYear(),

  // SEO & Meta
  siteUrl: "https://kakarifki.web.id",
  siteTitle: "Rifki Septiawan | Software Engineer",
  siteDescription: "Rifki Septiawan - Software Engineer Portfolio",
  siteKeywords: "Software Engineer, Web Developer, Portfolio, Rifki Septiawan",

  // Navigation
  navLinks: [
    { href: "#home", label: "Home" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ],

  // Social Links
  socialLinks: [
    { href: "https://github.com/kakarifki", icon: "fab fa-github", label: "GitHub" },
    { href: "https://www.linkedin.com/in/muhammadrifkiseptiawan11", icon: "fab fa-linkedin", label: "LinkedIn" },
    { href: "https://www.instagram.com/rifkiseptiawan", icon: "fab fa-instagram", label: "Instagram" },
    { href: "mailto:rifkim91@gmail.com", icon: "fas fa-envelope", label: "Email" },
  ],

  // Hero/About Section
  heroAbout: {
    greeting: "Hello, I'm",
    firstName: "Rifki",
    lastName: "Septiawan",
    highlights: [
      { icon: "fas fa-code", text: "Software Engineer" },
      { icon: "fas fa-graduation-cap", text: "Bootcamp Graduate" },
      { icon: "fas fa-location-dot", text: "Based in Bekasi" },
    ],
    bioTitle: "From <span class=\"text-sky-500\">curiosity</span> to <span class=\"text-sky-500\">code</span>.",
    bioParagraph1: "Started taking apart computers in middle school, now I build digital solutions.\nGraduated from <span class=\"text-sky-500 font-semibold\">Bearmentor.com</span> bootcamp, \ncrafting digital experiences with passion and precision.",
    bioParagraph2: "I believe in continuous learning and building solutions that matter.\nReady to build and innovate.",
  },

  // Experience Section
  experience: {
    title: "My Experience",
    items: [
      {
        title: "Cluster Collection Support",
        company: "PT Adira Dinamika Multi Finance Tbk.",
        period: "September 2025 - Present",
        responsibilities: [
          "Managed collection administration for 2,000+ debtor accounts in the Cikarang area, providing daily support for 74 collectors and 10 AR Heads to ensure department targets were met.",
          "Optimized daily operational procedures by serving data from the ad1Clar (ERP) system, significantly increasing the speed of payment receipt validation",
          "Reconciled and processed an average of 40-100 payment receipts daily, maintaining 100% data integrity during high-volume end-of-month periods",
          "Automated manual checklist processes using Advanced Excel (VLOOKUP, INDEX & MATCH), reducing daily administrative processing time for the collection team",
          "Standardized digital filing systems for payment histories, improving document searchability and accessibility for 200+ historical records"
        ]
      },
      {
        title: "General Affair & IT Support",
        company: "Jakmall.com",
        period: "Apr 2025 - Jul 2025",
        responsibilities: [
          "Respond promptly to IT-related requests and troubleshoot issues",
          "Manage office supplies procurement, inventory, and distribution",
          "Setup new devices before handover",
          "Maintenance Server for optimal networking usage"
        ]
      },
      {
        title: "IT Support",
        company: "PT Prawita Karya",
        period: "Sep 2023 - Aug 2024",
        responsibilities: [
          "Supported employees by troubleshooting hardware, software, and network issues",
          "Monitored and maintained the company's IT infrastructure",
          "Assisted with IT-related projects, including system upgrades and migrations"
        ]
      },
      {
        title: "QAQC Staff",
        company: "PT Adhi Karya (Persero) Tbk.",
        period: "Jun 2022 - Jul 2023",
        responsibilities: [
          "Responsible for archiving, updating, creating and editing all QA/QC documents",
          "Created Weekly Dashboard reports for Owner",
          "Participated in internal and external quality control inspections and audits",
          "Connected documents between Consultant and QA/QC"
        ]
      }
    ]
  },

  // Projects Section
  projects: {
    title: "My Projects",
    description: "A collection of my work showcasing various technologies and solutions.",
    items: [
      {
        title: "Personal Website",
        image: "/images/personal-website.png",
        description: "Personal Website as a Portfolio - Built with Astro & Tailwind CSS",
        skills: ["Astro", "Tailwind CSS", "TypeScript"],
        url: "https://kakarifki.web.id",
        slug: "personal-website"
      },
      // {
      //   title: "Address Book",
      //   image: "/images/white.jpg",
      //   description: "Address book webapp for saving your contacts",
      //   skills: ["HTML", "Tailwind CSS", "JavaScript"],
      //   url: "https://contacts-book.rifkiseptiawan.com",
      //   slug: "address-book"
      // },
      // {
      //   title: "To-do-Least",
      //   image: "/images/todoleast.png",
      //   description: "A to-do-list app for organizing your tasks",
      //   skills: ["HTML", "Tailwind CSS", "TypeScript", "React", "Vite"],
      //   url: "https://to-do-least.rifkiseptiawan.com",
      //   slug: "to-do-least"
      // },
      {
        title: "Indonesian Culture REST API",
        image: "/images/restAPISwagger.png",
        description: "An API for fetching Indonesia heritage data with Swagger UI",
        skills: ["Hono", "OpenAPI", "Swagger UI", "Docker", "Zod", "PostgreSQL", "Prisma"],
        url: "https://api-budaya-indonesia.kakarifki.web.id/api",
        slug: "api-budaya-indonesia"
      },
      // {
      //   title: "JKT48 Fanbase Merch - Frontend",
      //   image: "/images/fanbase-merch-fe.png",
      //   description: "Frontend for JKT48 fanbase merch e-commerce platform",
      //   skills: ["React", "Vite", "Tailwind CSS", "TypeScript", "React Query", "Auth"],
      //   url: "https://jkt48-fanbase-merch.rifkiseptiawan.com/",
      //   slug: "jkt48-fanbase-merch-fe"
      // },
      // {
      //   title: "JKT48 Fanbase Merch - Backend",
      //   image: "/images/white.jpg",
      //   description: "Backend for JKT48 fanbase merch e-commerce platform",
      //   skills: ["Hono", "Docker", "Zod", "PostgreSQL", "Prisma", "JWT Auth"],
      //   url: "https://fanbase-merch-backend.onrender.com/",
      //   slug: "jkt48-fanbase-merch-be"
      // },
      // {
      //   title: "Videoboxd - Frontend",
      //   image: "/images/videoboxd-fe.png",
      //   description: "Review and rating platform for YouTube Videos",
      //   skills: ["React Router", "Vite", "Tailwind CSS", "TypeScript", "Ky"],
      //   url: "https://videoboxd.com/",
      //   slug: "videoboxd-fe"
      // },
      // {
      //   title: "Videoboxd - Backend",
      //   image: "/images/videoboxd-be.png",
      //   description: "Backend for Videoboxd with RestAPI and Scalar",
      //   skills: ["Hono", "OpenAPI", "Scalar", "Docker", "Zod", "PostgreSQL", "Prisma", "JWT Auth"],
      //   url: "https://api.videoboxd.com/",
      //   slug: "videoboxd-be"
      // },
      {
        title: "Tanti's Portfolio Website",
        image: "/images/tanti.png",
        description: "Personal Website for Tanti Pujian, a Virtual Assistant",
        skills: ["NextJS", "Tailwind CSS", "TypeScript", "Auth", "Dashboard"],
        url: "https://tantipujian.vercel.app",
        slug: "tanti-portfolio"
      },
      {
        title: "Algifari's Portfolio Website",
        image: "/images/Alghi-web.png",
        description: "Personal Website for Algifari, a Copywriter",
        skills: ["React", "Vite", "Tailwind CSS", "TypeScript"],
        url: "https://alghi.netlify.app/",
        slug: "algifari-portfolio"
      }
    ]
  }
};
