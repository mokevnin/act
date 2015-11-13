class Hello extends Component {
    render() {
        return `<div>Hello {this.ops.name}</div>`;
    }
};

ActDOM.render(
    new Hello({name: "Bob"}),
    document.getElementById("container")
);
