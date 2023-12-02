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