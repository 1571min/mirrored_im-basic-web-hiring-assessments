import React from 'react';

export default function CurrentMovie({ movie }) {
  if (movie) {
    return (
      <>
        <div className="left-current-side">
          <div className="current-movie">
            <h1 className="title">{movie.title}</h1>
            <img className="thumbnail" src={movie.medium_cover_image} />
            <p>{movie.rating}</p>
            <p>{movie.runtime}</p>
            <p>description</p>
            <p className="description">{movie.description_full}</p>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="left-current-side">Loading date...</div>
      </>
    );
  }
}
