export function truncateText(text, maxLength = 20, suffix = "...") {
    if (!text)
        return;
    return text.length > maxLength ? text.slice(0, maxLength) + suffix : text;
}
//# sourceMappingURL=formatText.js.map