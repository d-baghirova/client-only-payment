
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";
import Favorites from "./components/Favorites/Favorites";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import Success from "./components/Success";
import Cancel from "./components/Cancel";

import './App.css';

const favs = JSON.parse(localStorage.getItem('favorites'));
const favsFromLocalStorage = (localStorage.getItem('favorites')) ? favs : [];

const cartS = JSON.parse(localStorage.getItem('cart'));
const cartFromLocalStorage = (localStorage.getItem('cart')) ? cartS : [];

const NavBar = () => {
    const [favorites, setFavorites] = useState(favsFromLocalStorage);
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState(cartFromLocalStorage);
    const [GUINEAPATHS, setGUINEAPATHS] = useState([
        "/assets/1.jpg",
        "/assets/2.jpg",
        "/assets/3.jpg",
        "/assets/4.jpg",
        "/assets/5.jpg",
        "/assets/6.jpg",
        "/assets/7.jpg",
        "/assets/8.jpg",
        "/assets/9.jpg",
        "/assets/10.jpg",
        "/assets/11.jpg",
        "/assets/12.jpg",
        "/assets/13.jpg",
        "/assets/14.jpg",
        "/assets/15.jpg",
        "/assets/16.jpg",
        "/assets/17.jpg",
        "/assets/18.jpg",
        "/assets/19.jpg",
        "/assets/20.jpg"
    ]);

    useEffect(() => { 
      localStorage.setItem('favorites', JSON.stringify(favorites)); 
      localStorage.setItem('cart', JSON.stringify(cart));
    }, [favorites, cart]);

    const getSpecial = (s) => {
      const n = s.map(f => f[1]);
      return n;
    }

    const spinner = document.getElementById('spinner');

    if (spinner){
      setTimeout(() => {
        spinner.style.display="none";
        setLoading(false);
      }, 5000)
    }

    return (
     
        <div className="app">
          <nav>
            <Link id="left" className={useLocation().pathname == '/' ? 'here' : 'not'} to='/'>Home</Link>
            <Link className={useLocation().pathname == '/catalogue' ? 'here' : 'not'} to='/catalogue'>Pillows</Link>
            <Link className={useLocation().pathname == '/favorites' ? 'here' : 'not'} to='/favorites'>Favorite</Link>
            <Link id="right" className={useLocation().pathname == '/cart' ? 'here' : 'not'} to='/cart'>Cart</Link>
            </nav>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/catalogue" element={<PhotoGallery favorites={favorites}  setFavorites={setFavorites} cart={cart} setCart={setCart} GUINEAPATHS={GUINEAPATHS} getSpecial={getSpecial} />}></Route>
                <Route exact path="/favorites" element={<Favorites favorites={favorites}  setFavorites={setFavorites} cart={cart} setCart={setCart} getSpecial={getSpecial} />}></Route>
                <Route exact path="/cart/*" element={<Cart favorites={favorites}  setFavorites={setFavorites} cart={cart} setCart={setCart} getSpecial={getSpecial} />}></Route>
                <Route path="success" element={<Success />} />
                <Route path="cancel" element={<Cancel />} />
            </Routes>
        </div>
      
    )
}
 
export default NavBar;

// import "@stripe/stripe-js";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Checkout from "./components/Checkout";
// import Success from "./components/Success";
// import Cancel from "./components/Cancel";

// import "./styles.css";

// export default function App() {
//   return (
//     <div className="App">
//         <Routes>
//           <Route index element={<Checkout />} />
//           <Route path="success" element={<Success />} />
//           <Route path="cancel" element={<Cancel />} />
//         </Routes>
//     </div>
//   );
// }
