import React from "react";

const listGroup = (props) => {
  const { items, onItemSelect, selectedGenre } = props;

  return (
    <ul className="list-group">
     
      {items.map((genre) => (
        <li
          onClick={() => onItemSelect(genre)}
          className={genre === selectedGenre? "list-group-item active": "list-group-item"}
          key={genre._id}
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
};


export default listGroup;
