export type Task = {
    id?: number;
    title: string;
    description: string;
    dueDate: string;
    priority: "low" | "medium" | "high";
};
export declare function createNewTask(task: Task): Promise<void>;
export declare function getAllTasks(db: IDBDatabase, storeName: string): Promise<any[]>;
export declare function renderTask(tasks: any[]): void;
//# sourceMappingURL=tasks.d.ts.map