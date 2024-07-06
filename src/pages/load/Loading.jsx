import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center bg-blue-700 items-center w-screen h-screen overflow-hidden">
      <div className="relative">
        <div className="absolute rounded-full w-6 h-6 animate-spin" style={{ boxShadow: '30px 0 0 0 red, -30px 0 0 0 red' }}></div>
      </div>
    </div>
  );
};

export default Loading;
