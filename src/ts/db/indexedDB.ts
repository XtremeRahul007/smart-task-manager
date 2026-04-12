import { showToast } from "../services/toastService.js";

const DB_NAME: string = "smartTaskManagerDB";
const DB_VERSION: number = 1;


export function openDB(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
        const request: IDBOpenDBRequest = indexedDB.open(DB_NAME, DB_VERSION);

        request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
            const db = (event.target as IDBOpenDBRequest).result;

            if (!db.objectStoreNames.contains("users")) {
                const store = db.createObjectStore("users", { keyPath: "id", autoIncrement: true });
                store.createIndex("name", "name", { unique: true });
            }
        }

        request.onsuccess = (event: Event) => {
            resolve(request.result);
        }

        request.onerror = (event: Event) => {
            reject(request.error);
        }
        // showToast("Database running", "info");
    });
};