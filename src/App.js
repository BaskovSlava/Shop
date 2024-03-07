import { Route, Routes } from 'react-router-dom';
import NotFoundedBlock from './components/NotFoundedBlock';

import Home from './pages/Home';
import Header from './components/Header';

import './sass/app.scss';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFoundedBlock/>}/>
      </Routes>
    </div>
  );
}

export default App;
