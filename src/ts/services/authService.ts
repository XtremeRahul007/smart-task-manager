import { openDB } from "../db/indexedDB.js";

interface User {
    name: string;
    password: string;
}

export async function signUpUser(user: User): Promise<string> {
    const db = await openDB();
    const tx = db.transaction("users", "readwrite");
    const store = tx.objectStore("users");
    const request = store.add(user);

    return new Promise((resolve, reject) => {
        request.onerror = () => {
            const error = request.error;
            if (error?.name === "ConstraintError") {
                reject("Username already exists");
                reject("Try to sign in.")
            } else {
                reject("Something went wrong");
            }
        };
        tx.oncomplete = () => {
            db.close();
            resolve("User added successfully");
        };
        tx.onerror = () => reject("Transaction failed");
    });
}


export async function loginUser(user: User): Promise<string> {
    const db = await openDB();
    const tx = db.transaction("users", "readonly");
    const store = tx.objectStore("users");
    const index = store.index("name");
    const request = index.get(user.name);

    return new Promise((resolve, reject) => {
        request.onsuccess = () => {
            const foundUser = request.result as User | undefined;

            if (!foundUser) return reject("User not found");

            if (foundUser.password === user.password) {
                resolve("Login successfully");
            }
            else {
                reject("Wrong password");
            }
        };
        request.onerror = () => reject("DB error");
    });
}