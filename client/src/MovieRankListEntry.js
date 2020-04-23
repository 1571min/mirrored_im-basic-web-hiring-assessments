import React from 'react';

export default function MovieRankListEntry(props) {
  return (
    <div
      className="card"
      onClick={() => {
        props.handleCardClick(props.movie);
      }}
    >
      <div style={{ flex: 3 }}>
        <img
          width="100%"
          height="100%"
          src={props.movie.medium_cover_image}
        ></img>
      </div>
      <div style={{ flex: 7 }}>
        <h3 className="title">{props.movie.title}</h3>
        <p className="rating">{props.movie.rating}</p>
        <p className="running-time">{props.movie.runtime}</p>
        <p>genres</p>
        <div className="tag-list">
          {props.movie.genres.map((ele, idx) => (
            <div className="tag" key={idx}>
              {ele}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
