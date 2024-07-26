let tasks = [];

//Load task's from storage
document.addEventListener('DOMContentLoaded', ()=>{
    const container = document.getElementById('todo_wrapper');

    if(localStorage.getItem("task") !== null){
        let dataFromStorage = JSON.parse(localStorage.getItem("task"));

        tasks = Object.keys(dataFromStorage).map((key)=>{
            return dataFromStorage[key];
        });
    }

    tasks.forEach(tasks => {
        if(tasks != " "){
            const task = document.createElement('div');
            task.classList.add('list-item');
            task.setAttribute('draggable', 'true');
            task.innerHTML = tasks;

            const del_btn = document.createElement('button');
            del_btn.classList.add('material-symbols-outlined');
            del_btn.innerHTML = 'close';
            task.appendChild(del_btn);

            del_btn.addEventListener('click', (e)=>{

                e.preventDefault();
                del_btn.parentElement.remove();
                
            });
        
            container.appendChild(task);
        }
    });
});