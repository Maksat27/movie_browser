import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import imagePlaceholder from '../img/No-Image-Placeholder.svg';

const MovieCard = ({ movie }) => {
  const posterUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : imagePlaceholder;
  const detailUrl = `/movies/${movie.id}`;

  return (
    <div className="col-lg-3 col-md-3 col-2 my-4">
      <div className="card" style={{ height: '100%' }}>
        <img src={posterUrl} className="card-img-top" alt={movie.original_title} style={{ height: '400px' }} />
        <div className="card-body" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <h5 className="card-title mb-5" style={{ flex: '2' }}>{movie.original_title}</h5>
          <div style={{ flex: 1 }}>
            <Link to={detailUrl} className="btn btn-primary">Show details</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const SearchView = ({ keyword, searchResults }) => {
  const title = searchResults.length === 0 ? `No results found for "${keyword}"` : `You are searching for "${keyword}"`;

  const resultsHtml = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />;
  });

  return (
    <>
      <Hero text={title} />
      <div className="container" style={{display: 'flex',  justifyContent: 'center', marginTop: '2rem'}}>
        {searchResults.length === 0 ? (
          <div className="row" >
            <h1>No results found</h1>
          </div>
        ) : (
          <div className="row">
            {resultsHtml}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchView;
