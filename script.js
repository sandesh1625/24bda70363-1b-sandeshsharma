
window.onload = function () {
    alert("Welcome to the Sample HTML Page!");
};

const sections = document.querySelectorAll("section");
sections.forEach(section => {
    section.addEventListener("click", () => {
        section.style.backgroundColor = "#e0f7fa";
    });
});
