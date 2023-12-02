
        let list_items = document.querySelectorAll('.list-item');

        list_items.forEach((task) => {
            
            task.addEventListener('dragstart', ()=>{
                task.classList.add('dragging');
    
            });
    
            task.addEventListener('dragend', ()=>{
                task.classList.remove('dragging');
    
            });



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

                const { top } = task.getBoudnigClientRect();
                const offset = mouseY - top;

                if(offset < 0 && offset > closestOffSet){

                    closestOffSet = offset;
                    closestTask = task;

                }

            });
            return closestTask;
        };