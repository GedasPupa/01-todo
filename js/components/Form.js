class Form {
    constructor(selector) {
        this.selector = selector;
        this.DOM = null;
        this.messageDOM = null;
        this.colorDOM = null;
        this.dateDOM = null;
        this.completedDOM = null;
        this.saveButtonDOM = null;

    }

    init() {
        if (!this.isValidSelector() || !this.findDOM()) {
            console.error('BLOGI REIKALAI...');
            return false;
        } else {
        this.render();
        this.addEvents();
        }
    }

    isValidSelector() {
        if (typeof this.selector !== "string" || this.selector === '') {
            console.error('blogas stringas ne stringas');
            return false;
        } else {
            return true;
        }
    }

    findDOM() {
        this.DOM = document.querySelector(this.selector);
        if (!this.DOM) {
            console.error('Nera tokio selektoriaus!!!');
            return false;
        }
        return true;
    }

    render() {
        const HTML = `<form action="" class="form">
                            <div class="form-row">
                                <textarea class="text" placeholder="Message..."></textarea>
                            </div>
                            <div class="form-row">
                                <input type="color" class="color" value="#cccccc">
                            </div>
                            <div class="form-row">
                                <input type="date" class="date">
                            </div>
                            <div class="form-row">
                                <input type="checkbox" class="checkbox">
                                <span>Task is completed?</span>
                            </div>
                            <div class="form-row">
                                <button type="submit" class="save">Save</button>
                                <button type="reset" class="reset">Reset</button>
                            </div>
                        </form>`;
        this.DOM.insertAdjacentHTML('afterbegin', HTML);
        this.messageDOM = this.DOM.querySelector('textarea');
        this.saveButtonDOM = this.DOM.querySelector('button.save');
        this.colorDOM = this.DOM.querySelector('input[type="color"]');
        this.dateDOM = this.DOM.querySelector('input[type=date');
        this.completedDOM = this.DOM.querySelector('input[type=checkbox]');
    }

    addEvents() {
        this.saveButtonDOM.addEventListener('click', (event) => {
            event.preventDefault();
            console.log('click click ..... click');
            const message = this.messageDOM.value;
            const date = this.dateDOM.value;
            const color = this.colorDOM.value;
            const completed = this.completedDOM.checked;

            if (this.isValidTask(message, color, date, completed)) {
                console.log('Task is valid');
            } else {
                console.log('Task is NOT valid');
            }
        })
    }

    isValidTask(message, color, date, completed) {
        if (!this.isValidMessage(message) ||
            !this.isValidColor(color) ||
            !this.isValidDate(date) ||
            !this.isValidCompleted(completed)) {
            return false;
        }
        return true;
    }

    isValidMessage(message) {
        if (message.length >= 1) {
            return true;
        } else {
            console.log("Too short message!!!");
            return false;
        }
    }

    isValidColor(color) {
        return true;
    }

    isValidDate(date) {
        return true;
    }

    isValidCompleted(completed) {
        return true;
    }
}

export { Form };