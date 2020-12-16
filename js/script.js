// mover o discos

    const tower = document.getElementById('tower');
    let drag = null;

    tower.addEventListener('click',function(e){

        
        if(e.target.classList[0] === 'tower__disc'){
            drag = document.getElementById(e.target.id);
            dragType = e.target.classList[0];
            e.target.classList.add('tower__disc--opacity')
            console.log('bbb')
        }
        
        if(e.target.classList[0] === 'tower__rod'){
            let drop = document.getElementById(e.target.id);
            drop.appendChild(drag);
            drag.classList.remove('tower__disc--opacity')
        }

    });






/*const disc1 = document.getElementById('disc1');
const disc2 = document.getElementById('disc2');
const disc3 = document.getElementById('disc3');
const disc4 = document.getElementById('disc4');

const rod1 = document.getElementById('rod1');
const rod2 = document.getElementById('rod2');
const rod3 = document.getElementById('rod3');

disc1.addEventListener('click',clickDrag)

function clickDrag(e){
    const elem = document.getElementById(e.target.id);
}

function clickDrop(elem){
    rod1.addEventListener('click',function(){
        rod1.appendChild(elem)
    })

    rod2.addEventListener('click',function(){
        rod2.appendChild(elem)
    })

    rod3.addEventListener('click',function(){
        rod3.appendChild(elem)
    })
}*/






















    /*const rod = document.querySelectorAll('.tower__rod');
    const tower = document.getElementById('tower');
    let count = 0;

    tower.addEventListener('click',clickSelect);

    function clickSelect(e){
        count++;
        console.log(count);
        
        let selected = document.getElementById(e.target.id);
        if(count === 1 && selected.classList[0] === 'tower__disc'){
            selected.classList.add('tower__disc--opacity');
        }
        else{
        }
        console.log(selected);
        tower.addEventListener('click',function(e){
            if(count === 2){
                let element = e.target;
    
                if(element === rod[0]){
                    rod[0].appendChild(selected);
                    selected.classList.remove('tower__disc--opacity');
                }
                
                if(element === rod[1]){
                    rod[1].appendChild(selected);
                    selected.classList.remove('tower__disc--opacity');
                    console.log(selected)
                    console.log('aaaaaaaa')
                }document.getElementById

                if(element === rod[2]){
                    rod[2].appendChild(selected);
                    selected.classList.remove('tower__disc--opacity');
                }
                count = 0;

            }
        })
        
    };*/



   
   
   
   
    /*function clickSelect(e){
            const select = document.getElementById(e.target.id);
            console.log(select);
            tower.addEventListener('click',clickDrop);
            function clickDrop(e){
                const drop = document.getElementById(e.target.id);
                drop.appendChild(select);
                tower.removeEventListener('click',clickDrop);
                tower.addEventListener('click',clickSelect)
            };
            removeClick();
    }  

    function removeClick() {
        tower.removeEventListener('click',clickSelect);
        console.log('aaa');
        tower.addEventListener('click',clickSelect);
    };*/


  
  
  
  
    /*  tower.addEventListener('click', function(e){
       let selectedDisc = document.getElementById(e.target.id);
       console.log(selectedDisc);

       tower.addEventListener('click', function(e){
           let selectedRod = document.getElementById(e.target.id);

           if(selectedRod)

           selectedRod.appendChild(selectedDisc);
           return;
        
       });
       return

    });*/

    





/*moveFirstDisc();

function originRod(){

};

function moveFirstDisc() {
    firstDisc.addEventListener('click',function(){
        firstDisc.classList.add('tower__disc--opacity');
        destinyRod(firstDisc);
    });
};

function destinyRod(disc) {
    for(let i = 0; i < 3; i++){
        rod[i].addEventListener('click',function(e){
            e.target.;
        });
    };
}*/




