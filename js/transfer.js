const done = document.getElementById('done_wrapper');

done.addEventListener('dragover', (e)=>{
    e.preventDefault();
    const currentTask = document.querySelectorAll('.dragging');
    done.addEventListener('drop', ()=>{
        done.appendChild(currentTask);
    });
});