import React from 'react';

function LoadingScreen() {
  return (
    // Pembungkus ini akan membuat layar menutupi seluruh halaman dan menempatkan loader di tengah.
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white z-50">
      {/* Ini adalah elemen HTML untuk loader-mu */}
      <div className="loader"></div>
    </div>
  );
}

export default LoadingScreen;