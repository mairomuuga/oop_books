ui = new UI();
ls = new LS();

// event elements
const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector("ul");
const clearTasks = document.querySelector("#del-tasks");
// events
// form submit event
form.addEventListener('submit', addTask);
taskList.addEventListener("click", deleteTask);
clearTasks.addEventListener("click", deleteTasks);
// page reload
document.addEventListener("DOMContentLoaded", getTasks);


function addTask(e) {
	// create a new object Task with input value
	const task = new Task(taskInput.value);
	// add task value to the visual UI object
	ui.addTask(task);
	// add task value to the LS by LS object
	ls.addTask(task);
	e.preventDefault();
}

function deleteTask(e){
	let task = e.target.parentElement.firstChild;
	// delete task value from visual by UI object
	ui.deleteTask(task);
	// change task element content before deleting from LS
	task = task.textcContent;
	// delete task value from LS by LS object
	ls.deleteTask(task);
}

function deleteTasks(e){
	let tasks = document.querySelector("ul");
	ui.deleteTasks(tasks);
	ls.deleteTasks();
}


function getTasks(e) {
	// get tasks from LS by this localstorage name
	tasks = ls.getData("tasks");
	// create task list by UI
	ui.taskList(tasks);
}