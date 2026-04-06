export function initDataBase() {
    const dbName = "smartTaskManager";
    const dbVersion = 1;
    let db;
    const request = indexedDB.open(dbName, dbVersion);
    request.onupgradeneeded = () => {
        db = request.result;
        if (!db.objectStoreNames.contains("users")) {
            const storeUsers = db.createObjectStore("users", { keyPath: "id", autoIncrement: true });
            storeUsers.createIndex("usernameIndex", "username", { unique: true });
        }
        if (!db.objectStoreNames.contains("tasks")) {
            const storeTasks = db.createObjectStore("tasks", { keyPath: "id", autoIncrement: true });
            storeTasks.createIndex("taskIndex", "task");
        }
    };
    request.onsuccess = () => {
        db = request.result;
    };
    request.onerror = () => {
        console.warn("DataBase initialization failed.");
    };
}
//# sourceMappingURL=indexedDB.js.map