document.querySelectorAll("[data-scroll-to]").forEach(element => {

    element.addEventListener("click", (e) => {
        e.preventDefault();

        const targetId = event.currentTarget.getAttribute("data-scroll-to");
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