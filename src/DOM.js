import Updater from "./Updater";

export default class {
    render(component, element) {
        component.updater = new Updater(element);
    }
}
