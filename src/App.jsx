import { useState, useEffect } from 'react'
import Header from './components/Header';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    {isLoading ? (
      <LoadingScreen/>
    ) : (
      <main className="relative">
    
          <div className="absolute top-0 left-0 right-0 z-50">
            <Header />
          </div>
          <Hero />
        </main>
    )}
    </>
  )
}

export default App
