import { ItemList } from "./ItemList";
import { ListForm } from "./ListForm";
import "./style.css";
import { useEffect, useState } from "react";

export default function App() {
  const [list, setList] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(list));
  }, [list]);
  function addItem(title) {
    setList((currentList) => {
      return [
        ...currentList,
        {
          id: crypto.randomUUID(),
          title,
          completed: false,
        },
      ];
    });
  }

  function toggleList(id, completed) {
    setList((current) => {
      return current.map((item) => {
        if (item.id == id) {
          return { ...item, completed };
        }
        return item;
      });
    });
  }

  function deleteItem(id) {
    setList((current) => {
      return current.filter((item) => item.id !== id);
    });
  }

  return (
    <>
      <ListForm enter={addItem} />
      <div>
        <h1 className="header">List Items</h1>
        <ItemList list={list} deleteItem={deleteItem} toggleList={toggleList} />
      </div>
    </>
  );
}
