const done = document.getElementById('done_wrapper');

done.addEventListener('dragover', (e)=>{
    e.preventDefault();

    done.addEventListener('drop', ()=>{
        const currentTask = document.querySelector('.dragging');
        done.appendChild(currentTask);
        currentTask.classList.add('done');

        let tasks = [];

/*         function cutTask(){
            tasks = JSON.parse(localStorage.getItem('task'));
            const task = document.querySelector('.done');
            task.
        }
        cutTask(); */
    });
});



const todo = document.getElementById('todo_wrapper');

todo.addEventListener('dragover', (e)=>{
    e.preventDefault();

    todo.addEventListener('drop', ()=>{
        const currentTask = document.querySelector('.dragging');
        todo.appendChild(currentTask);
        currentTask.classList.remove('done');
    });
});
