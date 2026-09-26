console.log("JavaScript Connected!");

const button = document.getElementById("themeButton");

button.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});
