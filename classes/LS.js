class LS {
	getData(name){
		let data;
		if(localStorage.getItem('name') === null){
			data = [];
		} else {
			data = JSON.parse(localStorage.getItem('name'));
		}
		return data;
	}
	setData(name, data){
		localStorage.setItem(name, JSON.stringify(data));
	}
	addTask(task){
		// set data to the LS
		let tasks = this.getData("tasks");
		if(localStorage.getItem('tasks') === null){
			tasks = [];
		} else {
			tasks = JSON.parse(localStorage.getItem('tasks'));
		}
		tasks.push(task);
		this.setData("tasks", tasks);
		// log to console that task is added to LS
		task.addedToLS();
	}
	deleteTask(task){
		let tasks = this.getData("tasks");
		tasks.forEach(function(tasksElement, tasksIndex){
			if(tasksElement.name === task){
				tasks.splice(tasksIndex, 1);
			}
		});
		this.setData("tasks",tasks);
	}
	deleteTasks(){
		localStorage.clear();
	}
}