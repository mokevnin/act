### Flow

    make install
    make development // open localhost:8080/todo

### Examples

    class Hello extends Act.Component {
        render() {
            return `<div>Hello {this.ops.name}</div>`;
        }
    };

    Act.DOM.render(
        new Hello({name: "Bob"}),
        document.getElementById("container")
    );
