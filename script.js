// Multi-language support
const translations = {
    en: {
        // Navigation
        home: "Home",
        about: "About",
        projects: "Projects",
        contact: "Contact",
        
        // Hero
        heroTitle: "Hi, I'm Mohamed – 15-Year-Old Frontend Developer & Tech Enthusiast",
        heroSubtitle: "Building modern web experiences with clean code since age 13. Passionate about creating interactive websites and learning new technologies.",
        ageBadge: "15 Years Old • Frontend Developer",
        viewWork: "View My Projects",
        getInTouch: "Get In Touch",
        
        // About
        aboutTitle: "About Me",
        aboutSubtitle: "Young developer passionate about creating amazing web experiences",
        aboutText: "I'm a 15-year-old frontend developer from Egypt who started coding at age 13. I have a strong passion for creating interactive, responsive websites using modern web technologies. My journey began with HTML and CSS, and I've since expanded to JavaScript and frontend frameworks. I believe age is just a number when it comes to passion and skill in technology.",
        
        // Projects
        projectsTitle: "My Projects",
        projectsSubtitle: "A journey through my coding projects from beginner to advanced",
        project1Title: "My First Website",
        project1Desc: "The very first website I built when I started learning web development at age 13. A simple HTML & CSS project that started my coding journey.",
        project2Title: "Flappy Bird Clone",
        project2Desc: "A JavaScript recreation of the popular Flappy Bird game with custom graphics, score tracking, and increasing difficulty levels.",
        project3Title: "Advanced Calculator",
        project3Desc: "A feature-rich calculator with scientific functions, unit conversions, calculation history, and a modern dark/light theme toggle.",
        viewProject: "View Project",
        playGame: "Play Game",
        tryCalculator: "Try Calculator",
        
        // Contact
        contactTitle: "Connect With Me",
        contactSubtitle: "Feel free to reach out through any of these platforms",
        
        // Footer
        footerText: "15-year-old frontend developer passionate about creating interactive web experiences and learning new technologies.",
        footerCopyright: "© 2026 Mohamed. All rights reserved. | 15-Year-Old Frontend Developer"
    },
    ar: {
        // Navigation
        home: "الرئيسية",
        about: "عني",
        projects: "المشاريع",
        contact: "اتصل",
        
        // Hero
        heroTitle: "مرحبًا، أنا محمد – مطور واجهات أمامية عمره 15 سنة ومتحمس للتكنولوجيا",
        heroSubtitle: "أبني تجارب ويب حديثة ببرمجة نظيفة منذ أن كان عمري 13 سنة. شغوف بإنشاء مواقع ويب تفاعلية وتعلم تقنيات جديدة.",
        ageBadge: "15 سنة • مطور واجهات أمامية",
        viewWork: "عرض مشاريعي",
        getInTouch: "تواصل معي",
        
        // About
        aboutTitle: "عني",
        aboutSubtitle: "مطور شاب شغوف بإنشاء تجارب ويب مذهلة",
        aboutText: "أنا مطور واجهات أمامية عمره 15 سنة من مصر، بدأت البرمجة في سن 13. لدي شغف قوي لإنشاء مواقع ويب تفاعلية ومتجاوبة باستخدام تقنيات الويب الحديثة. بدأت رحلتي بـ HTML وCSS، ومن ثم توسعت إلى JavaScript وأطر عمل الواجهات الأمامية. أعتقد أن العمر مجرد رقم عندما يتعلق الأمر بالشغف والمهارة في التكنولوجيا.",
        
        // Projects
        projectsTitle: "مشاريعي",
        projectsSubtitle: "رحلة عبر مشاريعي البرمجية من المبتدئ إلى المتقدم",
        project1Title: "موقعي الأول على الويب",
        project1Desc: "أول موقع ويب قمت ببنائه عندما بدأت تعلم تطوير الويب في سن 13. مشروع بسيط بـ HTML وCSS بدأ رحلتي البرمجية.",
        project2Title: "نسخة Flappy Bird",
        project2Desc: "إعادة إنشاء لعبة Flappy Bird الشهيرة باستخدام JavaScript مع رسومات مخصصة، تتبع النقاط، ومستويات صعوبة متزايدة.",
        project3Title: "آلة حاسبة متقدمة",
        project3Desc: "آلة حاسبة غنية بالميزات مع وظائف علمية، تحويل الوحدات، سجل الحسابات، وتبديل سمة مظلمة/فاتحة حديثة.",
        viewProject: "عرض المشروع",
        playGame: "العب اللعبة",
        tryCalculator: "جرب الآلة الحاسبة",
        
        // Contact
        contactTitle: "تواصل معي",
        contactSubtitle: "لا تتردد في التواصل من خلال أي من هذه المنصات",
        
        // Footer
        footerText: "مطور واجهات أمامية عمره 15 سنة شغوف بإنشاء تجارب ويب تفاعلية وتعلم تقنيات جديدة.",
        footerCopyright: "© 2026 محمد. جميع الحقوق محفوظة. | مطور واجهات أمامية عمره 15 سنة"
    }
};

// Current language
let currentLang = 'en';

// DOM elements
const langSwitch = document.getElementById('langSwitch');
const mobileLangSwitch = document.getElementById('mobileLangSwitch');
const themeToggle = document.querySelector('.theme-toggle');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');
const heroTitle = document.querySelector('.hero-text h1');
const ageBadge = document.querySelector('.age-badge');
const heroSubtitle = document.querySelector('.hero-text p');
const heroButtons = document.querySelectorAll('.hero-buttons .btn');
const aboutTitle = document.querySelector('.about-content .section-title');
const aboutSubtitle = document.querySelector('.about .section-subtitle');
const aboutText = document.querySelector('.about-text');
const projectsTitle = document.querySelector('.projects .section-title');
const projectsSubtitle = document.querySelector('.projects .section-subtitle');
const projectTitles = document.querySelectorAll('.project-title');
const projectDescs = document.querySelectorAll('.project-desc');
const projectButtons = document.querySelectorAll('.project-card .btn');
const contactTitle = document.querySelector('.contact .section-title');
const contactSubtitle = document.querySelector('.contact .section-subtitle');
const footerText = document.querySelector('.footer-text');
const footerCopyright = document.querySelector('.footer-copyright');

// Function to update language
function updateLanguage(lang) {
    currentLang = lang;
    
    // Update navigation
    document.querySelectorAll('.nav-link').forEach((link, index) => {
        const keys = ['home', 'about', 'projects', 'contact'];
        if (keys[index]) {
            link.textContent = translations[lang][keys[index]];
        }
    });
    
    // Update hero section - FIXED: Handle both English and Arabic text splitting
    const heroTitleText = translations[lang].heroTitle;
    if (heroTitleText.includes('–')) {
        const parts = heroTitleText.split('–');
        heroTitle.innerHTML = `<span class="highlight">${parts[0]}</span> – ${parts[1]}`;
    } else {
        heroTitle.textContent = heroTitleText;
    }
    
    ageBadge.textContent = translations[lang].ageBadge;
    heroSubtitle.textContent = translations[lang].heroSubtitle;
    heroButtons[0].innerHTML = `${translations[lang].viewWork} <i class="fas fa-arrow-right"></i>`;
    heroButtons[1].textContent = translations[lang].getInTouch;
    
    // Update about section
    aboutTitle.textContent = translations[lang].aboutTitle;
    aboutSubtitle.textContent = translations[lang].aboutSubtitle;
    aboutText.textContent = translations[lang].aboutText;
    
    // Update projects section
    projectsTitle.textContent = translations[lang].projectsTitle;
    projectsSubtitle.textContent = translations[lang].projectsSubtitle;
    
    // Update project details
    projectTitles[0].textContent = translations[lang].project1Title;
    projectTitles[1].textContent = translations[lang].project2Title;
    projectTitles[2].textContent = translations[lang].project3Title;
    
    projectDescs[0].textContent = translations[lang].project1Desc;
    projectDescs[1].textContent = translations[lang].project2Desc;
    projectDescs[2].textContent = translations[lang].project3Desc;
    
    // Update project buttons with different text for each
    projectButtons[0].innerHTML = `${translations[lang].viewProject} <i class="fas fa-external-link-alt"></i>`;
    projectButtons[1].innerHTML = `${translations[lang].playGame} <i class="fas fa-external-link-alt"></i>`;
    projectButtons[2].innerHTML = `${translations[lang].tryCalculator} <i class="fas fa-external-link-alt"></i>`;
    
    // Update contact section
    contactTitle.textContent = translations[lang].contactTitle;
    contactSubtitle.textContent = translations[lang].contactSubtitle;
    
    // Update footer
    footerText.textContent = translations[lang].footerText;
    footerCopyright.textContent = translations[lang].footerCopyright;
    
    // Update language switch button text
    const langText = lang === 'en' ? 'EN' : 'AR';
    langSwitch.innerHTML = `<i class="fas fa-globe"></i><span>${langText}</span>`;
    mobileLangSwitch.innerHTML = `<i class="fas fa-globe"></i><span>${lang === 'en' ? 'EN / AR' : 'AR / EN'}</span>`;
    
    // Update direction for RTL languages
    if (lang === 'ar') {
        document.documentElement.dir = 'rtl';
        document.documentElement.lang = 'ar';
    } else {
        document.documentElement.dir = 'ltr';
        document.documentElement.lang = 'en';
    }
}

// Language switch event
langSwitch.addEventListener('click', () => {
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    updateLanguage(newLang);
    
    // Save language preference
    localStorage.setItem('portfolioLang', newLang);
});

// Mobile language switch event
mobileLangSwitch.addEventListener('click', () => {
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    updateLanguage(newLang);
    
    // Save language preference
    localStorage.setItem('portfolioLang', newLang);
});

// Theme functionality
function initTheme() {
    const savedTheme = localStorage.getItem('portfolioTheme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        document.body.classList.remove('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

// Theme toggle event
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    if (document.body.classList.contains('dark-theme')) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('portfolioTheme', 'dark');
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('portfolioTheme', 'light');
    }
});

// Mobile menu functionality
mobileMenuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll animation
function checkScroll() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
}

// Set active nav link based on scroll position
function setActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Initialize theme and language on page load
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    
    // Load saved language or default to English
    const savedLang = localStorage.getItem('portfolioLang') || 'en';
    updateLanguage(savedLang);
    
    // Initial check for scroll animations
    checkScroll();
    
    // Update active nav link on scroll
    window.addEventListener('scroll', () => {
        setActiveNavLink();
        checkScroll();
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileNav.contains(e.target) && !mobileMenuBtn.contains(e.target) && mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    }
});