export default class GamePlay {
    constructor(container) {
        if (!(container instanceof HTMLElement)) {
            throw new Error('container is not HTMLElement')
        }
        this.container = container;
        this.boardSize = 4;
        this.speed = 1000;
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


        for (let i = 0; i < lvl ** 2; i++) {
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            cellElement.addEventListener('click', event => this.onCellClick(event));
            this.boardElement.appendChild(cellElement);
        }

        
    }

    onNewGameClick(event) {
        event.preventDefault();
        console.log('button click')
    }
    
    onCellClick(event) {
        event.preventDefault();
        let currentElement = event.currentTarget;
    }
}
