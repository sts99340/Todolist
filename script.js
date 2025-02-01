alert('Hello, World!');
const task = document.getElementById('task'),
    add = document.getElementById('add'),
    list = document.getElementById('list');

    task.addEventListener('keypress', function(e) {
        if(e.key === 'Enter') {
            addUpdateClick.click();
        }
    });

    function CreateTask() {
        if (task.value ==="") {
            alert("Please enter a task");
            task.focus();
        }

        let li = document.createElement('li');
        const taskitem = <div>$(task.value)</div>;

        li.innerHTML = taskitem;
        list.appendChild(li);
        task.value = '';
    }