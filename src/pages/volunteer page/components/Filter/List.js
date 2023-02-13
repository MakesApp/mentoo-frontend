import React, { useState } from "react";
import Checkbox from "./Checkbox";
import { status } from "./constants";

export default function List({ items, compute }) {
  const [userChoice, setUserChoice] = useState([]);
  return (
    <div className="list-container">
      <ul>
        {items.map((item) => {
          let childList = null;
          if (Array.isArray(item.items)) {
            childList = <List items={item.items} compute={compute} />;
          }
          return (
            <li key={item.id}>
              <label htmlFor={item.name}>{item.name}</label>
              <Checkbox
                id={item.id}
                name={item.name}
                checked={item.status === status.checked}
                indeterminate={item.status === status.indeterminate}
                compute={compute}
                setUserChoice={setUserChoice}
              />

              {childList}
            </li>
          );
        })}
      </ul>
      {console.log(userChoice)}
    </div>
  );
}
