import React, { useState } from "react";
import "./styles.css";
import List from "./List";
import { status } from "./constants";
import { data } from "./regionsData";

export default function Regions() {
  const setStatus = (root, status) => {
    root.status = status;
    if (Array.isArray(root.items)) {
      return root.items.forEach((item) => {
        setStatus(item, status);
      });
    }
  };

  const computeStatus = (items) => {
    let checked = 0;
    let indeterminate = 0;

    items.forEach((item) => {
      if (item.status && item.status === status.checked) checked++;
      if (item.status && item.status === status.indeterminate) indeterminate++;
    });

    if (checked === items.length) {
      return status.checked;
    } else if (checked > 0 || indeterminate > 0) {
      return status.indeterminate;
    }
  };

  // Depth-first traversal
  const traverse = (root, needle, status) => {
    let id;
    let items;

    if (Array.isArray(root)) {
      items = root;
    } else {
      id = root.id;
      items = root.items;
    }

    // return if needle is found
    // we don't have to compute the status of the items if root.id === needle
    if (id === needle) {
      return setStatus(root, status);
    }

    if (!items) {
      return root;
    } else {
      items.forEach((item) => traverse(item, needle, status));
      root.status = computeStatus(items);
    }
  };

  const [items, setItems] = useState(data);
  const compute = (checkboxId, status) => {
    traverse(items, checkboxId, status);
    setItems(items.slice());
  };

  return (
    <div className="App">
      <List items={items} compute={compute} />
    </div>
  );
}
