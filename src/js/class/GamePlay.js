export default class GamePlay {
    constructor (container) {
        this.boardSize = 4;
        this.speed = 1000;
    }

    bindToDom(container) {
        if (!(container instanceof HTMLElement)) {
            throw new Error('container is not HTMLElement!')
        }
        this.container = container;
    }

    createBoard(lvl) {
        this.checkBinding();

        this.button = document.createElement('button')
        this.button.classList.add('btn')

        this.header = document.createElement('header');
        this.header.classList.add('header');

        this.label = document.createElement('label');
        this.label.classList.add('label');

        this.label

        this.container.Child(label);
        this.continer.Chilt(button);

    }

    checkBinding() {
    if (this.container === null) {
      throw new Error('GamePlay not bind to DOM');
    }}
}
