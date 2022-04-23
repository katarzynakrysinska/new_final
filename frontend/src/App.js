import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

//screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

//components
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';

function App() {

  const [sideToggle, setSideToggle] = useState(false);


  return (
    <BrowserRouter>
        <Navbar click={() => setSideToggle(true)} />
        <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
        <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
        <main>
          <Routes>
            <Route path='/' element={ < HomeScreen /> } />
            <Route path='/product/:id' element={ < ProductScreen/> } />
            <Route path='/cart' element={ < CartScreen /> } />
          </Routes>
        </main>
 
    </BrowserRouter>
  );
}

export default App;
