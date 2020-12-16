// mover o discos

    render();

    const tower = document.getElementById('tower');
    const rodEnd = document.getElementById('rod3');
    const restartBtn = document.getElementById('restart');
    const countMessage = document.getElementById('count');
    const message = document.getElementById('message');

    let drag = null;
    let count = 1;
    let countMoviment = 0;
    let mouseMoviment = false;

    tower.addEventListener('click',function(e){
        const el = e.target;
        const originParentEl = e.path[1];
        message.innerText = '';
                
        if(mouseMoviment === true){
            tower.removeEventListener('mousemove',mouseMove);
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
                countMessage.innerText = countMoviment;
            }
            
            else if(destinyParentEl.lastElementChild != null && drag.clientWidth < destinyChildEl.clientWidth){
                countMoviment++;
                drop.appendChild(drag);
                drag.classList.remove('tower__disc--opacity')
                countMessage.innerText = countMoviment;
            }else{
                message.innerText = "Invalid moviment! :^("
                drag.classList.remove('tower__disc--opacity')
                drag = null;
            }
            count = 1;
        
            
        }

        if(rodEnd.childElementCount === 4){
            message.innerText = "Congratulations you finish the tower! :^)";
        }

        console.log(countMoviment)
    });

    restartBtn.addEventListener('click',function(){
        restart();
    })

function mouseMove(e) {
    drag.classList.add('tower__disc--move');
    drag.style.top = e.y + "px";
    drag.style.left = e.x + "px";
};

function restart() {
    const rods = document.querySelectorAll('.tower__rod');

    countMessage.innerText = '0';
    countMoviment = 0;
    message.innerText = '';

    for(let i = 0; i < rods.length; i++){
        rods[i].innerHTML = "";
    }
    console.log(rodEnd.childElementCount);

    for(let i = 1; i <= 4; i++) {
        let disc = document.createElement('div');
        disc.setAttribute('id', 'disc' + i);
        disc.setAttribute('class', 'tower__disc'); 

        rod1.appendChild(disc);
    }

}


