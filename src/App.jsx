

import { Routes, Route } from 'react-router-dom';

import MainLayout from './components/MainLayout';
import HomePage from './halaman/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>

        <Route index={true} element={<HomePage />} />
        
     

      </Route>
    </Routes>
  )
}

export default App;