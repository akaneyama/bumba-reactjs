import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom'; 

import Header from './Header';
import Animasitunggu from './animasitunggu';

function MainLayout() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
 
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Animasitunggu />
      ) : (
        <main className="relative">
          <div className="absolute top-0 left-0 right-0 z-50">
            <Header />
          </div>
          

          <Outlet /> 
        </main>
      )}
    </>
  );
}

export default MainLayout;