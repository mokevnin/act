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
        this.state = _.merge(this.state, newState, function(a, b) {
            if (_.isArray(a)) {
                return b;
            }
        });

        this.updater.update(this.render());
    }
}

