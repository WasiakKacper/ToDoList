let tasks = [];
//Add task on click
const add_btn = document.getElementById('add-btn');
let item_value = document.getElementById('item-name');

add_btn.addEventListener('click', ()=>{
    const value = item_value.value;
    const container = document.getElementById('todo_wrapper');

    if(value != ''){

        const task = document.createElement('div');
        task.classList.add('list-item');
        task.setAttribute('draggable', 'true');
        task.innerHTML = value;

        task.addEventListener('dragstart', ()=>{

            task.classList.add('dragging');

        });

        task.addEventListener('dragend', ()=>{
            
            task.classList.remove('dragging');

        });

        //Function saveing tasks in local storage
        function save(){

            if(localStorage.getItem('task') !== null){

                const oldTasksArray = JSON.parse(localStorage.getItem('task'));

                tasks = oldTasksArray;

                tasks.push(value);
                let tasksInString = JSON.stringify(tasks);
                localStorage.setItem("task", tasksInString);
            }
            else{
                tasks.push(value);
                let tasksInString = JSON.stringify(tasks);
                localStorage.setItem("task", tasksInString);
            }
        }
        save();

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
                const index = tasks.indexOf(value);

                tasks.splice(index, 1);
            
                localStorage.setItem('task', JSON.stringify(tasks));
            }
            cutFromStorage();

        });

        item_value.value = "";
    }

    else{

        const modal = document.getElementById('alert-modal');
        modal.classList.add('active');
        const close_btn = document.getElementById('confirm');
        const main = document.querySelector('main');
        main.classList.add('active');

        close_btn.addEventListener('click', ()=>{

            modal.classList.remove('active');
            main.classList.remove('active');

        });

    }

});

//Dodanie na wciśnięcie przycisku enter
document.addEventListener('keypress', (e)=>{
    
    if(e.key === 'Enter'){

        e.preventDefault();

        const value = item_value.value;
        const container = document.getElementById('todo_wrapper');
    
        if(value != ''){
    
            const task = document.createElement('div');
            task.classList.add('list-item');
            task.setAttribute('draggable', 'true');
            task.innerHTML = value;
    
            task.addEventListener('dragstart', ()=>{   
                task.classList.add('dragging');   
            });
    
            task.addEventListener('dragend', ()=>{                
                task.classList.remove('dragging');
            });

            //Function saveing tasks in local storage
            function save(){

                if(localStorage.getItem('task') !== null){

                    tasks = JSON.parse(localStorage.getItem('task'));

                    tasks.push(value);
                    let tasksInString = JSON.stringify(tasks);
                    localStorage.setItem("task", tasksInString);
                }
                else{
                    tasks.push(value);
                    let tasksInString = JSON.stringify(tasks);
                    localStorage.setItem("task", tasksInString);
                }
            }
            save();
    
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
                    const index = tasks.indexOf(value);
    
                    tasks.splice(index, 1);
                
                    localStorage.setItem('task', JSON.stringify(tasks));
                }
                cutFromStorage();
            });
    
            item_value.value = "";
        }
        else{
    
            const modal = document.getElementById('alert-modal');
            modal.classList.add('active');
            const close_btn = document.getElementById('confirm');
    
            close_btn.addEventListener('click', ()=>{
                modal.classList.remove('active');
            });

            document.addEventListener('keypress', (e)=>{
                if(e.key === 'Enter'){
                modal.classList.remove('active');
                }    
            });
        }
    }
});

//Przenoszenie zadań między listami
const list_items = document.querySelectorAll('.list-item');

list_items.forEach(task => {

    task.addEventListener('dragstart', ()=> {
        task.classList.add('dragging');

        task.addEventListener('dragend', ()=>{
            task.classList.remove('dragging');
        });
    
    });

});

//Detecting is element in done or to do container
const doneContainer = document.getElementById('done_wrapper');

doneContainer.addEventListener('dragover', (e)=> {
    e.preventDefault();

    doneContainer.addEventListener('drop', ()=>{
        const curTask = document.querySelectorAll('.dragging');
        doneContainer.appendChild(curTask);
        curTask.classList.add('done');
    });
});

const todoContainer = document.getElementById('todo_wrapper');

todoContainer.addEventListener('dragover', (e)=> {
    e.preventDefault();

    todoContainer.addEventListener('drop', ()=>{
        const curTask = document.querySelector('.dragging');
        todoContainer.appendChild(curTask);
        curTask.classList.remove('done');
    });
});