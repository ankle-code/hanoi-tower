const tower_column = document.querySelectorAll(".tower__column");
let count = 0;

for(let i = 0; i < 3; i++) {
    count++
    let tower_rod = document.createElement('div');
    tower_rod.setAttribute('id', 'rod' + count);
    tower_rod.setAttribute('class', 'tower__rod');

    let tower__text = document.createElement('p');
    tower__text.setAttribute('class', 'tower__text');

    if(count === 1) {
        tower__text.innerText = 'Start';
    }

    if(count === 2) {
        tower__text.innerText = 'Offset';
    }

    if(count === 3) {
        tower__text.innerText = 'End';
    }

    tower_column[i].appendChild(tower_rod);
    tower_column[i].appendChild(tower__text);
}

count = 0;

let rod1 = document.getElementById('rod1');

for(let i = 0; i < 4; i++) {
    count++;
    let disc = document.createElement('div');
    disc.setAttribute('id', 'disc' + count);
    disc.setAttribute('class', 'tower__disc'); 

    rod1.appendChild(disc);
}

// for(let i = 0; i < 4; i++){
//     let disc = document.createElement('div');
//     disc.setAttribute('id', 'disc' + i);
//     disc.setAttribute('class', 'tower__disc');

//     let tower_rod = document.getElementById('rod0');
//     tower_rod.appendChild(disc);
// }



