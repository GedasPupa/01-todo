class Todo {
    constructor(selector) {
        this.selector = selector;

        this.DOM = null;
        this.listDOM = null;
    }

    isValidSelector() {
        if (typeof this.selector !== "string" || this.selector === '') {
            console.error('blogas stringas ne stringas');
            return false;
        } else {
            return true;
        }
    }

    init() {
        if (!this.isValidSelector() || !this.findTargetElement()) {
            console.error('BLOGI REIKALAI...');
            return false;
        } else {
        this.render();
        }
    }

    findTargetElement() {
        this.DOM = document.querySelector(this.selector);
        if (!this.DOM) {
            console.error('Nera tokio selektoriaus!!!');
            return false;
        }
        return true;
    }

    render() {
        const HTML = `<div class="list"></div>`;
        this.DOM.insertAdjacentHTML('beforeend', HTML);

        this.listDOM = this.DOM.querySelector('.list');
    }

    createCard(message, color, date, completed) {
        let status = '';
        if (completed) {
            status =`<span class="badge completed">completed</span>`;
        } else {
            status = `<span class="badge not-completed">not completed</span>`;
        }
        const HTML = `<div class="card" style="border-color: ${color}">
                        ${status}
                        <p class="message">${message}</p>
                        <p class="deadline">${date}</p>
                    </div>`;

        this.listDOM.insertAdjacentHTML('afterbegin', HTML);
    }
}

export { Todo };