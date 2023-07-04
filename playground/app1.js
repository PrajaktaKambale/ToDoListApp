const template = (
  <div>
    <div className="title">
      <h2>ToDo App</h2>
      <p>what do you want to do today?</p>
    </div>

    <div className="add-todo">
      <div className="input-group mb-3">
        <textarea
          className="form-control"
          placeholder="enter your todo here"
          name="item"
          rows="3"
        ></textarea>

        <button className="btn btn-success" type="button" id="button-addon2">
          Add
        </button>
      </div>
    </div>
  </div>
);

ReactDOM.render(template, document.getElementById("app"));
