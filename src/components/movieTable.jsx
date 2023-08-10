import React, { Component } from "react";
import TableHeader from "./common/tableHeader.jsx";
import Like from "./common/like.jsx";
import TableBody from "./common/tableBody.jsx";

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
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBody columns={this.columns} data={movies} />
        {/* <tbody>
          
        </tbody> */}
      </table>
    );
  }
}

export default MovieTable;
