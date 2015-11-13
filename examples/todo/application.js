import Act from "act";

const jade = require("jade");

const template = require("raw!./todo.jade"); // fs.readFileSync("./todo.jade");
const templateFn = jade.compile(template);

class ToDo extends Act.Component {
  getInitialState() {
    return {currentText: "", tasks: this.ops.tasks || []};
  }

  handleTaskInput(e) {
    e.preventDefault();
    // console.log(e.target.value);
    this.setState({currentText: e.target.value});
  }

  handleMarkTaskAsCompleted(e) {
    e.preventDefault();
    const text = e.target.innerHTML;
    const tasks = _.without(this.state.tasks, _.trim(text));
    console.log(tasks);
    this.setState({tasks: tasks});
  }

  handleAddTask(e) {
    e.preventDefault();

    const tasks = this.state.tasks.slice();
    tasks.unshift(this.state.currentText);
    this.setState({currentText: "", tasks: tasks});
  }

  render() {
    console.log(this.state.currentText);
    const locals = {
      tasks: this.state.tasks,
      currentText: this.state.currentText
    };

    return templateFn(locals);
  }
};

window.component = new ToDo({tasks: ["write new super framework"]});

Act.DOM.render(
    component,
    document.getElementById("container")
);
