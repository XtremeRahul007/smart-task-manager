export function hideLoader() {
    const hideLoader = document.querySelector(".loader-container");
    hideLoader?.classList.add("fade-out");
    setTimeout(() => hideLoader?.remove(), 300);
}