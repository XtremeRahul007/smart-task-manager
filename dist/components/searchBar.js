export function searchBarFocus() {
    const searchBarInput = document.getElementById("searchBar");
    const searchBtn = document.getElementById("searchBth");
    searchBtn?.addEventListener("click", () => {
        searchBarInput?.focus();
    });
}
//# sourceMappingURL=searchBar.js.map