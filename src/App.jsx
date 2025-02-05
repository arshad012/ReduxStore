import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";

import Home from './components/Home';
import ItemDetail from './components/ItemDetail';
import { Store } from './redux/Store';

function App() {

  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/item/:id' element={<ItemDetail />}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
