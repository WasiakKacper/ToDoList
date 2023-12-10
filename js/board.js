let list_items = document.querySelectorAll('.list-item');


list_items.forEach((task) => {

    task.addEventListener('dragstart', dragStart);
    task.addEventListener('touchstart', dragStart);

    function dragStart(){

        task.classList.add('dragging');

        task.addEventListener('dragend', ()=>{
            task.classList.remove('dragging');

        });

        task.addEventListener('touchend', ()=>{
            task.classList.remove('dragging');

        });
    
    }

});

let items_wrappers = document.querySelectorAll('.list-items-wrapper');

items_wrappers.forEach((zone) =>{
    
    zone.addEventListener('dragover', (e)=> {
        e.preventDefault();

        const bottomTask = insertAboveTask(zone, e.clientY);
        const curTask = document.querySelector('.dragging');

        if(!bottomTask){
            zone.appendChild(curTask);
        }
        else{
            zone.insertBefore(curTask, bottomTask)
        }
        
    });

});

const insertAboveTask = (zone, mouseY) => {

    const els = zone.querySelectorAll('.task:not(.dragging)');

    let closestTask = null;
    let closestOffSet = Number.NEGATIVE_INFINITY;
    
    els.forEach((task)=>{

        const { top } = task.getBoundingClientRect();
        const offset = mouseY - top;

        if(offset > 0 && offset > closestOffSet){

            closestOffSet = offset;
            closestTask = task;

        }

    });
    return closestTask;
};



/* Dodanie na kliknięcie */
let item_value = document.getElementById('item-name');
let add_btn = document.getElementById('add-btn');

add_btn.addEventListener('click', (e)=>{
    
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

        container.appendChild(task);

        const del_btn = document.createElement('button');
        del_btn.classList.add('material-symbols-outlined');
        del_btn.innerHTML = 'close';
        task.appendChild(del_btn);

        del_btn.addEventListener('click', (e)=>{

            e.preventDefault();
            del_btn.parentElement.remove();

        });

        item_value.value = "";

    }

    else{

        let modal = document.getElementById('alert-modal');
        modal.classList.add('active');
        let close_btn = document.getElementById('confirm');

        close_btn.addEventListener('click', ()=>{

            modal.classList.remove('active');

        });

    }

});



/* Dodanie na wciśnięcie przycisku enter */
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
    
            container.appendChild(task);
    
            const del_btn = document.createElement('button');
            del_btn.classList.add('material-symbols-outlined');
            del_btn.innerHTML = 'close';
            task.appendChild(del_btn);
    
            del_btn.addEventListener('click', (e)=>{
    
                e.preventDefault();
                del_btn.parentElement.remove();
    
            });
    
            item_value.value = "";
    
        }
    
        else{
    
            let modal = document.getElementById('alert-modal');
            modal.classList.add('active');
            let close_btn = document.getElementById('confirm');
    
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