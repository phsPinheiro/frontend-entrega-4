const btnDark = document.getElementById("btnDark");
const btnContrast = document.getElementById("btnContrast");

btnDark.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

btnContrast.addEventListener("click", () => {
    document.body.classList.toggle("high-contrast");
});
console.log("Terceira melhoria de acessibilidade carregado");

