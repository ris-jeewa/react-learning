import React, { Component } from "react";
import Like from "./common/like.jsx";
import Table from "./common/table.jsx";

class MovieTable extends Component {
  columns = [
    { path: "title", label: "Title"},
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: movie =>(<Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
    )},
    {
      key: "delete",
      content: movie =>(
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { movies, onSort, sortColumn } = this.props;
    console.log(movies);
    return (
      <Table columns={this.columns} sortColumn={sortColumn} onSort={onSort} data={movies}/>
    );
  }
}

export default MovieTable;
