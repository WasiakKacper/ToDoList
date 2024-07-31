document.addEventListener('DOMContentLoaded', ()=>{
    const tasksArray = JSON.parse(localStorage.getItem('task'));

    tasksArray.forEach(taskValue => {
        const task = document.createElement('div');
        task.classList.add('list-item');
        task.setAttribute('draggable', 'true');
        task.innerHTML = taskValue;


        const container = document.getElementById('todo_wrapper');
        container.appendChild(task);

        const del_btn = document.createElement('button');
        del_btn.classList.add('material-symbols-outlined');
        del_btn.innerHTML = 'close';
        task.appendChild(del_btn);

        del_btn.addEventListener('click', (e)=>{
            e.preventDefault();
            del_btn.parentElement.remove();

            function cutFromStorage(){
                tasks = JSON.parse(localStorage.getItem('task'));
                const index = tasks.indexOf(taskValue);

                tasks.splice(index, 1);
            
                localStorage.setItem('task', JSON.stringify(tasks));
            }
            cutFromStorage();
                
        });
    });
});



