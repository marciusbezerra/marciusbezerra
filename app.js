// ========================================
// Data Configuration
// ========================================

const skillsData = [
  {
    name: ".NET / C# / ASP.NET Core",
    category: "backend",
    level: "Expert",
    progress: 95,
    description:
      "Desenvolvimento de aplicações enterprise com .NET Framework, .NET Core e versões modernas",
  },
  {
    name: "Web API / MVC",
    category: "backend",
    level: "Expert",
    progress: 95,
    description: "Construção de APIs RESTful e aplicações MVC escaláveis",
  },
  {
    name: "Blazor",
    category: "frontend",
    level: "Avançado",
    progress: 85,
    description: "Desenvolvimento de SPAs com Blazor Server e WebAssembly",
  },
  {
    name: "MAUI",
    category: "frontend",
    level: "Avançado",
    progress: 80,
    description: "Aplicações cross-platform para mobile e desktop",
  },
  {
    name: "JavaScript / TypeScript",
    category: "frontend",
    level: "Expert",
    progress: 90,
    description: "Desenvolvimento front-end moderno com ES6+ e TypeScript",
  },
  {
    name: "Angular",
    category: "frontend",
    level: "Expert",
    progress: 90,
    description: "Aplicações web complexas com Angular e RxJS",
  },
  {
    name: "React",
    category: "frontend",
    level: "Avançado",
    progress: 85,
    description: "Desenvolvimento de interfaces reativas e componentizadas",
  },
  {
    name: "Ionic",
    category: "frontend",
    level: "Avançado",
    progress: 85,
    description: "Aplicações mobile híbridas com Ionic Framework",
  },
  {
    name: "Node.js / Next.js",
    category: "backend",
    level: "Avançado",
    progress: 80,
    description: "Backend JavaScript e aplicações SSR com Next.js",
  },
  {
    name: "Docker",
    category: "devops",
    level: "Avançado",
    progress: 85,
    description: "Containerização de aplicações e ambientes de desenvolvimento",
  },
  {
    name: "Kubernetes",
    category: "devops",
    level: "Intermediário",
    progress: 70,
    description: "Orquestração de containers e deploy em cloud",
  },
  {
    name: "Kafka",
    category: "devops",
    level: "Intermediário",
    progress: 70,
    description:
      "Mensageria e processamento assíncrono com Event-Driven Architecture",
  },
  {
    name: "SQL Server",
    category: "database",
    level: "Expert",
    progress: 95,
    description: "Modelagem, otimização e administração de bancos SQL Server",
  },
  {
    name: "Firebird",
    category: "database",
    level: "Expert",
    progress: 90,
    description: "Desenvolvimento e manutenção com Firebird SQL",
  },
  {
    name: "MySQL / SQLite",
    category: "database",
    level: "Avançado",
    progress: 85,
    description: "Bancos de dados relacionais para aplicações diversas",
  },
  {
    name: "DDD / Clean Architecture",
    category: "architecture",
    level: "Expert",
    progress: 90,
    description: "Domain-Driven Design e princípios de Clean Architecture",
  },
  {
    name: "Microservices",
    category: "architecture",
    level: "Avançado",
    progress: 85,
    description: "Arquitetura de microserviços e sistemas distribuídos",
  },
  {
    name: "Modernização de Sistemas",
    category: "architecture",
    level: "Expert",
    progress: 95,
    description: "Refatoração e modernização incremental de sistemas legados",
  },
];

const experienceData = [
  {
    date: "Set 2020 - Presente",
    title: "Desenvolvedor Full Stack Sênior",
    company: "Fortmax Sistemas De Inf Ltda",
    location: "São Paulo, Brasil",
    description:
      "Desenvolvimento de sistemas corporativos e aplicações móveis com foco em arquitetura escalável e clean code.",
    skills: [
      "ASP.NET Core",
      "C#",
      "JavaScript",
      "Docker",
      "Angular",
      "SQL Server",
      "POO",
      "React",
      "Kubernetes",
      "REST / RESTful",
      "GCP",
      "Blazor",
      "Nodejs",
      "Microservices",
      "IA",
      "NoSQL",
      "Jest",
      "JSON",
      "CI/CD",
      "RabbitMQ",
      "DevOps",
      "SCSS",
      "Git",
      "Kafka",
      "Clean Architecture",
    ],
  },
  {
    date: "Set 2008 - Presente",
    title: "Analista de Sistemas / Arquiteto de Software",
    company: "Fortes Tecnologia em Sistemas",
    location: "Fortaleza, Brasil",
    description:
      "Desenvolvimento e arquitetura de soluções empresariais, liderança técnica e modernização de sistemas legados.",
    skills: [
      "Delphi",
      "C#",
      "JavaScript",
      "Angular",
      "WPF",
      "Azure",
      "SQL Server",
      "Firebird",
      "POO",
      "Cloud Computing",
      "Blazor",
      "Node.js",
      "Microservices",
      "GitHub",
      "HTML",
      "JavaScript",
      "SOLID",
      "Clean Architecture",
      ".NET Framework",
      "AngularJS",
      "ASP.NET Core",
      "REST / RESTful",
      "JSON",
      "AWS",
      ".NET Core",
      "SCSS",
      "DevOps",
    ],
  },
  {
    date: "Jul 2005 - Set 2008",
    title: "Desenvolvedor de Sistemas",
    company: "DIGIMAX (Grupo TudoMunicipal)",
    location: "Fortaleza, Brasil",
    description:
      "Criação e manutenção de sistemas de Folha de Pagamento, Licitação, Almoxarifado e Frota de Veículos.",
    skills: [
      "Delphi",
      "SQL Server",
      "ASP.NET",
      "Firebird",
      "POO",
      "C#",
      "Microsoft Office",
      "JavaScript",
      ".NET Framework",
      "Sistemas legados",
      "SCSS",
    ],
  },
  {
    date: "Ago 2004 - Dez 2004",
    title: "Desenvolvedor",
    company: "Cooperativa dos Trabalhadores em Saúde (Prefeitura de Sobral/CE)",
    location: "Sobral, Brasil",
    description:
      "Desenvolvimento de sistema de gerência, emissão de vales e controle de cooperados.",
    skills: ["Delphi", "SQL Server", "ASP.NET"],
  },
  {
    date: "Jan 2002 - Jan 2004",
    title: "Desenvolvedor",
    company: "Centro de Ciências da Saúde",
    location: "Sobral, Brasil",
    description:
      "Desenvolvimento de aplicativo de avaliação pedagógica e prestação de serviços de manutenção.",
    skills: ["Access", "ASP", "Delphi"],
  },
  {
    date: "Dez 2000 - Jan 2002",
    title: "Desenvolvedor",
    company: "Universidade Estadual Vale do Acaraú - UVA",
    location: "Sobral, Brasil",
    description:
      "Desenvolvimento de sistema de controle de tráfego de veículos do setor de transportes.",
    skills: ["Visual Basic", "Access"],
  },
  {
    date: "Jul 2000 - Mai 2001",
    title: "Desenvolvedor",
    company: "S.U.S. (Prefeitura Municipal de Baturité)",
    location: "Sobral, Brasil",
    description:
      "Desenvolvimento de sistema de controle e gerenciamento de consultas médicas com atualizações online.",
    skills: ["Visual Basic", "Access", "ASP"],
  },
  {
    date: "Dez 1999 - Jul 2000",
    title: "Desenvolvedor",
    company: "Universidade Estadual Vale do Acaraú - UVA",
    location: "Sobral, Brasil",
    description:
      "Desenvolvimento de sistemas de almoxarifado e estoque para controle de bens da universidade.",
    skills: ["Access", "SQL Server", "Visual Basic", "Delphi", "ASP.NET"],
  },
  {
    date: "Mar 1999 - Set 1999",
    title: "Instrutor de Técnicas de Desenvolvimento",
    company: "Senac Ceará",
    location: "Fortaleza, Brasil",
    description:
      "Instrutor de técnicas de desenvolvimento de sistemas, com aulas de lógica de programação, Access e Visual Basic (400+ horas).",
    skills: ["Visual Basic", "Access", "Lógica de Programação"],
  },
];

// ========================================
// Typing Animation
// ========================================

const typingTexts = [
  '"Hello, World!"',
  '"Full Stack Developer"',
  '"Clean Code Enthusiast"',
  '"Problem Solver"',
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
  const typingElement = document.getElementById("typingText");
  const currentText = typingTexts[textIndex];

  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentText.length) {
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % typingTexts.length;
    typeSpeed = 500;
  }

  setTimeout(typeText, typeSpeed);
}

// ========================================
// Counter Animation
// ========================================

function animateCounter(element) {
  const target = parseInt(element.getAttribute("data-target"));
  const duration = 2000;
  const increment = target / (duration / 16);
  let current = 0;

  const updateCounter = () => {
    current += increment;
    if (current < target) {
      element.textContent = Math.floor(current) + "+";
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target + "+";
    }
  };

  updateCounter();
}

// ========================================
// Skills Rendering
// ========================================

function renderSkills(filter = "all") {
  const skillsGrid = document.getElementById("skillsGrid");
  const filteredSkills =
    filter === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === filter);

  skillsGrid.innerHTML = filteredSkills
    .map(
      (skill) => `
        <div class="skill-card" data-category="${skill.category}">
            <div class="skill-header">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-level">${skill.level}</span>
            </div>
            <p class="skill-description">${skill.description}</p>
            <div class="skill-bar">
                <div class="skill-progress" style="--progress: ${skill.progress}%"></div>
            </div>
        </div>
    `,
    )
    .join("");

  // Animate skills on scroll
  observeElements(".skill-card");
}

// ========================================
// Timeline Rendering
// ========================================

function renderTimeline() {
  const timeline = document.getElementById("timeline");

  timeline.innerHTML = experienceData
    .map(
      (exp) => `
        <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <span class="timeline-date">${exp.date}</span>
                <h3 class="timeline-title">${exp.title}</h3>
                <div class="timeline-company">${exp.company}</div>
                <p class="timeline-description">${exp.description}</p>
                <div class="timeline-skills">
                    ${exp.skills.map((skill) => `<span class="timeline-skill">${skill}</span>`).join("")}
                </div>
            </div>
        </div>
    `,
    )
    .join("");

  observeElements(".timeline-item");
}

// ========================================
// Navigation
// ========================================

function initNavigation() {
  const navbar = document.getElementById("navbar");
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Update active link
    let current = "";
    document.querySelectorAll("section").forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 100) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === current) {
        link.classList.add("active");
      }
    });
  });

  // Mobile menu toggle
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Close menu on link click
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
}

// ========================================
// Theme Toggle
// ========================================

function initThemeToggle() {
  const themeToggle = document.getElementById("themeToggle");
  const currentTheme = localStorage.getItem("theme") || "dark";

  document.documentElement.setAttribute("data-theme", currentTheme);

  themeToggle.addEventListener("click", () => {
    const theme = document.documentElement.getAttribute("data-theme");
    const newTheme = theme === "light" ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });
}

// ========================================
// Skills Filter
// ========================================

function initSkillsFilter() {
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.getAttribute("data-filter");
      renderSkills(filter);
    });
  });
}

// ========================================
// Intersection Observer
// ========================================

function observeElements(selector) {
  const elements = document.querySelectorAll(selector);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1,
    },
  );

  elements.forEach((element) => observer.observe(element));
}

// ========================================
// Particles.js Configuration
// ========================================

function initParticles() {
  if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#667eea",
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.5,
          random: false,
        },
        size: {
          value: 3,
          random: true,
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#667eea",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
        },
      },
      retina_detect: true,
    });
  }
}

// ========================================
// Initialize Everything
// ========================================

document.addEventListener("DOMContentLoaded", () => {
  // Initialize components
  initNavigation();
  initThemeToggle();
  initSkillsFilter();
  initParticles();

  // Start typing animation
  setTimeout(typeText, 1000);

  // Animate counters
  const counters = document.querySelectorAll(".stat-number");
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 },
  );

  counters.forEach((counter) => counterObserver.observe(counter));

  // Render content
  renderSkills();
  renderTimeline();

  // Add smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});
