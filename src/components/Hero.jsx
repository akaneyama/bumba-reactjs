import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


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
    scale: 0.9,
  }),
  center: { 
    x: 0, 
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.9,
  }),
};

const contentVariants = {
 
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {

  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};


function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToSlide = (index) => {
    if (index === activeIndex) return; 
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const goToNext = () => {
    setDirection(1);
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrev = () => {
    setDirection(-1);
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(goToNext, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="home"
      className="relative min-h-screen h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundBumiBaik})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-30" />

      <div className="relative container mx-auto h-full flex items-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "tween", duration: 0.7, ease: "easeInOut" }}
            className="w-full h-full absolute inset-0 grid grid-cols-1 lg:grid-cols-2"
          >
        
            <motion.div 
              className="flex flex-col justify-start lg:justify-center text-center lg:text-left p-8 md:p-12 lg:p-16 pt-36 lg:pt-16"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
            >
 
              <motion.h1 
                variants={itemVariants}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight"
                style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.2)' }}
              >
                {slides[activeIndex].headline}
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="mt-4 text-lg text-gray-700 max-w-lg mx-auto lg:mx-0"
                style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}
              >
                {slides[activeIndex].description}
              </motion.p>
              <motion.a 
                variants={itemVariants}
                href={slides[activeIndex].buttonLink}
                className="mt-8 inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-10 rounded-lg text-lg transition-all duration-300 self-center lg:self-start shadow-lg hover:shadow-xl"
              >
                {slides[activeIndex].buttonText}
              </motion.a>
            </motion.div>

            {/* gambare disini */}
           <div className="flex items-end justify-center ml-4 w-full h-full ">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              src={slides[activeIndex].image}
              alt={slides[activeIndex].headline}
              className="w-full h-full object-cover sd:hidden"
            />
          </div>
          </motion.div>
        </AnimatePresence>

 
        {/* <button onClick={goToPrev} className="absolute top-1/2 -translate-y-1/2 left-0 z-20 p-2 bg-white/70 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-colors">
          <HiChevronLeft className="h-8 w-8 text-gray-700" />
        </button>
        <button onClick={goToNext} className="absolute top-1/2 -translate-y-1/2 right-0 z-20 p-2 bg-white/70 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-colors">
          <HiChevronRight className="h-8 w-8 text-gray-700" />
        </button> */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'w-8 bg-green-600' : 'w-3 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;