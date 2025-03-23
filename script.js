function toggleFullPage() {
    const fullPage = document.getElementById("fullPage");
    const arrow = document.querySelector(".arrow");
    const button = document.getElementById("toggleButton");

    fullPage.classList.toggle("active");
    arrow.style.transform = fullPage.classList.contains("active") ? "rotate(180deg)" : "rotate(0deg)";
    button.classList.toggle("active-btn");
}