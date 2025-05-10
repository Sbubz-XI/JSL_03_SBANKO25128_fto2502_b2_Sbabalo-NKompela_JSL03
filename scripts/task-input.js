function addTask() {
  alert("Task added!"); // Temporary test
}

function getTaskDetails() {
  let title = prompt("Enter the task title:").trim();
  let status = prompt("Enter the task status (TODO, DOING, DONE):")
    .trim()
    .toLowerCase();

  // Validate status input
  while (!["todo", "doing", "done"].includes(status)) {
    alert("Invalid status! Please enter todo, doing, or done.");
    status = prompt("Enter the task status (TODO, DOING, DONE):")
      .trim()
      .toLowerCase();
  }

  console.log(`Task Added - Title: "${title}", Status: "${status}"`);

  return { title, status };
}

function addTask() {
  let task = getTaskDetails();

  let taskElement = document.createElement("div");
  taskElement.className =
    "bg-white rounded-lg hover:bg-[#E4EBFA] hover:scale-101 transition-all duration-300 mb-5 py-4 px-4 text-lg font-bold shadow-md";
  taskElement.innerHTML = `<h3 class="text-lg font-bold">${task.title}</h3>`;

  document.getElementById(`${task.status}-column`).appendChild(taskElement);

  // Check for completed tasks and log appropriate message
  let doneTasks = document.getElementById("done-column").children.length;

  if (doneTasks > 0) {
    console.log(`Task Added - Title: "${title}", Status: "${status}"`);
  } else {
    console.log("🚀 No Tasks Completed, let's get to work.");
  }
}

//this is
let getTaskDetails = () => {
  let title = prompt("Enter the task title:").trim();
  let status = prompt("Enter the task status (TODO, DOING, DONE):")
    .trim()
    .toLowerCase();

  while (!["todo", "doing", "done"].includes(status)) {
    alert("Invalid status! Please enter TODO, DOING, or DONE.");
    status = prompt("Enter the task status (TODO, DOING, DONE):")
      .trim()
      .toLowerCase();
  }

  console.log(`Task Added - Title: "${title}", Status: "${status}"`);
  return { title, status };
};

let addTask = () => {
  let task = getTaskDetails();

  let taskElement = document.createElement("div");
  taskElement.className =
    "bg-white rounded-lg hover:bg-[#E4EBFA] hover:scale-101 transition-all duration-300 mb-5 py-4 px-4 text-lg font-bold shadow-md";
  taskElement.innerHTML = `<h3 class="text-lg font-bold">${task.title}</h3>`;

  document.getElementById(`${task.status}-column`).appendChild(taskElement);

  let doneTasks = document.getElementById("done-column").children.length;
  console.log(
    doneTasks > 0
      ? `Task Added - Title: "${task.title}", Status: "${task.status}"`
      : "🚀 No Tasks Completed, let's get to work."
  );
};
