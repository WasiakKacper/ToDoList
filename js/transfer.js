const done = document.getElementById('done_wrapper');

done.addEventListener('dragover', (e)=>{
    e.preventDefault();
});

done.addEventListener('drop', (e)=>{
    e.preventDefault();

    const currentTask = document.querySelector('.dragging');
    done.appendChild(currentTask);
    currentTask.classList.add('done');

    //Cut form sotrage
    let tasks = [];

    function cutFromStorage(){
        tasks = JSON.parse(localStorage.getItem('task'));

        let value = document.querySelector('.done');
        
        tasks.shift(value);
        localStorage.setItem('task', JSON.stringify(tasks));
    }
    cutFromStorage();

});



const todo = document.getElementById('todo_wrapper');

todo.addEventListener('dragover', (e)=>{
    e.preventDefault();
});

todo.addEventListener('drop', ()=>{
    const currentTask = document.querySelector('.dragging');
    todo.appendChild(currentTask);
    currentTask.classList.remove('done');

//Function saveing tasks in local storage
    let tasks = [];

    function saveInStorage(){
        if(localStorage.getItem('task') !== null){
            tasks = JSON.parse(localStorage.getItem('task'));

            const value = currentTask.value;

            tasks.push(value);
            console.log(tasks);
        }
    }
    saveInStorage();
});
