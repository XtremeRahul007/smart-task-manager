import { showToast } from "../services/toastService.js";
const DB_NAME = "smartTaskManagerDB";
const DB_VERSION = 1;
export function openDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains("users")) {
                const store = db.createObjectStore("users", { keyPath: "id", autoIncrement: true });
                store.createIndex("name", "name", { unique: true });
            }
        };
        request.onsuccess = (event) => {
            resolve(request.result);
        };
        request.onerror = (event) => {
            reject(request.error);
        };
        // showToast("Database running", "info");
    });
}
;
//# sourceMappingURL=indexedDB.js.map