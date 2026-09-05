const languageToggle = document.querySelector("#language-toggle");

let language = localStorage.getItem("language") || "en";


function setLanguage(language) {
    localStorage.setItem("language", language);

    document.querySelectorAll("[data-translation]").forEach(e => {
        const key = e.dataset.translation;
        e.textContent = translations[language][key];
    })

    languageToggle.textContent = language.toUpperCase();
}


languageToggle.addEventListener("click", () => {
    language = language === "en" ? "es" : "en";
    setLanguage(language);
})


const translations = {

    en: {
        "nav.about": "About",
        "nav.projects": "Projects",
        "nav.contact": "Contact",
        "landing.subtitle": "Web Developer & Programmer",
        "landing.btn": "Learn More",
        "about.title": "About Me",
        "about.p1": "I'm a web development learner based in Uruguay. I started studying Computer Engineering in 2023 and have been learning web development through courses and self-directed study since then.",
        "about.p2": "I currently work with HTML, CSS, JavaScript, React, SQL, C++ and Python, while continuing to develop my skills through personal projects and practice.",
        "about.p3": "I also hold a Cambridge English B2 First (FCE) certificate.",
        "about.htmlDesc": "Creation of website structure and styling.",
        "about.jsDesc": "Implementation of functionality and logic in web sites. Database and server connection.",
        "about.reactDesc": "Development of dynamic and optimized user interfaces through the use of dynamic components and states.",
        "about.sqlDesc": "Relational database management and querying.",
        "about.via": "Via",
        "about.cppDesc": "App development with object-oriented programming, focused on algorithmic solutions and resource optimization.",
        "about.cppVia": "Via University",
        "about.pythonDesc": "High flexibility, ideal for task automation and application development",
        "about.pythonVia": "Self-learned",
        "projects.title": "Projects",
        "projects.cafe": "A static website developed while I was learning HTML and CSS, featuring responsive design, SEO, and enhanced styling with Bootstrap and SASS. It also includes animations with wow.js for a better visual experience.",
        "projects.jsEcomm": "An E-Commerce project developed while I was learning JS. It dynamically manipulates DOM through filters and renders products after fetching them from a JSON file. It features a functional shopping cart that persists in localStorage, along with enhanced user experience using Bootstrap and Toastify.js",
        "projects.reactEcomm": "An e-commerce project developed while learning React, utilizing tools like useState, useEffect, useContext, useParams, and more. It features a Firebase backend for storing products and receipts. In this project, I prioritized learning functionality over styling, resulting in a very basic design. I plan to revisit it in the future to improve it.",
        "projects.toWeb": "to Website",
        "projects.toRepo": "to Repository",
        "projects.comingSoon": "~ More coming soon ~",
        "contact.title": "Contact",
        "contact.text": "I'm currently looking for opportunities to gain professional experience in web development. If you'd like to get in touch, you can reach me through any of the links below.",
        "contact.mailToast": "Copied to Clipboard",
    },

    es: {
        "nav.about": "Sobre Mí",
        "nav.projects": "Proyectos",
        "nav.contact": "Contacto",
        "landing.subtitle": "Desarrollador Web y Programador",
        "landing.btn": "Ver Más",
        "about.title": "Sobre Mí",
        "about.p1": "Soy un estudiante de desarrollo web basado en Uruguay. Empecé a estudiar Ingeniería en Computación en 2023, y he estado aprendiendo desarrollo web mediante cursos y estudio autodidacta desde entonces.",
        "about.p2": "Actualmente trabajo con HTML, CSS, JavaScript, React, SQL, C++ y Python, mientras continúo desarrollando mis habilidades mediante proyectos personales y práctica.",
        "about.p3": "También cuento con un certificado de Inglés B2 First (FCE) de Cambridge.",
        "about.htmlDesc": "Creación y Estilizado de sitios web.",
        "about.jsDesc": "Implementación de funcionalidad y lógica en sitios web. Conexión con bases de datos y servidores.",
        "about.reactDesc": "Desarrollo de interfaces de usuario dinámicas y optimizadas mediante el uso de componentes y estados dinámicos.",
        "about.sqlDesc": "Manejo y búsquedas en bases de datos relacionales.",
        "about.via": "En",
        "about.cppDesc": "Desarrollo de aplicaciones con programación orientada a objetos, enfocado en soluciones algorítmicas y optimización de recursos.",
        "about.cppVia": "En la Universidad",
        "about.pythonDesc": "Alta flexibilidad, ideal para automatización de tareas y desarrollo de aplicaciones.",
        "about.pythonVia": "Autodidacta",
        "projects.title": "Proyectos",
        "projects.cafe": "Un sitio web estático desarrollado mientras aprendía HTML y CSS, cuenta con diseño responsive, SEO, y estilizado mejorado con Bootstrap y SASS. También incluye animaciones con wow.js para una mejor experiencia visual.",
        "projects.jsEcomm": "Un proyecto de E-Commerce desarrollado mientras aprendía JS. Manipula el DOM dinámicamente mediante filtros y renderiza productos después de hacer un fetch desde un archivo JSON. Cuenta con carrito funcional que se guarda en localStorage y experiencia de usuario mejorada mediante el uso de Bootstrap y Toastify.js.",
        "projects.reactEcomm": "Un proyecto de E-Commerce desarrollado mientras aprendía React, utilizando herramientas como useState, useEffect, useContext, useParams, y más. Cuenta con backend hecho con Firebase para guardar productos y recibos. En este proyecto prioricé aprender funcionalidades antes que el estilizado, resultando en un diseño muy básico. Planeo revisitarlo en el futuro para mejorarlo.",
        "projects.toWeb": "al Sitio",
        "projects.toRepo": "al Repositorio",
        "projects.comingSoon": "~ Próximamente más ~",
        "contact.title": "Contacto",
        "contact.text": "Actualmente estoy en busca de oportunidades para construir experiencia profesional en desarrollo web. Si querés ponerte en contacto, me podés encontrar en cualquiera de los links de abajo.",
        "contact.mailToast": "Copiado al Portapapeles",
    }
}


setLanguage(language);