import { Route, Routes } from 'react-router-dom';
import NotFoundedBlock from './components/NotFoundedBlock';

import Home from './pages/Home';
import Header from './components/Header';
import SearchEngine from './components/SearchEngine';

import './sass/app.scss';

function App() {
  return (
    <div>
      <Header/>
      <SearchEngine/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFoundedBlock/>}/>
      </Routes>
    </div>
  );
}

export default App;
