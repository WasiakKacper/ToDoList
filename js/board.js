//DDODAWANIE ELEMENTU DO LISTY ORAZ JEGO USUWANIE
//Tworzenie zmiennych kontenera, nazwy elemenu oraz przycisku
let container = document.getElementById("todo-wrapper");
let list_el_value = document.getElementById("item-name");
let add_btn = document.getElementById("add-btn");

add_btn.addEventListener('click', function addItem(){//Funkcja tworząca element

    if(list_el_value.value != ''){ //Jesli pole nie jest puste utwórz element
        
        //Tworzenie elementu
        let new_item = document.createElement('div');
        new_item.classList.add("list-item");
        new_item.setAttribute('draggable', 'true');
        new_item.innerHTML = `<img src="dodatkowe pliki/avatar.png" alt="Zdjęcie profilowe"/><p>${list_el_value.value}</p>`;
        container.appendChild(new_item);

        //Tworzenie przycisku uswania
        let delete_btn = document.createElement('button');
        delete_btn.classList.add('material-symbols-outlined')
        delete_btn.innerHTML = "close";
        new_item.appendChild(delete_btn);

        delete_btn.addEventListener('click', ()=>{ //Funkcja usuwająca element
            
            container.removeChild(new_item);//Usunięcie elementu

        });

    }

    else{ //Jesli pole jesy puste wyświetl kominukat
        let modal = document.getElementById('alert-modal');
        modal.innerHTML = '<p>Musisz nazwac elemnt żeby go utworzyć !</p><button id="confirm">Ok</button>';
        modal.classList.add('active');
        let close_btn = document.getElementById('confirm');

        close_btn.addEventListener('click', ()=>{

            modal.classList.remove('active');

        });

    }
});

//PRZENOSZENIE ELEMENTU MIĘDZY LISTAMI


