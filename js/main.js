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


        task.addEventListener('dragend', ()=>{
            
            task.classList.remove('dragging');

        });

        //Function saveing tasks in local storage
        function save(){

            if(localStorage.getItem('task') !== null){

                tasks = JSON.parse(localStorage.getItem('task'));

                tasks.push(value);
                tasks = JSON.stringify(tasks);
                localStorage.setItem("task", tasks);
            }
            else{
                tasks.push(value);
                tasks = JSON.stringify(tasks);
                localStorage.setItem("task", tasks);
            }
        }
        save();

        container.appendChild(task);

        //delete button
            const del_btn = document.createElement('button');
            del_btn.classList.add('material-symbols-outlined');
            del_btn.innerHTML = 'close';
            task.appendChild(del_btn);

            del_btn.addEventListener('click', ()=>{
            container.removeChild(task);

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

//Add task on keypress
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
    
            //delete button
            const del_btn = document.createElement('button');
            del_btn.classList.add('material-symbols-outlined');
            del_btn.innerHTML = 'close';
            task.appendChild(del_btn);

            del_btn.addEventListener('click', ()=>{
                container.removeChild(task);

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

//Transfer tasks between boxes
const currentTask = document.querySelectorAll('.dragging');

//Add dragging class name to task
currentTask.addEventListener('dragstart', ()=>{
    console.log('start dragging');
    currentTask.addEventListener('dragend', ()=>{
        console.log('stop dragging')
    });
});


