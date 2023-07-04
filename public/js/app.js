"use strict";

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "div",
    { className: "title" },
    React.createElement(
      "h2",
      null,
      "ToDo App"
    ),
    React.createElement(
      "p",
      null,
      "what do you want to do today?"
    )
  ),
  React.createElement(
    "div",
    { className: "add-todo" },
    React.createElement(
      "div",
      { className: "input-group mb-3" },
      React.createElement("textarea", {
        className: "form-control",
        placeholder: "enter your todo here",
        name: "item",
        rows: "3"
      }),
      React.createElement(
        "button",
        { className: "btn btn-success", type: "button", id: "button-addon2" },
        "Add"
      )
    )
  )
);

ReactDOM.render(template, document.getElementById("app"));
