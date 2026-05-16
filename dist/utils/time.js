export function getTimestamp(date) {
    const timestamp = new Date(date).getTime();
    return timestamp;
}
export function formatDate(timestamp) {
    const date = new Date(timestamp);
    const day = String(date.getDay);
    const month = String(date.getMonth);
    const year = String(date.getFullYear);
    return `${day}.${month}.${year}`;
}
//# sourceMappingURL=time.js.map