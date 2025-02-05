
const task = document.getElementById('task'),
    add = document.getElementById('add'),
    list = document.getElementById('list');

    task.addEventListener('keypress', function(e) {
        if(e.key === "Enter") {
            CreateTask().click();
        }
    });

    function CreateTask() {
        if (task.value ==="") {
            alert("Please enter a task");
            task.focus();
        } else{
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
            editImg.addEventListener('click', function() {
                UpdateTask(li);
            });
            const deleteImg = document.createElement('img');
            deleteImg.className = 'change';
            deleteImg.src = 'images/delete.png';
            deleteImg.addEventListener('click', function() {
                list.removeChild(li);
            });
            taskActions.appendChild(editImg);
            taskActions.appendChild(deleteImg);
            taskitem.appendChild(taskText);
            taskitem.appendChild(taskActions);

            li.appendChild(taskitem);
            list.appendChild(li);
            task.value = '';
        }
        localStorage.setItem('list', list.innerHTML);
    }

    function UpdateTask(li) {
        const taskitem = li.querySelector('.taskitem');
        li.removeChild(taskitem);
        const editItem = document.createElement('div');
        editItem.className = 'editItem';
        const editInput = document.createElement('input');
        editInput.type = 'text';
        editInput.className = 'editInput';
        editInput.value = taskitem.querySelector('div').textContent;
        const save = document.createElement('img');
        save.src = 'images/save.png';
        save.className = 'savebutton';
        save.addEventListener('click', function() {
            UpdatedTask(li);
        });
        editItem.appendChild(editInput);
        editItem.appendChild(save);

        li.appendChild(editItem);
        localStorage.setItem('list', list.innerHTML);

    }

    function UpdatedTask(li) {
        const editInput = li.querySelector('.editItem input');
        if (editInput.value === "") {
            list.removeChild(li);
        } else {
            const taskitem = document.createElement('div');
            taskitem.className = 'taskitem';
            const taskText = document.createElement('div');
            taskText.textContent = editInput.value;
            const taskActions = document.createElement('div');
            taskActions.className = 'taskActions';
            const editImg = document.createElement('img');
            editImg.className = 'change';
            editImg.src = 'images/edit.png';
            editImg.addEventListener('click', function() {
                UpdateTask(li);
            });
            const deleteImg = document.createElement('img');
            deleteImg.className = 'change';
            deleteImg.src = 'images/delete.png';
            deleteImg.addEventListener('click', function() {
                list.removeChild(li);
                localStorage.setItem('list', list.innerHTML);
            });
            taskActions.appendChild(editImg);
            taskActions.appendChild(deleteImg);
            taskitem.appendChild(taskText);
            taskitem.appendChild(taskActions);

            li.innerHTML = '';
            li.appendChild(taskitem);
        }
        localStorage.setItem('list', list.innerHTML);
    }

    document.addEventListener('DOMContentLoaded', function() {
        loadTaskList();
    });

    function loadTaskList() {
        const savedList = localStorage.getItem('list');
        if (savedList) {
            list.innerHTML = savedList;
            const editButtons = list.querySelectorAll('.change[src="images/edit.png"]');
            const deleteButtons = list.querySelectorAll('.change[src="images/delete.png"]');
            
            editButtons.forEach(function(editButton) {
                editButton.addEventListener('click', function() {
                    const li = editButton.closest('li');
                    UpdateTask(li);
                });
            });
    
            deleteButtons.forEach(function(deleteButton) {
                deleteButton.addEventListener('click', function() {
                    const li = deleteButton.closest('li');
                    list.removeChild(li);
                    localStorage.setItem('list', list.innerHTML);
                });
            });
        }
    }
    
