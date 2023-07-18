/* eslint-disable react/prop-types */
export function Item({ id, completed, title, deleteItem, toggle }) {
  return (
    <li key={id}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggle(id, e.target.checked)}
        />
        {title}
      </label>
      <button
        className="btn btn-danger"
          onClick={() => deleteItem(id)}
      >
        Delete
      </button>
    </li>
  );
}
