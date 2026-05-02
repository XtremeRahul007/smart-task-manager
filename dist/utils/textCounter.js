export function textCounter(description, textCounter, textLimit) {
    const maxLength = textLimit;
    const textarea = document.getElementById(description);
    const counter = document.getElementById(textCounter);
    if (!textarea || !counter)
        return;
    counter.textContent = `${textarea.value.length} / ${maxLength}`;
    textarea.addEventListener("input", () => {
        let currentLength = textarea.value.length;
        counter.textContent = `${currentLength} / ${maxLength}`;
        if (currentLength === maxLength) {
            counter.style.color = "red";
        }
        else {
            counter.style.color = "";
        }
    });
}
//# sourceMappingURL=textCounter.js.map