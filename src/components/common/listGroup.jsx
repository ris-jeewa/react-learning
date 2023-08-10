import React from "react";

const listGroup = (props) => {
  const { items, onItemSelect, selectedGenre } = props;

  return (
    // <ul class="list-group"><li class="list-group-item">All Genres</li></ul>
    <ul className="list-group">
      {/* <li className="list-group-item">All Genres</li> */}
      {/* {items.map((genre) => (<li className="list-group-item" key={genre._id}>{genre.name}</li>
      ))} */}
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

// listGroup.defaultProps = {
//   textProperty: "name",
//   valueProperty: "_id",
// };
export default listGroup;
