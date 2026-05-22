import { renderTask } from "../db/tasks.js";
const filterState = {
    search: "",
    sortBy: "currentDate",
    order: "desc"
};
export function setFilterState(updates) {
    Object.assign(filterState, updates);
    console.log(filterState);
}
export function processTasks(tasks) {
    const filteredTasks = tasksSearch(tasks, filterState.search);
    const sortedTasks = tasksSorter(filteredTasks, filterState.sortBy, filterState.order);
    renderTask(sortedTasks);
}
function tasksSearch(tasks, search) {
    if (search.trim() === "")
        return tasks;
    const filteredTasks = [];
    const searchString = search.trim().toLowerCase();
    for (let index = 0; index < tasks.length; index++) {
        const task = tasks[index];
        if (!task)
            continue;
        const tasksTitleString = task.title.toLowerCase();
        if (tasksTitleString.includes(searchString)) {
            filteredTasks.push(task);
        }
    }
    return filteredTasks;
}
function tasksSorter(tasks, sortBy, order) {
    const priorityRank = {
        low: 1,
        medium: 2,
        high: 3
    };
    const tasksSnapshot = structuredClone(tasks);
    for (let index1 = 0; index1 < tasksSnapshot.length; index1++) {
        let swapped = false;
        for (let index2 = 0; index2 < tasksSnapshot.length - index1 - 1; index2++) {
            let left = tasksSnapshot[index2][sortBy];
            let right = tasksSnapshot[index2 + 1][sortBy];
            if (sortBy === "priority") {
                left = priorityRank[left];
                right = priorityRank[right];
            }
            if (left < right && order === "desc") {
                [tasksSnapshot[index2], tasksSnapshot[index2 + 1]] = [tasksSnapshot[index2 + 1], tasksSnapshot[index2]];
                swapped = true;
            }
            else if (left > right && order === "asc") {
                [tasksSnapshot[index2], tasksSnapshot[index2 + 1]] = [tasksSnapshot[index2 + 1], tasksSnapshot[index2]];
                swapped = true;
            }
        }
        if (!swapped)
            break;
    }
    return tasksSnapshot;
}
//# sourceMappingURL=taskProcessor.js.map