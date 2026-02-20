export function initPopupMenu() {
    const menuBtn = document.getElementById("profileMenuBtn");
    const profileMenu = document.getElementById("profileMenu");
    const overLay = document.getElementById("overLay")

    if (!menuBtn || !profileMenu || !overLay) return;
    let isOpen = false;

    const openPopup = () => {
        profileMenu.classList.add("open");
        overLay.classList.add("active")
        isOpen = true;
    }

    const closePopup = () => {
        profileMenu.classList.remove("open");
        overLay.classList.remove("active")
        isOpen = false;
    }

    const togglePopup = (e) => {
        e.preventDefault();
        e.stopPropagation();
        isOpen ? closePopup() : openPopup();
    }

    const outsideClickHandler = () => {
        closePopup();
    }
    menuBtn.addEventListener("click", togglePopup);
    overLay.addEventListener("click", outsideClickHandler);
}