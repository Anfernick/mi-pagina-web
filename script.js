const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Cambia el tema al hacer clic
toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark");

    // Cambia el icono entre sol y luna
    if (body.classList.contains("dark")) {
        toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
    }
});
