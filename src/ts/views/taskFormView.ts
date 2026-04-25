export function createTask() {
    return (
        `<form class="create-task-view" id="createTaskView">
                <div class="task-heading-container">
                <h2 class="task-heading">Create New Task</h2>
            </div>
            <div class="task-entry-container">
                <fieldset class="task-entry title-entry">
                    <legend>Title</legend>
                    <input type="text" id="taskTitle" placeholder="title..." maxlength="200" required>
                    <div id="titleTextCounter" class="title-text-counter"></div>
                </fieldset>
                <fieldset class="task-entry">
                    <legend>Due Date</legend>
                    <input type="date" id="taskDueDate" required>
                </fieldset>
                <fieldset class="task-entry input-radio">
                    <legend>Task Priority</legend>
                    <div class="radio-btn-container">
                        <label for="lowPriority">Low</label>
                        <input type="radio" id="lowPriority" name="radioPriority" value="low" checked>
                    </div>
                    <div class="radio-btn-container">
                        <label for="mediumPriority">Medium</label>
                        <input type="radio" id="mediumPriority" name="radioPriority" value="medium">
                    </div>
                    <div class="radio-btn-container">
                        <label for="highPriority">High</label>
                        <input type="radio" id="highPriority" name="radioPriority" value="high">
                    </div>
                </fieldset>
            </div>
            <div class="task-description-container">
                <fieldset class="task-description">
                    <legend>Description</legend>
                    <textarea class="description-textarea" name="textarea" id="descriptionTextArea" rows="any"
                        maxlength="5000" required></textarea>
                </fieldset>
                <div id="descTextCounter" class="desc-text-counter"></div>
            </div>
            <div class="task-action-btn-container">
                <button type="reset" id="cancelTaskBtn" class="action-btn">Cancel</button>
                <button type="submit" id="saveTaskBtn" class="action-btn">Save Task</button>
            </div>
        </form>`
    );
}

export function editTask() {
    return (
        `<form class="edit-task-view" id="editTaskView">
                <div class="task-heading-container">
                <h2 class="task-heading">Edit Task</h2>
            </div>
            <div class="task-entry-container">
                <fieldset class="task-entry title-entry">
                    <legend>Title</legend>
                    <input type="text" id="taskTitle" placeholder="title..." maxlength="200" required>
                    <div id="titleTextCounter" class="title-text-counter"></div>
                </fieldset>
                <fieldset class="task-entry">
                    <legend>Due Date</legend>
                    <input type="date" id="taskDueDate" required>
                </fieldset>
                <fieldset class="task-entry input-radio">
                    <legend>Task Priority</legend>
                    <div class="radio-btn-container">
                        <label for="lowPriority">Low</label>
                        <input type="radio" id="lowPriority" name="radioPriority" value="low" checked>
                    </div>
                    <div class="radio-btn-container">
                        <label for="mediumPriority">Medium</label>
                        <input type="radio" id="mediumPriority" name="radioPriority" value="medium">
                    </div>
                    <div class="radio-btn-container">
                        <label for="highPriority">High</label>
                        <input type="radio" id="highPriority" name="radioPriority" value="high">
                    </div>
                </fieldset>
            </div>
            <div class="task-description-container">
                <fieldset class="task-description">
                    <legend>Description</legend>
                    <textarea class="description-textarea" name="textarea" id="descriptionTextArea" rows="any"
                        maxlength="5000" required></textarea>
                </fieldset>
                <div id="descTextCounter" class="desc-text-counter"></div>
            </div>
            <div class="task-action-btn-container">
                <button type="reset" id="cancelTaskBtn" class="action-btn">Cancel Changes</button>
                <button type="submit" id="saveTaskBtn" class="action-btn">Confirm Changes</button>
            </div>
        </form>`
    );
}

export function taskList() {
    return (
       `<section class="task-list-view" id="taskListView">
            <div class="task-list-header">
                <h2>Task List</h2>
            </div>
            <div class="task-list-container">
                <div class="task-card">
                    <h3 class="task-card-title">Task title</h3>
                    <div class="task-card-description">Task description 80 Character long</div>
                    <div class="task-card-duedate">01-01-1990</div>
                    <div class="task-card-priority">Medium</div>
                    <button type="button" class="task-card-editbtn">Edit</button>
                </div>
            </div>
        </section>`
    );
}

export function idleView() {
    return (
       `<section class="idle-task-view">
            <div class="create-task-trigger" id="createTaskTrigger">
                <div class="create-task-icon icon icon-plus icon-lg"></div>
            </div>
            <div class="task-list-trigger-container">
                <div class="task-list-text">Create a new task. Or,</div>
                <button type="button" class="task-list-trigger" id="taskListTrigger">Visit Task List</button>
            </div>
        </section>`
    );
}