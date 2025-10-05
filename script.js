// Wait for the HTML document to fully load before running the script
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    // Parameters:
    //   event - optional event object when used as an event handler
    //   suppressAlert - when true, do not show the "Please enter a task" alert (used on load)
    function addTask(event, suppressAlert = false) {
        // Get and trim the input value
        const taskText = taskInput.value.trim();

        // If input is empty, alert the user (unless suppressed) and exit
        if (taskText === "") {
            if (!suppressAlert) {
                alert("Please enter a task");
            }
            return;
        }

        // Create a new list item (li) and set its text
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        // When remove button is clicked, remove this list item from the task list
        removeButton.onclick = function () {
            taskList.removeChild(li);
        };

        // Append the remove button to the li, then append li to the task list
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Add task on Add Task button click
    addButton.addEventListener('click', addTask);

    // Add task when Enter key is pressed in the input field
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask(event);
        }
    });

    // Invoke addTask on DOMContentLoaded (suppress the alert so page load doesn't show an alert)
    addTask(null, true);
});