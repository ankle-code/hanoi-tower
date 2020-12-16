// mover o discos

//reset btn
//span mensagem de vitoria


    const tower = document.getElementById('tower');
    const rodEnd = document.getElementById('rodEnd');
    let drag = null;
    let count = 1;
    let countMoviment = 0;
    let mouseMoviment = false;

    tower.addEventListener('click',function(e){
        const el = e.target;
        const originParentEl = e.path[1];
                
        if(mouseMoviment === true){
            tower.removeEventListener('mousemove',mouseMove);
            console.log('aaaaa')
            mouseMoviment === false;
            
        }
        
        if(el.classList[0] === 'tower__disc' && el === originParentEl.lastElementChild && count === 1){
            drag = document.getElementById(el.id);
            dragType = e.target.classList[0];
            el.classList.add('tower__disc--opacity')
            mouseMoviment = true;
            tower.addEventListener('mousemove',mouseMove)
            count++;
        }


        
        if(el.classList[0] === 'tower__rod' && count === 2){
            const destinyParentEl = e.target;
            const destinyChildEl = e.target.lastElementChild;
            let drop = document.getElementById(el.id);
            drag.classList.remove('tower__disc--move');
            
            

            if(destinyParentEl.lastElementChild === null){
                countMoviment++;
                drop.appendChild(drag);
                drag.classList.remove('tower__disc--opacity')
            }
            
            else if(destinyParentEl.lastElementChild != null && drag.clientWidth < destinyChildEl.clientWidth){
                countMoviment++;
                drop.appendChild(drag);
                drag.classList.remove('tower__disc--opacity')
            }else{
                drag.classList.remove('tower__disc--opacity')
                drag = null;
            }
            count = 1;
        
            
        }

        if(rodEnd.childElementCount === 4){
            alert('win')
        }

        console.log(countMoviment)
    });

function mouseMove(e) {
    drag.classList.add('tower__disc--move');
    drag.style.top = e.y + "px";
    drag.style.left = e.x + "px";
};


