alert("Hello, World!");
const task = document.getElementById('task'),
    add = document.getElementById('add'),
    list = document.getElementById('list');

    task.addEventListener('keypress', function(e) {
        if(e.key === "Enter") {
            addUpdateClick.click();
        }
    });

    function CreateTask() {
        if (task.value ==="") {
            alert("Please enter a task");
            task.focus();
        }

        let li = document.createElement('li');
        const taskitem = document.createElement('div');
        taskitem.className = 'taskitem';
        const taskText = document.createElement('div');
        taskText.textContent = task.value;
        const taskActions = document.createElement('div');
        taskActions.className = 'taskActions';
        const editImg = document.createElement('img');
        editImg.className = 'change';
        editImg.src = 'images/edit.png';
        const deleteImg = document.createElement('img');
        deleteImg.className = 'change';
        deleteImg.src = 'images/delete.png';
        taskActions.appendChild(editImg);
        taskActions.appendChild(deleteImg);
        taskitem.appendChild(taskText);
        taskitem.appendChild(taskActions);

        li.appendChild(taskitem);
        list.appendChild(li);
        task.value = '';
    }