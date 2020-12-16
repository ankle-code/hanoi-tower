// mover o discos

    const rod = document.querySelectorAll('.tower__rod');
    const disc = document.querySelectorAll('.tower__disc');

    originRod();

function originRod() {
    
        rod[0].addEventListener('click',function(){
        const firstDisc = rod[0].lastElementChild;
        firstDisc.classList.add('tower__disc--opacity');
        console.log(firstDisc);
        destiny(firstDisc);
        });

        rod[1].addEventListener('click',function(){
        const firstDisc = rod[1].lastElementChild;
        firstDisc.classList.add('tower__disc--opacity');
        console.log(firstDisc);
        destiny(firstDisc);
        });

        rod[2].addEventListener('click',function(){
        const firstDisc = rod[2].lastElementChild;
        firstDisc.classList.add('tower__disc--opacity');
        console.log(firstDisc);
        destiny(firstDisc);
        });
        
};

function destiny(disc){            
    
    rod[0].addEventListener('click',function(){
        disc.classList.remove('tower__disc--opacity');
        rod[0].appendChild(disc);
        originRod();
    });

    rod[1].addEventListener('click',function(){
        disc.classList.remove('tower__disc--opacity');
        rod[1].appendChild(disc);
        originRod();
    });

    rod[2].addEventListener('click',function(){
        disc.classList.remove('tower__disc--opacity');
        rod[2].appendChild(disc);
        originRod();
    });

};
