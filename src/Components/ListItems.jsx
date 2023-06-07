import React from "react";
import "./ListItems.css";

const ListItems = ({ items, onSelect }) => {
  return (
    <ul className="dropdown-menu-custom show">
      {items.map((item, index) => (
        <li
          key={item + index}
          className="dropdown-item-custom"
          onClick={() => onSelect(item)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ListItems;
