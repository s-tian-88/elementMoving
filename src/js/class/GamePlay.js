export default class GamePlay {
  constructor(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }
    this.container = container;
    this.boardSize = 4;
    this.speed = 1100;
    this.coun = 0;
    this.cellsList = [];
  }

  start() {
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
    // this.newGameElement.addEventListener('click', (event) => this.onNewGameClick(event));
    this.boardElement = document.querySelector('.board');

    for (let i = 0; i < 3 ** 2; i++) {
      const cellElement = document.createElement('div');
      cellElement.classList.add('cell');
      this.boardElement.appendChild(cellElement);
    }

    this.goblinRulete();
  }

  getRandomCell(cellObj = null) {
    this.cellsList = [...document.querySelectorAll('.cell')];
    if (!cellObj) {
      return this.cellsList[Math.floor(Math.random() * this.cellsList.length)];
    }
    const index = this.cellsList.indexOf(cellObj);
    this.cellsList.splice(index, 1);
    return this.cellsList[Math.floor(Math.random() * this.cellsList.length)];
  }

  goblinRulete() {
    let previous = this.getRandomCell();
    previous.classList.add('activated');
    setInterval(() => {
      const next = this.getRandomCell(previous);
      previous.classList.remove('activated');
      next.classList.add('activated');
      previous = next;
    }, this.speed);
  }
}
