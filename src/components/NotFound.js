import React from 'react';
import Hero from './Hero';

const NotFound = () => {
  return (
    <div>
      <Hero text="404 - Page Not Found" />
      <p className='p-5'>The page you are looking for does not exist.</p>
    </div>
  );
}

export default NotFound;
