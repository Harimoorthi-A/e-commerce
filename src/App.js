import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Listing from './components/Listing';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Checkout from './pages/Checkout';
import Account from './pages/Account';
import Signup from './pages/Signup';
import Pagenotfound from './pages/Pagenotfound';
function App() {
  return (
    <div className="App">

      <Header></Header>

      <Listing></Listing>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/wishlist' element={<Wishlist></Wishlist>}></Route>
        <Route path='/checkout' element={<Checkout></Checkout>}></Route>
        <Route path='/sign-in' element={<Account></Account>}></Route>
        <Route path='/sign-up' element={<Signup></Signup>}></Route>
        <Route path='*' element={<Pagenotfound></Pagenotfound>}></Route>
      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;
