export async function openConfirmPopup({ title, message, confirmText = "Confirm", cancelText = "Cancel" }) {
    return new Promise((resolve) => {
        const popup = document.createElement("div");
        popup.className = "confirm-popup";
        popup.innerHTML = `
            <div class="confirm-popup-content">
                <h2>${title}</h2>
                <p>${message}</p>
                <div class="confirm-popup-actions">
                    <button id="confirmCancelBtn">${cancelText}</button>
                    <button id="confirmAcceptBtn">${confirmText}</button>
                </div>
            </div>`;
        document.body.appendChild(popup);
        const confirmBtn = popup.querySelector("#confirmAcceptBtn");
        const cancelBtn = popup.querySelector("#confirmCancelBtn");
        confirmBtn?.addEventListener("click", () => {
            popup.classList.add("fade-out");
            setTimeout(() => popup.remove(), 300);
            resolve(true);
        });
        cancelBtn?.addEventListener("click", () => {
            popup.classList.add("fade-out");
            setTimeout(() => popup.remove(), 300);
            resolve(false);
        });
    });
}
//# sourceMappingURL=confirmPopup.js.map