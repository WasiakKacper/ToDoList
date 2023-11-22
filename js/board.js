//Dodanie nowego elementu do listy

let container = document.getElementById("todo-wrapper");
let itemName = document.getElementById("item-name");
let confirmBtn = document.getElementById("add-btn");
let todoTab = [];

    confirmBtn.addEventListener('click', ()=>{

    if(itemName.value != ''){

        todoTab.push(itemName.value);

        var newItem = document.createElement('div');
        newItem.setAttribute('draggable', 'true');
        newItem.className = "list-item";

        for(let i = 0; i < todoTab.length; i++){

            newItem.innerHTML = `<img src="dodatkowe pliki/avatar.png" alt="zdjęcie profilowe"/><p>${itemName.value}</p><button class="material-symbols-outlined" id="delete" onclick="removeItem()">close</button>`;

            container.appendChild(newItem);

        }

    }

    //usunięcie elementu listy
    if(todoTab.length > 0){
        let item = document.querySelectorAll(".list-item");

            for(let j = 0; j < item.length; j++){


                function removeItem(){
                    container.removeChild(item[j]);
                };
            }
    }

});