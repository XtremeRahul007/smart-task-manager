document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menuBtn");
    const sideBar = document.getElementById("sideBar");

    menuBtn.addEventListener("click", (e) => {
        e.preventDefault()
        sideBar.classList.toggle("open");
        menuBtn.classList.toggle('no-bg');
    });
});