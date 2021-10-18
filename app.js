ui = new UI();
ls = new LS();

const form = document.querySelector("form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector("ul");
taskList.addEventListener("click", deleteTask);
form.addEventListener("submit", addTask);
const clearBtn=document.querySelector("#clear-tasks");
clearBtn.addEventListener("click", deleteTasks);
document.addEventListener("DOMContentLoaded", getTasks);

function addTask(e) {
	const task = new Task(taskInput.value);
	ui.addTask(task);
	ls.addTask(task);
	e.preventDefault();
}

function deleteTask(e){
	let task = e.target.parentElement.firstChild;
	ui.deleteTask(task);
	task=task.textContent;
	ls.deleteTask(task);
}
function getTasks(e) {
	tasks= ls.getData("tasks");
	ui.taskList(tasks);
}
function deleteTasks(e){
	let tasks=document.querySelector("ul");
	ui.deleteTasks(tasks);
	ls.deleteTasks();
}
function getTasks(e){
	tasks=ls.getData("tasks");
	ui.getTasks(tasks);
}