// Selecciona el botón de opciones en el menú
const optionsButton = document.getElementById("options");
optionsButton.addEventListener("click", () => {
    
    // Selecciona el contenedor de opciones
    const optionsContainer = document.getElementById('optionsContainer');

    // Verifica si el contenedor de opciones está oculto
    if (optionsContainer.classList.contains("d-none")) {
        optionsContainer.classList.remove("d-none");
    } else {
        optionsContainer.classList.add("d-none");
    }
});
