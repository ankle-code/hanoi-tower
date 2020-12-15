// mover o discos

    const rod = document.querySelectorAll('.tower__rod');
    const disc = document.querySelectorAll('.tower__disc');
    const firstDisc = disc[disc.length - 1];
    console.log(firstDisc);
    const tower = document.getElementById('tower');

    tower.addEventListener('click', function(e){
       let selectedDisc = document.getElementById(e.target.id);
       console.log(selectedDisc);

       tower.addEventListener('click', function(e){
           let selectedRod = document.getElementById(e.target.id);

           selectedRod.appendChild(selectedDisc);
           return;

       });
       return

    });

    





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




