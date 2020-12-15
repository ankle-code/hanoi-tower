const tower_column = document.getElementsByClassName("tower__column");

for(let i = 0; i < 3; i++){
    let tower_rod = document.createElement('div');
    tower_rod.setAttribute('id', 'rod' + i);
    tower_rod.setAttribute('class', 'tower__rod');

    tower_column.appendChild(tower_rod);
}

for(let i = 0; i < 4; i++){
    let tower_disc = document.createElement('div');
    tower_disc.setAttribute('id', 'disc' + i);
    tower_disc.setAttribute('class', 'tower__disc');

    let tower_rod = document.getElementById('rod0');
    tower_rod.appendChild(tower_disc);
}

