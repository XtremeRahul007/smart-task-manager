export function truncateText(text: string, maxLength: number = 20, suffix: string = "...") {
    if (!text) return;

    return text.length > maxLength ? text.slice(0, maxLength) + suffix : text; 
}