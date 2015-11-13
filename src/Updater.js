export default class {
    constructor(element) {
        this.element = element;
    }

    update(domString) {
        this.element.innerHTML = domString
    }
}
