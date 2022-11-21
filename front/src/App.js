import './App.css';
//For managing the browser routes
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Header from './components/Header';
import Home from './components/Home';
import Catalog from './components/Catalog';
import Newprodform from './components/Newprodform';
import Neworderform from './components/Neworderform';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

      <Header />

      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/catalog' element={ <Catalog /> } />
        <Route path='/new-product' element={ <Newprodform /> } />
        <Route path='/new-product/:id' element={ <Newprodform /> } />
        <Route path='/new-order' element={ <Neworderform /> } />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
