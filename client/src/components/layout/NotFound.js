import React from 'react';

const NotFound = () => {
  return (
    <>
      <h1 className='display-2 text-danger'>
        <i className='fas fa-exclamation-triangle' /> Page Not Found
      </h1>
      <p className='display-4'>Sorry, this page does not exist</p>
    </>
  );
};

export default NotFound;
