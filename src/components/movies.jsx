import Pagin from "./common/pagin.jsx";
import ListGroup from "./common/listGroup.jsx";
import MovieTable from "./movieTable.jsx";
import { getGenres } from "../services/fakeGenreService.js";
import { getMovies } from "../services/fakeMovieService.js";
import { Paginate } from "../several/paginate.jsx";
import React, { Component } from "react";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genres: [],
    sortColumn: { path: "title", order: "asc" },
  };
  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres: genres });
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movies });
    this.setState({ count: this.state.count - 1 });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleItemSelectGenre = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      currentPage,
      pageSize,
      movies: allMovies,
      selectedGenre,
      sortColumn,
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = Paginate(sorted, currentPage, pageSize);
    return {totCount:filtered.length,movies};


  };

  render() {
    const { length: movieCount } = this.state.movies;
    const {
      currentPage,
      pageSize,
      genres: allGenres,
      sortColumn,
    } = this.state;

    
    if (movieCount === 0) {
      return <p>There is no movies in the DB</p>;
    }

    const {totCount,movies} = this.getPagedData();
    return (
      <div className="container">
        <div className="row">
          <div className="col-2">
            <ListGroup
              items={allGenres}
              selectedGenre={this.state.selectedGenre}
              onItemSelect={this.handleItemSelectGenre}
            />
          </div>
          <div className="col">
            <p>Showing {totCount} movies in the DB</p>

            <MovieTable
              movies={movies}
              sortColumn={sortColumn}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />

            <Pagin
              itemsCount={totCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
