import Act from "act";

import _ from "lodash";
const jade = require("jade");

const template = require("raw!./todo.jade"); // fs.readFileSync("./todo.jade");
const templateFn = jade.compile(template);

class ToDo extends Act.Component {
  getInitialState() {
    return {currentText: "", tasks: this.ops.tasks || {}};
  }

  getTaskClass(bool) {
    return bool ? "task-completed" : "task-new";
  }

  handleAddTask(e) {
    e.preventDefault();

    var tasks = _.clone(this.state.tasks);
    const id = generateId();
    tasks[id] = {
      id: id,
      text: this.state.currentText,
      completed: false
    }
    this.setState({currentText: "", tasks: tasks});
  }

  render() {
    // console.log(this.state.tasks);
    const locals = {
      tasks: this.state.tasks,
      getTaskClass: this.getTaskClass,
      currentText: this.state.currentText
    };

    return templateFn(locals);
  }

  handleTaskInput(e) {
    e.preventDefault();

    this.setState({currentText: e.target.value});
  }

  handleRemoveTask(e) {
    e.preventDefault();
    // console.log(e.target.dataset);

    var tasks = _.clone(this.state.tasks);
    const id = parseInt(e.target.dataset.id);
    delete tasks[id];
    this.setState({tasks: tasks});
  }

  handleToggleCompleted(e) {
    e.preventDefault();
    console.log(e.target.dataset);

    var tasks = _.clone(this.state.tasks);
    const id = parseInt(e.target.dataset.id);
    tasks[id]["completed"] = !tasks[id]["completed"];
    this.setState({tasks: tasks});
  }
};

window.component = new ToDo({tasks: {1: {id: 1, completed: false, text: "write new super framework"}}});

Act.DOM.render(
    component,
    document.getElementById("container")
);

var startNumber = 1;

function generateId() {
  startNumber++;
  return startNumber;
}

