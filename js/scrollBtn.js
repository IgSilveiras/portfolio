// Desplazamiento smooth con los botones de la nav y landing
document.querySelectorAll("[data-scroll-to]").forEach(element => {

    element.addEventListener("click", (e) => {
        e.preventDefault();

        const targetId = e.currentTarget.getAttribute("data-scroll-to");
        const targetElement = document.getElementById(targetId);

        // Offset para evitar que el target quede debajo del header
        const headerHeight = document.querySelector("header").offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });
    })

})

const brandBtn = document.getElementById("brandBtn"); // Boton "home"

brandBtn.addEventListener("click", (e) => {
    e.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})


// Agregarle clase "active" al boton correspondiente a cada sección
const sections = document.querySelectorAll("section");
const observerOptions = {
    root: null,
    threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            const targetId = entry.target.getAttribute("id");

            document.querySelectorAll("[data-scroll-to]").forEach(btn => {

                if (btn.id !== "moreBtn") {              // Evito el boton de la landing

                    if (btn.getAttribute("data-scroll-to") === targetId) {
                        btn.classList.add("active");
                    }

                    else {
                        btn.classList.remove("active")
                    }
                }
            });
        }
    });

}, observerOptions);

sections.forEach(section => observer.observe(section));