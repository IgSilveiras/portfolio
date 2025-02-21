// Landing Parallax
document.addEventListener("DOMContentLoaded", () => {
    const parallaxWrap = document.querySelector(".parallax-wrap");
    const elementCount = 125; // Número de elementos pequeños
    const elements = [];
    const positions = [];
    const targets = [];

    // Crear elementos span dinámicamente
    for (let i = 0; i < elementCount; i++) {
        const span = document.createElement("span");
        const randomValue = (Math.random() * 3 - 2);

        span.setAttribute("value", randomValue);
        span.style.width = "2px";
        span.style.height = "2px";
        span.style.background = "rgba(255, 255, 255, 0.25)";
        span.style.position = "absolute";

        // Posición inicial aleatoria dentro del contenedor
        span.style.top = `${Math.random() * 100}%`;
        span.style.left = `${Math.random() * 100}%`; 

        parallaxWrap.appendChild(span);

        elements.push(span);
        positions.push({ x: 0, y: 0 });
        targets.push({ x: 0, y: 0 });
    }

    // Parallax al mover el mouse
    document.addEventListener("mousemove", (event) => {

        elements.forEach((element, index) => {
            const position = parseFloat(element.getAttribute("value"));
            targets[index].x = (window.innerWidth - event.pageX * position) / 90;
            targets[index].y = (window.innerHeight - event.pageY * position) / 90;
        });

    });

    // Efecto de inercia en la animación
    function animate() {

        elements.forEach((element, index) => {

            // Suavizar posiciones hacia los objetivos
            positions[index].x += (targets[index].x - positions[index].x) * 0.085;
            positions[index].y += (targets[index].y - positions[index].y) * 0.085;

            // Aplicar transformaciones
            element.style.transform = `translateX(${positions[index].x}px) translateY(${positions[index].y}px)`;
            
        });

        requestAnimationFrame(animate);
    }

    animate();
});
