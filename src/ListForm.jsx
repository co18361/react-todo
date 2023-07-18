/* eslint-disable react/prop-types */
import { useState } from "react";

export function ListForm({ enter }) {
  const [item, setItem] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (item === "") return;
    enter(item);
    setItem(" ");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label className="form-row">New Item</label>
        <input
          type="text"
          className="form-row"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
      </div>
      <div className="d-inline-flex p-2">
        <button>Enter</button>
      </div>
    </form>
  );
}
