export function clearAllStores(dbName: string): Promise<void> {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName);

        request.onsuccess = () => {
            const db = request.result;

            const storeNames = Array.from(db.objectStoreNames);
            if (storeNames.length === 0) {
                db.close();
                resolve();
                return;
            }

            const tx = db.transaction(storeNames, "readwrite");

            tx.oncomplete = () => {
                db.close();
                resolve();
            };

            tx.onerror = () => {
                db.close();
                reject(tx.error);
            };

            tx.onabort = () => {
                db.close();
                reject(new Error("Transaction aborted"));
            };

            for (const storeName of storeNames) {
                if (typeof storeName === "string" && storeName.length > 0) {
                    try {
                        const store = tx.objectStore(storeName);
                        store.clear();
                    } catch (err) {
                        console.warn(`Failed to clear store "${storeName}":`, err);
                    }
                }
            }
        };

        request.onerror = () => {
            reject(request.error);
        };

        request.onblocked = () => {
            reject(new Error("Database open blocked"));
        };
    });
}