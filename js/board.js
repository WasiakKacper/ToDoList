let itemName = document.querySelector("#name");
let addBtn = document.querySelector("#add");
let tab = [];

addBtn.addEventListener('click', ()=>{
    if(itemName.nodeValue != ''){
        let newItem = document.createElement('div');
        newItem.className = 'list-item';

        for(let i = 0; i < itemName.length; i++) {
            newItem.innerHTML = newItem.value;
        }
    }
})