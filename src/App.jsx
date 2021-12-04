import React from "react";
import MovieBox from "./components/MovieBox";

// API를 통해 외부에서 받아온 데이터
const movies = [
  {
    title: "SpiderMan - Home comming",
    score: 8.5,
    poster: "http://img.movist.com/?img=/x00/04/90/19_p1.jpg",
  },
  {
    title: " eternals",
    score: 5.2,
    poster:
      "https://koreajoongangdaily.joins.com/data/photo/2021/09/29/083e3214-269b-4e44-8179-edd2f41806d9.jpg",
  },
  {
    title: "avengers - End game",
    score: 9.5,
    poster:
      "https://image.fmkorea.com/files/attach/new/20190317/486616/239936424/1673646976/8c4e0e175e5aa5961eb3de4b47be9125.jpeg",
  },
  {
    title: "Thor - Ranarok",
    score: 8.8,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
  },
  {
    title: "black widow",
    score: 7.3,
    poster:
      "https://t1.daumcdn.net/movie/f39274b0acd76f7c66f0a5fb9e5b7222ed37b373",
  },
];

class App extends React.Component {
  // Virtual Movie Datums

  render() {
    return (
      <main className="main">
        <section className="content">
          {movies.map((movie) => {
            return <MovieBox movie={movie} />;
          })}
        </section>
      </main>
    );
  }
}

export default App;
