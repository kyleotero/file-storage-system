import React from 'react';

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-darkbg">
      <div className='text-white'>Your Files</div>
      <div className='w-1/2 h-1/4 bg-white rounded-md'></div>
      <div className='bg-white rounded-lg w-24 h-8 m-5 flex justify-center items-center select-none cursor-pointer'>Upload</div>
    </div>
  );
}

export default App;
