export function initSidebar() {
    const menuBtn = document.getElementById("asideMenuBtn");
    const sideBar = document.getElementById("sideBar");
    const overLay = document.getElementById("overLay");

    if (!menuBtn || !sideBar) return;
    let isOpen = false;

    const openSidebar = () => {
        sideBar.classList.add("open");
        menuBtn.classList.add("no-bg");
        overLay.classList.add("active");
        isOpen = true;
    }

    const closeSidebar = () => {
        sideBar.classList.remove("open");
        menuBtn.classList.remove("no-bg");
        overLay.classList.remove("active");
        isOpen = false;
    }

    const toggleSidebar = (e) => {
        e.preventDefault();
        e.stopPropagation();
        isOpen ? closeSidebar() : openSidebar();
    }

    const outsideClickHandler = () => {
        closeSidebar();
    }

    menuBtn.addEventListener("click", toggleSidebar);
    overLay.addEventListener("click", outsideClickHandler);
    document.addEventListener("keydown", keyboardEscape);
};