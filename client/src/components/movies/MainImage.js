import React from 'react';

const MainImage = ({ image, title, text }) => {
  return (
    <div
      className='main-image'
      style={{
        background: `linear-gradient(to bottom, rgba(0, 0, 0, 0)
    39%, rgba(0,0,0,0)
    41%, rgba(0,0,0,0.65)
    100%),
    url('${image}'), #1c1c1c`
      }}
    >
      <div className='main-image-text'>
        <h2 className='display-3 text-light'>{title}</h2>
        <p className='lead text-light'>{text}</p>
      </div>
    </div>
  );
};

export default MainImage;
