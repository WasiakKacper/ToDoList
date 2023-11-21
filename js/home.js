//dodawanie nowej listy
let openBtn = document.getElementById('add');
let closeBtn = document.getElementById('close');
let addProject = document.getElementById('buttons-wrapper');
let home = document.getElementById('new-file');

openBtn.addEventListener('click', function(){
    addProject.classList.add("unactive");
    home.classList.add("active");
})

closeBtn.addEventListener('click', function(){
    addProject.classList.remove("unactive");
    home.classList.remove("active");
})

//otwieranie biblioteki