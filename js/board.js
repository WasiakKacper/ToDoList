/*DDODAWANIE ELEMENTU DO LISTY ORAZ JEGO USUWANIE*/
//Tworzenie zmiennych kontenera, nazwy elemenu oraz przycisku
let container = document.getElementById("todo_wrapper");
let list_el_value = document.getElementById("item-name");
let add_btn = document.getElementById("add-btn");

add_btn.addEventListener('click', function addItem(){//Funkcja tworząca element

    if(list_el_value.value != ''){ //Jesli pole nie jest puste utwórz element
        
        //Tworzenie elementu
        let new_item = document.createElement('div');
        new_item.classList.add("list-item");
        new_item.setAttribute('draggable', 'true');
        new_item.innerHTML = `<p>${list_el_value.value}</p>`;
        container.appendChild(new_item);
        list_el_value.value = '';

        //Tworzenie przycisku uswania
        let delete_btn = document.createElement('button');
        delete_btn.classList.add('material-symbols-outlined')
        delete_btn.innerHTML = "close";
        new_item.appendChild(delete_btn);

        delete_btn.addEventListener('click', ()=>{ //Funkcja usuwająca element
            
            container.removeChild(new_item);//Usunięcie elementu

        });

        /* PRZENOSZENIE ELEMENTÓW MIĘDZY LISTAMI */
        let list = document.getElementsByClassName('list-item');
        let todo_box = document.getElementById('to-do');
        let in_progress_box = document.getElementById('in-progress');
        let done_box = document.getElementById('done')

        for(item of list){

            item.addEventListener('dragstart', function(e){

                let dragging_elem = e.target;

                /* BOX NR 1 */
                todo_box.addEventListener('dragover', function(e){

                    e.preventDefault();

                });

                todo_box.addEventListener('drop', function(e){
                    let todo_wrapper = document.getElementById('todo_wrapper');
                    todo_wrapper.appendChild(dragging_elem);
                    dragging_elem = null;

                });

                /* BOX NR 2 */
                in_progress_box.addEventListener('dragover', function(e){

                    e.preventDefault();

                });

                in_progress_box.addEventListener('drop', function(e){
                    let in_progress_wrapper = document.getElementById('in_progres_wrapper');
                    in_progress_wrapper.appendChild(dragging_elem);
                    dragging_elem = null;

                });

                /* BOX NR 3 */
                done_box.addEventListener('dragover', function(e){
                    e.preventDefault();
                });

                done_box.addEventListener('drop', function(e){
                    let done_wrapper = document.getElementById('done_wrapper');
                    done_wrapper.appendChild(dragging_elem);
                    dragging_elem = null;

                });

            });

        }

    }

    else{ //Jesli pole jesy puste wyświetl kominukat
        let modal = document.getElementById('alert-modal');
        modal.classList.add('active');
        let close_btn = document.getElementById('confirm');

        close_btn.addEventListener('click', ()=>{

            modal.classList.remove('active');

        });

    }
});