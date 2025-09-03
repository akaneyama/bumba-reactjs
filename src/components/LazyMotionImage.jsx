import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import LoadingSpinner from './LoadingSpinner';


const LazyMotionImage = ({ src, alt, ...props }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    setIsLoading(true);

    const img = new Image();
    img.src = src;

    img.onload = () => {
      
      setIsLoading(false);
    };

    img.onerror = () => {
      console.error(`Gagal memuat gambar: ${src}`);
      setIsLoading(false);
    };

  }, [src]); 

  return (

    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {isLoading && <LoadingSpinner />}

      <motion.img
        src={src}
        alt={alt}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        {...props} 
      />
    </div>
  );
};

export default LazyMotionImage;