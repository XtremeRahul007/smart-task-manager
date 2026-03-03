const STORAGE_KEY = "theme";

export function initTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEY);

    if (savedTheme) {
        applyTheme(savedTheme);
        return;
    }

    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    applyTheme(systemDark ? "dark" : "light");
}

export function toggleTheme() {
    const current = getCurrentTheme();
    let next;
    if (current === "dark") {
        next = "light";
    } else {
        next = "dark";
    }

    document.documentElement.dataset.theme = next;

    updateThemeIcon(next);
    applyTheme(next);
    saveTheme(next);
}

export function updateThemeIcon(theme) {
    const toggleBtnIco = document.getElementById("theme-toggle-icon");

    toggleBtnIco.classList.toggle("icon-dark-mode", theme === "dark");
    toggleBtnIco.classList.toggle("icon-light-mode", theme === "light");
}

function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
}

function saveTheme(theme) {
    localStorage.setItem(STORAGE_KEY, theme);
}

function getCurrentTheme() {
    return document.documentElement.dataset.theme;
}