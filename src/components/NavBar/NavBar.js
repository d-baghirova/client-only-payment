import "@stripe/stripe-js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Checkout from "../Checkout";
import Success from "../Success";
import Cancel from "../Cancel";

export default function App({cart}) {
  return (
    <div className="App">
        <Routes>
          <Route index element={<Checkout exact path='/check' cart={cart} />} />
        </Routes>
    </div>
  );
}


// import "./NavBar.css";
// import { Routes, Route, Link, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
// import PhotoGallery from "../PhotoGallery/PhotoGallery";
// import Favorites from "../Favorites/Favorites";
// import Cart from "../Cart/Cart";
// import Home from "../Home/Home";

// const favs = JSON.parse(localStorage.getItem('favorites'));
// const favsFromLocalStorage = (localStorage.getItem('favorites')) ? favs : [];

// const cartS = JSON.parse(localStorage.getItem('cart'));
// const cartFromLocalStorage = (localStorage.getItem('cart')) ? cartS : [];

// const NavBar = () => {
//     const [favorites, setFavorites] = useState(favsFromLocalStorage);
//     const [loading, setLoading] = useState(true);
//     const [cart, setCart] = useState(cartFromLocalStorage);
//     const [GUINEAPATHS, setGUINEAPATHS] = useState([
//         "https://content.codecademy.com/courses/React/react_photo-guineapig-1.jpg",
//         "https://content.codecademy.com/courses/React/react_photo-guineapig-2.jpg",
//         "https://content.codecademy.com/courses/React/react_photo-guineapig-3.jpg",
//         "https://content.codecademy.com/courses/React/react_photo-guineapig-4.jpg",
//     ]);

//     useEffect(() => { 
//       localStorage.setItem('favorites', JSON.stringify(favorites)); 
//       localStorage.setItem('cart', JSON.stringify(cart));
//     }, [favorites, cart]);

//     const getSpecial = (s) => {
//       const n = s.map(f => f[1]);
//       return n;
//     }

//     const spinner = document.getElementById('spinner');

//     if (spinner){
//       setTimeout(() => {
//         spinner.style.display="none";
//         setLoading(false);
//       }, 5000)
//     }

//     return (
//         <div>
//             <Link id="left" className={useLocation().pathname == '/' ? 'here' : 'not'} to='/'>Home</Link>
//             <Link className={useLocation().pathname == '/catalog' ? 'here' : 'not'} to='/catalog'>Catalog</Link>
//             <Link className={useLocation().pathname == '/favorites' ? 'here' : 'not'} to='/favorites'>Favorite</Link>
//             <Link id="right" className={useLocation().pathname == '/cart' ? 'here' : 'not'} to='/cart'>Cart</Link>
//             <Routes>
//             <Route exact path="/" element={<Home />}></Route>
//                 <Route exact path="/catalog" element={<PhotoGallery favorites={favorites}  setFavorites={setFavorites} cart={cart} setCart={setCart} GUINEAPATHS={GUINEAPATHS} getSpecial={getSpecial} />}></Route>
//                 <Route exact path="/favorites" element={<Favorites favorites={favorites}  setFavorites={setFavorites} cart={cart} setCart={setCart} getSpecial={getSpecial} />}></Route>
//                 <Route exact path="/cart" element={<Cart favorites={favorites}  setFavorites={setFavorites} cart={cart} setCart={setCart} getSpecial={getSpecial} />}></Route>
//             </Routes>
//         </div>
//     )
// }
 
// export default NavBar;