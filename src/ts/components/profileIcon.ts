import { getCurrentUser } from "./authForm.js";

export function initProfileIcon(authUsername: string | null = null) {
    const userIcon = document.getElementById("profileMenuBtn");
    if (!userIcon) return;
    const username = getCurrentUser()?.name ?? authUsername;
    if (!username) return;
    const textIcon = username.charAt(0).toUpperCase();

    userIcon.textContent = textIcon;
}
