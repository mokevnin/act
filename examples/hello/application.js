import Act from "act";

class Hello extends Act.Component {
    render() {
        return `<div>Hello ${this.ops.name}</div>`;
    }
};

Act.DOM.render(
    new Hello({name: "Bob"}),
    document.getElementById("container")
);
