// mover o discos

    const rod = document.querySelectorAll('.tower__rod');
    const disc = document.querySelectorAll('.tower__disc');

teste();

function teste() {
    for(let i = 0; i < 3; i++) {
        rod[i].addEventListener('click',function(){
            const firstDisc = rod[i].lastElementChild;
            firstDisc.classList.add('tower__disc--opacity');
            console.log(firstDisc);
            destiny(firstDisc);
        });
    }
}

       
function destiny(disc){ 
    for(let i = 0; i < 3; i++) {
        rod[i].addEventListener('click',function(){
            disc.classList.remove('tower__disc--opacity');
            rod[i].appendChild(disc);
        });
    } 
    
};


