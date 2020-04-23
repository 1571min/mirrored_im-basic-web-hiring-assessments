import React from 'react';
import MovieRankListEntry from './MovieRankListEntry';
export default function MovieRankList(props) {
  return (
    <div className="right-movie-list">
      {props.movies
        ? props.movies.map((element, idx) => (
            <MovieRankListEntry
              key={idx}
              movie={element}
              handleCardClick={props.handleCardClick}
            />
          ))
        : 'empty'}
    </div>
  );
}
