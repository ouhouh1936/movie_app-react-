import React from "react";
import axios from "axios";
import MovieBox from "./components/MovieBox";

// API를 통해 외부에서 받아온 데이터

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: null,
      currentType: 1,
    };
  }

  _getMovieData = async () => {
    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=6f468133ad08eef8c7a50210567d8a1b`
    );
    console.log(result.data.results);

    this.setState((prevState) => {
      return {
        movies: result.data.results,
      };
    });
  };
  _typeBtnClickHandler = (value) => {
    this.setState((prevState) => {
      return { currentType: value };
    });

    this._getMovieData();
  };

  componentDidMount() {
    this._getMovieData();
  }
  // Virtual Movie Datums

  render() {
    return (
      <main className="main">
        <div className="typeArea">
          <button
            className={this.state.currentType === 1 ? "active" : ""}
            onClick={() => this._typeBtnClickHandler(1)}
          >
            인기 영화
          </button>
          <button
            className={this.state.currentType === 2 ? "active" : ""}
            onClick={() => this._typeBtnClickHandler(2)}
          >
            현재 상영 영화
          </button>
        </div>
        <section className="content">
          {this.state.movies === null
            ? "Loading"
            : this.state.movies.map((movie) => {
                return <MovieBox key={movie.id} movie={movie} />;
              })}
        </section>
      </main>
    );
  }
}

export default App;
