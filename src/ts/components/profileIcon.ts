import { getCurrentUser } from "./authForm.js";
import { truncateText } from "../utils/formatText.js";

let usernameRef: string | null = null;
export function initProfileIcon(authUsername: string | null = null) {
    const userIcon = document.getElementById("profileMenuIcon");
    if (!userIcon) return;
    const username = getCurrentUser()?.name ?? authUsername;
    if (!username) return;
    const textIcon = username.charAt(0).toUpperCase();

    userIcon.textContent = textIcon;
    usernameRef = username;
    initProfileUserName();
}

function initProfileUserName() {
    const profileUserName = document.getElementById("userProfileName");
    if (!profileUserName || !usernameRef) return;
    const username = truncateText(usernameRef);

    profileUserName.textContent = `Hello, ${username}`;
}
