import React from "react";
import axios from "axios";
import Moive from '../components/Movie'
import './Home.css'


class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
    
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text"></span>
          </div>
        ) : (
          movies.map((movie) => {
            console.log(movie);
            return (
              <Moive
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
                key={movie.id}
              />
            );
          })
        )}
      </section>
    );
  }
}

export default Home;
