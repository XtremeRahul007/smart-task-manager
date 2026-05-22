import { type Task } from "../db/tasks.js";
export type SortBy = "currentDate" | "dueDate" | "priority" | "title";
export type Order = "asc" | "desc";
interface TaskFilterState {
    search: string;
    sortBy: SortBy;
    order: Order;
}
export declare function setFilterState(updates: Partial<TaskFilterState>): void;
export declare function processTasks(tasks: Task[]): void;
export {};
//# sourceMappingURL=taskProcessor.d.ts.map