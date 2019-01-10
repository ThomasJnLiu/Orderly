var taskArray = [];
var taskArrayAlpha = [];
var taskArrayAlpha2 = [];
var key = 0;

class Task {
    constructor(title, date, note) {
        this._title = title;
        this._date = date;
        this._note = note;
    }

    get title() {
        return this._title;
    }

    get date() {
        return this._date;
    }

    get note() {
        return this._note;
    }

}
function addTask() {

    //get values from input
    var taskList = document.getElementById("taskList");
    var task = document.getElementById("taskInput").value;
    var date = document.getElementById("dateInput").value;
    var note = document.getElementById("noteInput").value;

    //store title of task for future sorting purposes
    sessionStorage.setItem(key, task);
    key++;
    sessionStorage.setItem("keyNum", key);

    //take values and instantiate new task object
    var newTask = new Task(task, date, note);
    taskArray.push(newTask);

    //declare linebreak for future use
    var lineBreak = document.createElement("br");

    //declare div, assign CSS class
    var newDiv = document.createElement("div");
    newDiv.className = "taskContainer";

    //declare title, assign CSS class, append text node to container
    var newTitle = document.createTextNode(taskArray[taskArray.length - 1].title);
    var titleContainer = document.createElement("p");
    titleContainer.className = "taskTitle";
    titleContainer.appendChild(newTitle);

    //declare checkbox to be put on right of div
    var newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.className = "taskCheckbox";

    //declare date, assign CSS class
    var newDate = document.createTextNode(taskArray[taskArray.length - 1].date);
    var dateContainer = document.createElement("p");
    dateContainer.className = "taskDate";
    dateContainer.appendChild(newDate);

    //declare note, assign CSS class
    var newTaskNote = document.createTextNode(taskArray[taskArray.length - 1].note);
    var noteContainer = document.createElement("p");
    noteContainer.className = "taskDescription";
    noteContainer.appendChild(newTaskNote);

    //append checkbox, title, date, note to div
    newDiv.appendChild(newCheckbox);
    newDiv.appendChild(titleContainer);
    newDiv.appendChild(dateContainer);
    newDiv.appendChild(noteContainer);

    //append div to body, add linebreak for spacing
    document.body.appendChild(newDiv);
    document.body.appendChild(lineBreak);
}

function sortAlpha() {

    var output = document.getElementById("taskList");
    for (var i = 0; i < sessionStorage.getItem("keyNum"); i++) {
        taskArrayAlpha[i] = sessionStorage.getItem(i);
    }

    taskArrayAlpha.sort();
    for (var i = 0; i < sessionStorage.getItem("keyNum"); i++) {
        output.innerHTML += taskArrayAlpha[i] + "<br>";
    }

}

function sortAlphaBackwards() {

    var output = document.getElementById("taskList");
    for (var i = 0; i < sessionStorage.getItem("keyNum"); i++) {
        taskArrayAlpha[i] = sessionStorage.getItem(i);
    }

    taskArrayAlpha.sort();
    for (var i = sessionStorage.getItem("keyNum") - 1; i >= 0; i--) {
        output.innerHTML += taskArrayAlpha[i] + "<br>";
        console.log(taskArrayAlpha[0]);
    }


}