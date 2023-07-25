import React, { Component } from 'react';
import './App.css';
import { Homepage } from './pages/Home/HomePage';
import HeaderPartial from './Partials/HeaderPartial/HeaderPartial';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Carrinho } from './pages/Carrinho/Carrinho';
import { AppContext } from './store/AppContext';
import { saveProduct } from './services/services';


const initialState = {
    activePinId:null,
    mode: null,
    products: [],
    type: null,
    itens: []
}




class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <AppContext initialState={initialState}>

       <HeaderPartial/>        
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/carrinho' element={<Carrinho/>} />
        </Routes>
        </AppContext>
        </div>
        </BrowserRouter>
    );
  }
}

export default App;
