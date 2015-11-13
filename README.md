### Flow

    make install
    make development // open localhost:8080/todo

### Examples

    class Hello extends Component {
        render() {
            return `<div>Hello {this.ops.name}</div>`;
        }
    };

    ActDOM.render(
        new Hello({name: "Bob"}),
        document.getElementById("container")
    );
