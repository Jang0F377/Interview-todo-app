# Requirements

NODE,
NPM,
Python,
Port 7000 needs to be available

You'll also need the PYTHON environment variable set correctly.

# Installation

`npm install`

# Setup

`npm run start:dev`

# Instructions
Build a to-do app using the provided repo (this one). You need to be able to add, remove and "mark as complete" items in the todo list.

The Application's Home page can be found in `src/pages/Home/index.tsx`. This is the page where you will want to start adding your code for the app.

Required Functionality:
1. A text box where you can type in the text for a to-do item.
2. A "submit" button that adds items to the top of the to-do list when clicked.
3. A "remove" button that removes items from off the bottom of the to-do list when clicked.
4. Each to-do item should have a way of marking it as done (the checkmark in the examples). When clicked it marks the item as complete and changes the to-do items text to be crossed out.

The order of this should operate like a queue. (FIFO)

![Base Example](https://github.com/matweaver7/todo_interview_app/blob/main/readme_images/base_todo.png?raw=true)


![Item Checked off](https://github.com/matweaver7/todo_interview_app/blob/main/readme_images/todo_checked.png?raw=true)

(Your solution does not need to look like the included examples, but can if you want.)

# Helpful Information

This project is set up to use [React Bootstrap](https://react-bootstrap.github.io/). Feel free to use the Bootstrap components and class names to help make your styling easier and more consistent.

If you want to use CSS styling, this project is set up to use [Sass](https://sass-lang.com/documentation/). Plain CSS files will also work.
