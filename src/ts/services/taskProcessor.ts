import { renderTask, type Task } from "../db/tasks.js";

export type SortBy = "currentDate" | "dueDate" | "priority" | "title";

export type Order = "asc" | "desc";

interface TaskFilterState {
    search: string;
    sortBy: SortBy;
    order: Order;
}

const filterState: TaskFilterState = {
    search: "",
    sortBy: "currentDate",
    order: "desc"
};

export function setFilterState(updates: Partial<TaskFilterState>) {
    Object.assign(filterState, updates);
    console.log(filterState);
}

export function processTasks(tasks: Task[]) {
    const filteredTasks = tasksSearch(tasks, filterState.search);
    const sortedTasks = tasksSorter(filteredTasks, filterState.sortBy, filterState.order);
    renderTask(sortedTasks);
}

function tasksSearch(tasks: Task[], search: string): Task[] {
    if (search.trim() === "") return tasks;
    const filteredTasks: Task[] = [];
    const searchString = search.trim().toLowerCase();
    for (let index = 0; index < tasks.length; index++) {
        const task = tasks[index];
        if (!task) continue;
        const tasksTitleString = task.title.toLowerCase();
        if (tasksTitleString.includes(searchString)) {
            filteredTasks.push(task);
        }
    }
    return filteredTasks;
}

function tasksSorter(tasks: Task[], sortBy: SortBy, order: Order): Task[] {
    const priorityRank: any = {
        low: 1,
        medium: 2,
        high: 3
    };
    const tasksSnapshot = structuredClone(tasks);
    for (let index1 = 0; index1 < tasksSnapshot.length; index1++) {
        let swapped = false;
        for (let index2: number = 0; index2 < tasksSnapshot.length - index1 - 1; index2++) {
            let left = tasksSnapshot[index2]![sortBy];
            let right = tasksSnapshot[index2 + 1]![sortBy];

            if (sortBy === "priority") {
                left = priorityRank[left];
                right = priorityRank[right];
            }

            if (left < right && order === "desc") {
                [tasksSnapshot[index2], tasksSnapshot[index2 + 1]] = [tasksSnapshot[index2 + 1]!, tasksSnapshot[index2]!];
                swapped = true;
            }
            else if (left > right && order === "asc") {
                [tasksSnapshot[index2], tasksSnapshot[index2 + 1]] = [tasksSnapshot[index2 + 1]!, tasksSnapshot[index2]!];
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return tasksSnapshot;
}
