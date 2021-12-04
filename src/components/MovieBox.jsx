import React from "react";

class MovieBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="movieBox">
        <div className="movieBox__left">
          <img src={this.props.movie.poster} alt="poster" />
        </div>
        <div className="movieBox__right mr">
          <article className="mr__title">{this.props.movie.title}</article>
          <article className="mr__score">⭐️{this.props.movie.score}</article>
          <article className="mr__summary">줄거리</article>
        </div>
      </div>
    );
  }
}

export default MovieBox;
