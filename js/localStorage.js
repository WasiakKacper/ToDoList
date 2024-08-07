let tasksArray = [];

document.addEventListener('DOMContentLoaded', ()=>{
    if(localStorage.getItem('task') !== null){
        tasksArray = JSON.parse(localStorage.getItem('task'));

        tasksArray.forEach(taskValue => {
            const task = document.createElement('div');
            task.classList.add('list-item');
            task.setAttribute('draggable', 'true');
            task.innerHTML = taskValue;

            task.addEventListener('dragstart', ()=>{
                task.classList.add('dragging');

                task.addEventListener('dragend', ()=>{
                    task.classList.remove('dragging');
                });
                
                function transferBetween(){
                    const doneBox = document.querySelector('#done_wrapper');
                    const todoBox = document.querySelector('#todo_wrapper');
    
                    doneBox.addEventListener('dragover', (e)=>{
                        e.preventDefault();
    
                        const currentTask = document.querySelectorAll('.dragging');
                        doneBox.addEventListener('drop', ()=>{
                            doneBox.appendChild(currentTask);
                        });
                    });

                    todoBox.addEventListener('dragover', (e)=>{
                        e.preventDefault();

                        const currentTask = document.querySelectorAll('.dragging');
                        todoBox.addEventListener('drop', ()=>{
                            todoBox.appendChild(currentTask);
                        });
                    })
                }
                transferBetween();
            });

    
    
            const container = document.getElementById('todo_wrapper');
            container.appendChild(task);
    
            const del_btn = document.createElement('button');
            del_btn.classList.add('material-symbols-outlined');
            del_btn.innerHTML = 'close';
            task.appendChild(del_btn);

            del_btn.onclick = function(e){
                e.preventDefault();
                container.removeChild(task);
            
                function cutFromStorage(){
                    tasksArray = JSON.parse(localStorage.getItem('task'));
                    const index = tasksArray.indexOf(taskValue);
            
                    tasksArray.splice(index, 1);
                
                    localStorage.setItem('task', JSON.stringify(tasksArray));
                }
                cutFromStorage();
            }

        });
    }
});




