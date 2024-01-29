export default class GamePlay {
    constructor(container) {
        if (!(container instanceof HTMLElement)) {
            throw new Error('container is not HTMLElement')
        }
        this.container = container;
        this.boardSize = 4;
        this.speed = 1100;
        this.coun = 0
    }

    start(lvl=3) {
        this.container.innerHTML = `
            <div class='title'>
                <span class='title-label'>Поймай гоблина</span>
            </div>
            <div class="controls">
                <button data-id="action-new" class="btn">Новая игра</button>
            </div>
            <div class="board-container">
                <div data-id="board" class="board"></div>
            </div>
            `;
        this.newGameElement = this.container.querySelector('.btn');
        this.newGameElement.addEventListener('click', event => this.onNewGameClick(event));
        this.boardElement = document.querySelector('.board');


        for (let i = 0; i < 2 ** 2; i++) {
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            cellElement.addEventListener('click', event => this.onCellClick(event));
            this.boardElement.appendChild(cellElement);
        }

        this.goblinRulete();


        
    }

    getRandomCell(cellObj=null) {
        const cellsList = [...document.querySelectorAll('.cell')];
        if (!cellObj) {
            return this.getRandomChoice(cellsList)
        } else {
            let index = cellsList.indexOf(cellObj);
            cellsList.splice(index, 1);
            return this.getRandomChoice(cellsList)
        }

    }

    goblinRulete(lvl) {
        let previous = this.getRandomCell();
        previous.classList.add('activated');
        setInterval(() => {
            console.log('setInterrval')
            let next = this.getRandomCell(previous);
            previous.classList.remove('activated');
            next.classList.add('activated');
            previous = next

        }, this.speed);


    }

    onNewGameClick(event) {
        event.preventDefault();
        pass;
    }

    onCellClick(event) {
        event.preventDefault();
        pass;
    }

    getRandomChoice(array) {
        return array[Math.floor((Math.random()*array.length))];
    }
}
