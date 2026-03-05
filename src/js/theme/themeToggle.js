import { toggleTheme } from "./themeManager.js";

export function setupThemeToggle() {
    const themebtn = document.getElementById("theme-toggle-btn");
    
    themebtn.addEventListener("click", toggleTheme);
}