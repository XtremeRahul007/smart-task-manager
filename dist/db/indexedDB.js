const DB_NAME = "smartTaskManagerDB";
const DB_VERSION = 1;
let dbPromise = null;
export function openDB() {
    if (dbPromise)
        return dbPromise;
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains("users")) {
                const store = db.createObjectStore("users", { keyPath: "id", autoIncrement: true });
                store.createIndex("name", "name", { unique: true });
            }
            if (!db.objectStoreNames.contains("tasks")) {
                const store = db.createObjectStore("tasks", { keyPath: "id", autoIncrement: true });
                store.createIndex("title", "title", { unique: false });
                store.createIndex("priority", "priority", { unique: false });
                store.createIndex("currentDate", "currentDate", { unique: false });
                store.createIndex("dueDate", "dueDate", { unique: false });
            }
        };
        request.onsuccess = (event) => {
            resolve(request.result);
        };
        request.onerror = (event) => {
            reject(request.error);
        };
    });
}
;
//# sourceMappingURL=indexedDB.js.map