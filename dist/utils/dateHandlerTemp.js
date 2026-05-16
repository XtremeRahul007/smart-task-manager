export function getTimestamp(date) {
    const dateArr = date.split("-").map(Number);
    if (dateArr.length !== 3) {
        throw new Error("Invalid date format");
    }
    const [year, month, day] = dateArr;
    return new Date(year, month - 1, day).getTime();
}
export function formatDate(timestamp) {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
}
export function formatDateForInput(timestamp) {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
}
//# sourceMappingURL=dateHandlerTemp.js.map