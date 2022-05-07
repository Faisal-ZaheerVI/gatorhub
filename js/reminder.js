function getReminder() {
    var input = document.getElementById('inputTitle').value;
    addReminder(input);
}


function addReminder(reminder) {
    var taskList = document.getElementById('task-list');
    var taskCount = document.getElementById('reminder-count');
    var count = parseInt(taskCount.innerHTML);
    console.log("Count before:", count);
    count = count + 1;
    console.log("Count now:", count);
    var content = `<input type="checkbox" id="task-${count}"/>
    <label for="task-${count}"><span class="custom-checkbox"></span>${reminder}</label>`;
    var newReminder = document.createElement('div');
    newReminder.className = 'task';
    newReminder.innerHTML = content;
    taskList.appendChild(newReminder);

    txt = document.createTextNode(count.toString());
    taskCount.removeChild(taskCount.childNodes[0]);
    taskCount.appendChild(txt);
}