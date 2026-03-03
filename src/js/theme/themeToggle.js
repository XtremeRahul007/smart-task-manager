import { toggleTheme } from "./themeManager.js";

export function setupThemeToggle() {
    const btn = document.getElementById("theme-toggle-btn");

    btn.addEventListener("click", toggleTheme);
}