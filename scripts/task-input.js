const AllTasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
];

let taskId = AllTasks.length + 1; // ✅ Ensures IDs start after existing tasks
const Tasks = [...AllTasks]; // ✅ Ensures Tasks array is initialized

let addTaskDetails = () => {
  let title = prompt("Enter the task title:").trim();
  let description = prompt("Enter the task description:").trim();
  let status = prompt("Enter the task status (TODO, DOING, DONE):")
    .trim()
    .toLowerCase();

  while (!["todo", "doing", "done"].includes(status)) {
    alert("Invalid status! Please enter TODO, DOING, or DONE.");
    status = prompt("Enter the task status (TODO, DOING, DONE):")
      .trim()
      .toLowerCase();
  }

  let task = { id: taskId++, title, description, status };
  Tasks.push(task); // ✅ Fixed: Now it adds to "Tasks" instead of an undefined array

  console.log(
    `Task Added - Title: "${title}", Description: "${description}", Status: "${status}"`
  );
  console.log(Tasks); // ✅ Logs updated task list

  return task;
};

let addTask = () => {
  let task = addTaskDetails();

  let taskElement = document.createElement("div");
  taskElement.className =
    "bg-white rounded-lg hover:bg-[#E4EBFA] hover:scale-101 transition-all duration-300 mb-5 py-4 px-4 text-lg font-bold shadow-md";
  taskElement.innerHTML = `<h3 class="text-lg font-bold">${task.title}</h3><p class="text-gray-600">${task.description}</p>`;

  let column = document.getElementById(`${task.status}-column`);
  if (column) {
    column.appendChild(taskElement); // ✅ Prevents error if column doesn't exist
  } else {
    console.warn(`No column found for status: ${task.status}`);
  }

  let doneTasks = document.getElementById("done-column")?.children.length || 0;
  console.log(
    doneTasks > 0
      ? `Task Added - Title: "${task.title}", Status: "${task.status}"`
      : "🚀 No Tasks Completed, let's get to work."
  );
};
