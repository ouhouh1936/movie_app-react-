import React from "react";

class MovieBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="movieBox">
        <div className="movieBox__left">
          <img
            src={`https://image.tmdb.org/t/p/w500${this.props.movie.poster_path}`}
            alt="poster"
          />
        </div>
        <div className="movieBox__right mr">
          <article className="mr__title">{this.props.movie.title}</article>
          <article className="mr__score">
            ⭐️{this.props.movie.vote_average}
          </article>
          <article className="mr__summary">{this.props.movie.overview}</article>
        </div>
      </div>
    );
  }
}

export default MovieBox;
