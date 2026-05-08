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

            if (!db.objectStoreNames.contains("tasks")) {
                const store = db.createObjectStore("tasks", { keyPath: "id", autoIncrement: true });

                store.createIndex("title", "title", { unique: false });
                store.createIndex("priority", "priority", {unique: false});
                store.createIndex("currentDate", "currentDate", {unique: false});
                store.createIndex("dueDate", "dueDate", { unique: false});
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