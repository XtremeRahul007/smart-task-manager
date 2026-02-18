document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menuBtn");
    const sideBar = document.getElementById("sideBar");
    const overLay = document.getElementById("overLay");

    let isOpen = false;

    function openSidebar() {
        sidebar.style.transform = "translateX(0%)";
        sideBar.classList.add("open");
        menuBtn.classList.add("no-bg");
        overLay.classList.add("active");
        isOpen = true;
    }

    function closeSidebar() {
        sidebar.style.transform = "translateX(100%)";
        sideBar.classList.remove("open");
        menuBtn.classList.remove("no-bg");
        overLay.classList.remove("active");
        isOpen = false;
    }

    function toggleSidebar(e) {
        e.preventDefault();
        e.stopPropagation();
        isOpen ? closeSidebar() : openSidebar();
    }

    function outsideClickHandler(e) {
        if (!sideBar.contains(e.target) && !menuBtn.contains(e.target)) {
            closeSidebar();
        }
    }

    function keyboardEscape(e) {
        if (e.key === "Escape") {
            closeSidebar();
        }
    }

    menuBtn.addEventListener("click", toggleSidebar);

    document.addEventListener("click", outsideClickHandler);
    
    document.addEventListener("keydown", keyboardEscape);
});
