import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LazyMotionImage from '../components/LazyMotionImage'; 
import backgroundBumiBaik from '../assets/backgroundbumibaik.jpg'; 
import imageSlide1 from '../assets/ciwi1.png';
import imageSlide2 from '../assets/ciwi2.png';
import imageSlide3 from '../assets/woman2.png';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const slides = [
  {
    image: imageSlide1,
    headline: "Zero emission day bersama BumiBaik",
    description: "Ambil bagian dalam hari bebas emisi untuk bumi yang lebih sehat. Setiap langkah kecilmu berarti.",
    buttonText: "Pelajari Caranya",
    buttonLink: "#zeroday",
  },
  {
    image: imageSlide2,
    headline: "Tanam Pohon, Tanam Harapan Masa Depan",
    description: "Satu pohon yang kamu tanam hari ini adalah sumber kehidupan untuk generasi yang akan datang.",
    buttonText: "Ikut Donasi Pohon",
    buttonLink: "#donasi",
  },
  {
    image: imageSlide3,
    headline: "Jadi Bagian dari Komunitas Peduli Lingkungan",
    description: "Temukan teman seperjuangan dan berkolaborasi dalam aksi nyata untuk lingkungan di Malang dan sekitarnya.",
    buttonText: "Jadi Relawan",
    buttonLink: "#volunteer",
  },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: { 
    x: 0, 
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
};

const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3, 
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

function TampilanAwal() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToSlide = (index) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const goToNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, []);

  const goToPrev = () => {
    setDirection(-1);
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(goToNext, 8000); 
    return () => clearInterval(timer);
  }, [goToNext]);

  return (
    <section 
      id="home"
      className="relative w-full h-screen min-h-[600px] overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundBumiBaik})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" />

      <div className="relative container mx-auto h-full flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
            className="w-full h-full absolute inset-0 flex flex-col-reverse lg:flex-row items-center justify-center px-4"
          >
           
            <motion.div 
              className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left p-6"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1 
                variants={itemVariants}
                className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight drop-shadow-md"
              >
                {slides[activeIndex].headline}
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="mt-4 text-base lg:text-lg text-gray-800 max-w-lg mx-auto lg:mx-0 drop-shadow-sm"
              >
                {slides[activeIndex].description}
              </motion.p>
              <motion.a 
                variants={itemVariants}
                href={slides[activeIndex].buttonLink}
                className="mt-4 self-center lg:self-start bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-transform duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {slides[activeIndex].buttonText}
              </motion.a>
            </motion.div>

         
            <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-end justify-center mr-8">
            <LazyMotionImage
             
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}

    
              src={slides[activeIndex].image}
              alt={slides[activeIndex].headline}

              className="max-h-full max-w-full object-contain lg:w-full lg:h-full lg:object-cover"
            />
          </div>
          </motion.div>
        </AnimatePresence>

      
        {/* <button onClick={goToPrev} className="absolute top-1/2 -translate-y-1/2 left-1 md:left-4 z-20 p-2 bg-white/60 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-colors duration-300">
          <HiChevronLeft className="h-6 w-6 md:h-8 md:w-8 text-gray-700" />
        </button>
        <button onClick={goToNext} className="absolute top-1/2 -translate-y-1/2 right-1 md:right-4 z-20 p-2 bg-white/60 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-colors duration-300">
          <HiChevronRight className="h-6 w-6 md:h-8 md:w-8 text-gray-700" />
        </button> */}
        
        {/* yang buat tombol dibawah */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'w-8 bg-green-600' : 'w-3 bg-gray-400 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TampilanAwal;