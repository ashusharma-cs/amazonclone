// import logo from './logo.svg';
import './App.css';
import Checkout from './Checkout';
import Header from './Header'
import Home from './Home'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">

      

      <Routes>
        <Route path="/" element={
          <>
            <Header></Header>
            <Home></Home>
          </>
        }>

        </Route>


        <Route path="/checkout" element={<>
          
          <Header></Header>
          <Checkout></Checkout>


        </>}>

        </Route>
      </Routes>

    </div>
  );
}

export default App;
