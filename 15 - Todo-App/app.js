// Selecting DOM elements
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const clearAll = document.querySelector(".footer button");
const pendingCount = document.querySelector(".pendingTask");

// Input field keyup event to activate/deactivate add button
inputBox.onkeyup = () => {
  let userData = inputBox.value;
  if (userData.trim() != "") {
    addBtn.classList.add("active"); // activate button when user types non-whitespace
  } else {
    addBtn.classList.remove("active"); // deactivate if empty or just spaces
  }
};

// When the user clicks the Add button
addBtn.onclick = () => {
  // Get the value typed in the input box (the task name)
  let userData = inputBox.value;

  // Get previously saved tasks from localStorage
  let getLocalStorage = localStorage.getItem("New Task");

  // Declare a variable to hold the task list
  let listArr;

  // If there are no tasks saved yet
  if (getLocalStorage == null) {
    // Start with an empty array (no tasks yet)
    listArr = [];
  } else {
    // If tasks already exist, parse the JSON string back into a JS array
    listArr = JSON.parse(getLocalStorage);
  }

  // Remove the "active" state from the add button (turns it off visually)
  addBtn.classList.remove("active");

  // Add the new task to the array
  listArr.push(userData);

  // Save the updated task list back to localStorage (convert to JSON string)
  localStorage.setItem("New Task", JSON.stringify(listArr));

  // Call the function to update the UI with the new task list
  showtask();
};


function showtask() {
  // Step 1: Get task data from localStorage
  let newTask = localStorage.getItem("New Task");

  // Step 2: If there's no data, start with an empty list
  if (newTask == null) {
    listArr = [];
  } else {
    // If data exists, convert JSON string to JS array
    listArr = JSON.parse(newTask);
  }

  // Step 3: Show the number of tasks (e.g., "3 tasks pending")
  const pendingNumb = document.querySelector(".pendingTask");
  pendingNumb.textContent = listArr.length;

  // Step 4: Enable or disable "Clear All" button based on task count
  if (listArr.length > 0) {
    clearAll.classList.add("active");  // Show button
  } else {
    clearAll.classList.remove("active");  // Hide button
  }

  // Step 5: Build HTML for each task in the list
  let htmlTag = "";
  listArr.forEach((value, index) => {
    htmlTag += `
      <li>
        ${value}
        <span onclick="todoDelete(${index})">
          <i class="bx bx-trash"></i>
        </span>
      </li>`;
  });

  // Step 6: Add all tasks to the DOM (in the todo list)
  todoList.innerHTML = htmlTag;

  // Step 7: Clear the input field after displaying tasks
  inputBox.value = "";
}


// delete todo  function
function todoDelete(index) {
  let getLocalStorage = localStorage.getItem("New Task");
  listArr = JSON.parse(getLocalStorage);
  // delete or remove the particular list
  listArr.splice(index, 1);
  // after remove the list again updated
  localStorage.setItem("New Task", JSON.stringify(listArr));
  showtask();
}

// clear all task function button
clearAll.onclick = () => {
  // empty array created
  listArr = [];
  // after remove the list again updated
  localStorage.setItem("New Task", JSON.stringify(listArr));
  showtask();
};

window.onload = () => {
  showtask();
};
