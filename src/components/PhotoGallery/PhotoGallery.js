import './PhotoGallery.css';
import Photo from '../Photo/Photo';

function PhotoGallery({favorites, setFavorites, cart, setCart, GUINEAPATHS, getSpecial}) {
 
  const showImages = () => {
    const f = getSpecial(favorites);
    const c = getSpecial(cart);
    return GUINEAPATHS.map((s, k) => {
      if (f.includes(s) && c.includes(s)){
        return <Photo hamster={k} source={s} key={k} favorites={favorites}  setFavorites={setFavorites} isRemoval={true} cart={cart} setCart={setCart} isRemovalC={true} getSpecial={getSpecial} id={k} />
      } else if (!(f.includes(s)) && c.includes(s)) {
        return <Photo hamster={k} source={s} key={k} favorites={favorites}  setFavorites={setFavorites} isRemoval={false} cart={cart} setCart={setCart} isRemovalC={true} getSpecial={getSpecial} id={k} />
      } else if (f.includes(s) && !(c.includes(s))) {
        return <Photo hamster={k} source={s} key={k} favorites={favorites}  setFavorites={setFavorites} isRemoval={true} cart={cart} setCart={setCart} isRemovalC={false} getSpecial={getSpecial} id={k} />
      } else {
        return <Photo hamster={k} source={s} key={k} favorites={favorites}  setFavorites={setFavorites} isRemoval={false} cart={cart} setCart={setCart} getSpecial={getSpecial} id={k} />
      }
    });
  }

	return (
    <div className='photogallery'>
      <h1>Each pillow costs 15$. Catalogue: </h1>
      <div className='catalog'>{showImages()}</div>
    </div>
  );
}

export default PhotoGallery;

// import './PhotoGallery.css';
// import Photo from './Photo';
// import Favorites from './Favorites';

// import React, { useState, useEffect } from "react";

// // const GUINEAPATHS = [
// //   "https://content.codecademy.com/courses/React/react_photo-guineapig-1.jpg",
// //   "https://content.codecademy.com/courses/React/react_photo-guineapig-2.jpg",
// //   "https://content.codecademy.com/courses/React/react_photo-guineapig-3.jpg",
// //   "https://content.codecademy.com/courses/React/react_photo-guineapig-4.jpg",
// // ];

// class PhotoGallery extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       gp: [
//         "https://content.codecademy.com/courses/React/react_photo-guineapig-1.jpg",
//         "https://content.codecademy.com/courses/React/react_photo-guineapig-2.jpg",
//         "https://content.codecademy.com/courses/React/react_photo-guineapig-3.jpg",
//         "https://content.codecademy.com/courses/React/react_photo-guineapig-4.jpg",
//       ]
//     }
//     this.showImages = this.showImages.bind(this);
//   }

//   showImages () {
//     return this.state.gp.map((s, k) => <Photo source={s} key={k} id={k} />)
//   }
  
//   render (){
// 	return (
//     <div>
//       <h2>All hamsters</h2>
//       {this.showImages()}
//       <Favorites />
//     </div>
//   );
// }}

// export default PhotoGallery;