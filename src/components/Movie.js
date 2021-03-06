import React from "react";
import PropTypes from "prop-types";
import './Movie.css'
import { Link } from "react-router-dom";

const Moive = ({ year, title, summary, poster, genres }) => {
  return (
    <Link to={{
    pathname:"/movie-detail",
    state: {
      year,
      title,
      summary,
      poster,
      genres
    }
    }}>
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h3 className="movie__year">{year}</h3>
        <ul className="movie__genres">
          {genres.map((genres, i) => (
            <li key={i} className="genres__genre">
              {genres}
            </li>
          ))}
        </ul>
        <p className="movie__summary">{summary.slice(0, 180)}...</p>
      </div>
    </div>
    </Link>
  );
};

Moive.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Moive;
