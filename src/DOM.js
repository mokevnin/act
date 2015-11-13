import Updater from "./Updater";

export default class {
    static render(component, element) {
        var updater = new Updater(element);
        component.updater = updater;
        updater.update(component.render());
    }
}
