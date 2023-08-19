import './Favorites.css';
import Photo from '../Photo/Photo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as loved } from '@fortawesome/free-regular-svg-icons';
 
function Favorites({ favorites,  setFavorites, cart, setCart, getSpecial }) {

  const showSpecials = (s) => {
    const carts = getSpecial(cart);
    return s.map(a => {
      if (carts.includes(a[1])){
        return <Photo hamster={a[0]} source={a[1]} key={a[0]}  cart={cart} setCart={setCart} isRemoval={true} favorites={favorites}  setFavorites={setFavorites} isRemovalC={true}  getSpecial={getSpecial} id={a[0]} q='1' /> 
      } else {
        return <Photo hamster={a[0]} source={a[1]} key={a[0]}  cart={cart} setCart={setCart} isRemoval={true} favorites={favorites}  setFavorites={setFavorites} isRemovalC={false} getSpecial={getSpecial} id={a[0]} q='0' />
      }
    });
  }

  const fullfill = () => {
    if (favorites.length > 0){
      return showSpecials(favorites)
    } else {
    return <div class='empty'><p>Your favorite pillows will appear here. Click on <FontAwesomeIcon style={{color: '#e04da8'}} icon={ loved } /> to add pillows to favorites.</p></div>
    }
  }

	return (
    <div className='favs'>
      <h1>My Favorite Pillows:</h1>
      <div className='favorites'>{fullfill()}</div>
    </div>
  );
}

export default Favorites;