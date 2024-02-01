import { random } from '../utils';

export default class GamePlay {
  constructor(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }
    this.container = container;
    this.speed = 1100;
    this.cellsList = [];
  }


  start () {
    this.innerHTML();

    this.newGameElement = this.container.querySelector('.btn');
    this.boardElement = document.querySelector('.board');

    for (let i = 0; i < 3 ** 2; i++) {
      const cellElement = document.createElement('div');
      cellElement.classList.add('cell');
      this.boardElement.appendChild(cellElement);
    }

    this.goblinRulete();
  }

  innerHTML () {
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
  }

  getRandomCell (cellObj = null) {
    this.cellsList = [...document.querySelectorAll('.cell')];
    if (!cellObj) {
        return random(this.cellsList);
    }
    const index = this.cellsList.indexOf(cellObj);
    this.cellsList.splice(index, 1);
    return random(this.cellsList);
  }

  goblinRulete () {
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
