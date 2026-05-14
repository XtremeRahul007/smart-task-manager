export let cardRef;
export async function resolveTaskAction(e) {
    const target = e.target;
    if (!target.classList.contains("task-card-action-btns"))
        return null;
    const card = target.closest(".task-card");
    if (!card)
        return null;
    cardRef = card;
    return await Number(card.dataset.id);
}
//# sourceMappingURL=taskActionHandler.js.map