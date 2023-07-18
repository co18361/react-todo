/* eslint-disable react/prop-types */
import { Item } from "./Item";

export function ItemList({ list,deleteItem,toggleList }) {
  return (
    <ul className="list">
      {list.length === 0 && "Empty List"}
      {list.map((ele) => {
        return <Item key={ele.id} {...ele} deleteItem={deleteItem} toggle={toggleList}/>;
      })}
    </ul>
  );
}
