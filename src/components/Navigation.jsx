import React from 'react';

const Navigation = () => {
  return (
    <div className="navigation">
      <button className="navigation_departures">
        <span className="icon-plane">
          <i className="fa-solid fa-plane-departure"></i>{' '}
        </span>
        DEPARTURES
      </button>
      <button className="navigation_arrivals">
        ARRIVALS
        <span className="icon-plane">
          <i className="fas fa-plane-arrival"></i>
        </span>
      </button>
    </div>
  );
};

export default Navigation;
