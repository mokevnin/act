export default class {
    constructor(ops, updater) {
        this.ops = ops;
        this.updater = updater;
    }

    setState(state) {
        this.state = state;
        this.updater.update(this.render());
    }
}

