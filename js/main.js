/* Przenoszenie zadań między listami */
const list_items = document.querySelectorAll('.list-item');


list_items.forEach((task) => {

    task.addEventListener('dragstart', ()=> {

        task.classList.add('dragging');

        task.addEventListener('dragend', ()=>{
            task.classList.remove('dragging');

        });
    
    });

});

const items_wrappers = document.querySelectorAll('.list-items-wrapper');

items_wrappers.forEach((zone) =>{
    
    zone.addEventListener('dragover', (e)=> {
        e.preventDefault();

        zone.addEventListener('drop', (e)=>{
            e.preventDefault();

            const curTask = document.querySelector('.dragging');
            zone.appendChild(curTask);
        });
    });

});

/* Dodanie na kliknięcie */
let item_value = document.getElementById('item-name');
const add_btn = document.getElementById('add-btn');

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
