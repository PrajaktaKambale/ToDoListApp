let items = [];

const markItemComplete = (itemToRemove) => {
  //   //remove the item from items array

  //method1
  //   for (let index = 0; index < items.length; index++) {
  //     const item = items[index];
  //     if (item.id == itemToRemove.id) {
  //       //found the item to be deleted
  //       items.splice(index, 1);
  //       break;
  //     }
  //   }

  //method 2
  items = items.filter((item) => item.id != itemToRemove.id);

  render();
};

const addItem = (e) => {
  const title = e.target.elements.itemtext.value;
  items.push({
    id: items.length + 1,
    status: "open",
    title,
  });

  //clear the input
  e.target.elements.itemtext.value = "";
  e.preventDefault();

  render();
};

const render = () => {
  const template = (
    <div>
      <div className="title">
        <h2>ToDo App</h2>
        <p>what do you want to do today?</p>
      </div>
      <div className="add-todo">
        <form onSubmit={addItem}>
          <div className="input-group mb-3">
            <textarea
              className="form-control"
              placeholder="enter your todo here"
              name="itemtext"
              rows="3"
            ></textarea>

            <button
              className="btn btn-success"
              type="submit"
              id="button-addon2"
            >
              Add
            </button>
          </div>
        </form>
      </div>

      {items.length > 0 && (
        <div className="items-list">
          {items.map((item) => {
            return (
              <div className="input-group mb-3">
                <input
                  readOnly
                  value={item.title}
                  className="form-control"
                  type="text"
                  rows="3"
                />

                <button
                  onClick={() => {
                    markItemComplete(item);
                  }}
                  className="btn btn-danger"
                  type="button"
                  id="button-addon2"
                >
                  Complete
                </button>
              </div>
            );
          })}
        </div>
      )}
      <div className="footer">
        <p>copyrighted to praj</p>
      </div>
    </div>
  );

  ReactDOM.render(template, document.getElementById("app"));
};
render();
