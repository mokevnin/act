export default class {
    constructor(element) {
        this.element = element;
    }

    update(domString) {
        var active = document.activeElement
        this.element.innerHTML = domString;

        if (active && active.id) {
            var newActive = document.getElementById(active.id);
            if (newActive.setSelectionRange) {
                const strLength = newActive.value.length;
                newActive.setSelectionRange(strLength, strLength);
            }
            newActive.focus();
        }
    }
}
