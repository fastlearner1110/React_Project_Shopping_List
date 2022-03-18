import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);
  let [arr, setArr] = useState([]);

  function addItem(inputText, quantity, price) {
    setArr((prevItems) => {
      return [
        ...prevItems,
        { item: inputText, quantity: quantity, price: price + "/-" }
      ];
    });
  }

  function deleteItem(id) {
    setArr((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>Shopping List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <div style={{ display: "flex" }}>
          <span style={{ flex: "1", fontWeight: "900", color: "red" }}>
            item
          </span>
          <span style={{ flex: "1", fontWeight: "900", color: "red" }}>
            Quantity
          </span>
          <span style={{ flex: "1", fontWeight: "900", color: "red" }}>
            Price
          </span>
          <span style={{ flex: "1" }}></span>
        </div>

        <ul>
          {arr.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem.item}
              quantity={todoItem.quantity}
              price={todoItem.price}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
