import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/footer/index';
import Glavnyi from './components/glavnyi';
import Header from './components/Header/index';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path={"/"} element={<Glavnyi/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
