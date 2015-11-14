import _ from "lodash";

export default class {
    getInitialState() {
        return null;
    }

    constructor(ops, updater) {
        this.ops = ops;
        this.state = this.getInitialState();
        this.updater = updater;
    }

    setState(newState) {
        _.forIn(newState, function(value, key) {
            this.state[key] = value;
        }, this);

        this.updater.update(this.render());
    }
}

