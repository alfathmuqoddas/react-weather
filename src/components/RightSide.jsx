import React from 'react';

const RightSide = ({ children }) => {
  return (
    <div className="col-md-8 p-lg-3">
      <div
        className="card-body h-100 bg-light text-light"
        style={{ borderRadius: '1.5rem' }}
      >
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default RightSide;
