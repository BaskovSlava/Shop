import { Route, Routes } from 'react-router-dom';
import NotFoundedBlock from './components/NotFoundedBlock';

import Header from './components/Header';
import SearchEngine from './components/SearchEngine';
import Home from './pages/Home';

import './sass/app.scss';
import { wait } from '@testing-library/user-event/dist/utils';

function App() {
  return (
    <>
      <Header/>
      <SearchEngine/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFoundedBlock/>}/>
      </Routes>
    </>
  );
}

export default App;
