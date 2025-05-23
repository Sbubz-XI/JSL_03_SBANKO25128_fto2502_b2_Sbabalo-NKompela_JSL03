# JSL 03

### Kanban Board Task Manager

## Overview

This project is a **console-based task management system**, designed to help users create and organize tasks efficiently. Users can add **up to three tasks**, each stored as an **object inside an array**, with a **unique incremental ID**. A filtering function enables viewing only **completed tasks**, enhancing usability.

## Features

- **Task Management**

  - Users can input **task title, description, and status** via prompts.
  - Tasks are stored in an array as structured objects.
  - Each task is assigned a **unique ID incrementally**.
  - When the task limit is reached, an alert message notifies the user.

- **Filtering & Console Logging**
  - A **filter function** displays only tasks marked as `"done"`.
  - All tasks are logged in the console for easy reference.
  - Completed tasks are logged under a labeled section.

## Technologies Used

- **JavaScript** (Arrays, Objects, `filter()` method)
- **Console-based interaction** for user input and feedback

## Implementation Highlights

- **Arrays & Objects:** Tasks are managed as objects within an array to ensure structured storage.
- **Incremental ID System:** Each task is assigned a **unique ID** based on the last entry.
- **Filtering Mechanism:** The `filter()` function is used to display completed tasks dynamically.
- **Code Maintainability:** Meaningful variable names, consistent formatting, and clear comments improve readability.

## Installation & Usage

1. Clone or download the repository.

2. Open the project in a JavaScript-enabled environment (browser console or Node.js).

3. Run the script and follow the prompts to add and manage tasks.

## Expected Outcome

A **structured, minimalistic Kanban-style task manager** that allows efficient task input, filtering, and display through the console.

---

This markdown is ready to be copied into your README.md file. Let me know if you'd like any refinements! 🚀
