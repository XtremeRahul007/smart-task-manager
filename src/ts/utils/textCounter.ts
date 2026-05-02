export function textCounter(description: string, textCounter: string, textLimit: number) {
    const maxLength: number = textLimit;
    const textarea = document.getElementById(description) as HTMLTextAreaElement | HTMLInputElement;
    const counter = document.getElementById(textCounter) as HTMLDivElement;

    if (!textarea || !counter) return;

    counter.textContent = `${textarea.value.length} / ${maxLength}`;

    textarea.addEventListener("input", () => {
        let currentLength = textarea.value.length;
        counter.textContent = `${currentLength} / ${maxLength}`;

        if (currentLength === maxLength) {
            counter.style.color = "red";
        } else {
            counter.style.color = "";
        }
    });
}