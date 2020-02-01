import React from 'react';
import { Link } from 'react-router-dom';

const GridCards = ({ image, movieId, actor }) => {
  if (actor) {
    return (
      <div className='col-lg-3 col-md-4 col-sm-12 my-2'>
        <img src={image} style={{ width: '100%', height: '100%' }} />
      </div>
    );
  } else {
    return (
      <div className='col-lg-3 col-md-4 col-sm-12 my-2'>
        <Link to={`/movie/${movieId}`}>
          <img src={image} style={{ width: '100%', height: '100%' }} />
        </Link>
      </div>
    );
  }
};

export default GridCards;
