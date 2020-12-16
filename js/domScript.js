function render(){
    
    const tower_column = document.querySelectorAll(".tower__column");
    let countDOM = 0;

    for(let i = 0; i < 3; i++) {
        countDOM++
        let tower_rod = document.createElement('div');
        tower_rod.setAttribute('id', 'rod' + countDOM);
        tower_rod.setAttribute('class', 'tower__rod');

        let tower__text = document.createElement('p');
        tower__text.setAttribute('class', 'tower__text');

        if(countDOM === 1) {
            tower__text.innerText = 'Start';
        }

        if(countDOM === 2) {
            tower__text.innerText = 'Offset';
        }

        if(countDOM === 3) {
            tower__text.innerText = 'End';
        }

        tower_column[i].appendChild(tower_rod);
        tower_column[i].appendChild(tower__text);
    }

    countDOM = 0;

    let rod1 = document.getElementById('rod1');

    for(let i = 0; i < 4; i++) {
        countDOM++;
        let disc = document.createElement('div');
        disc.setAttribute('id', 'disc' + countDOM);
        disc.setAttribute('class', 'tower__disc'); 

        rod1.appendChild(disc);
    }
}

