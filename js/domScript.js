const tower_column = document.querySelectorAll(".tower__column");
let countDom = 0;

for(let i = 0; i < 3; i++) {
    countDom++
    let tower_rod = document.createElement('div');
    tower_rod.setAttribute('id', 'rod' + countDom);
    tower_rod.setAttribute('class', 'tower__rod');

    let tower__text = document.createElement('p');
    tower__text.setAttribute('class', 'tower__text');

    if(countDom === 1) {
        tower__text.innerText = 'Start';
    }

    if(countDom === 2) {
        tower__text.innerText = 'Offset';
    }

    if(countDom === 3) {
        tower__text.innerText = 'End';
    }

    tower_column[i].appendChild(tower_rod);
    tower_column[i].appendChild(tower__text);
}

countDom = 0;

let rod1 = document.getElementById('rod1');

for(let i = 0; i < 4; i++) {
    countDom++;
    let disc = document.createElement('div');
    disc.setAttribute('id', 'disc' + countDom);
    disc.setAttribute('class', 'tower__disc'); 

    rod1.appendChild(disc);
}



