export type Task = {
    id?: number;
    title: string;
    description: string;
    dueDate: string;
    currentDate: string | undefined;
    priority: "low" | "medium" | "high";
};
export declare function createNewTask(task: Task): Promise<void>;
export declare function getAllTasks(db: IDBDatabase, storeName: string): Promise<any[]>;
export declare function renderTask(tasks: any[]): void;
export declare function renderEmptyState(): void;
export declare function deleteTask(id: number): Promise<void>;
//# sourceMappingURL=tasks.d.ts.map