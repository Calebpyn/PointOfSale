import './App.css';
//For managing the browser routes
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Header from './components/Header';
import Home from './components/Home';
import Catalog from './components/Catalog';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

      <Header />

      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/catalog' element={ <Catalog /> } />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
