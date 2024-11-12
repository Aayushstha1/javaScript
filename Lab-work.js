// Selecting the DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${taskText}</span>
      <button class="deleteBtn">Delete</button>
    `;

    // Add click event to toggle 'completed' class
    li.addEventListener('click', function(event) {
      if (event.target.tagName !== 'BUTTON') {
        li.classList.toggle('completed');
      }
    });

    // Add click event to the delete button
    const deleteBtn = li.querySelector('.deleteBtn');
    deleteBtn.addEventListener('click', function() {
      li.remove();
    });

    // Append the new task to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
  }
}

// Event listener for 'Add Task' button
addTaskBtn.addEventListener('click', addTask);

// Allow pressing 'Enter' to add a task
taskInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});
