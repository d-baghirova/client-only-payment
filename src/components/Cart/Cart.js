import './Cart.css';
import Order from '../Order/Order';
import Photo from '../Photo/Photo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as love } from '@fortawesome/free-solid-svg-icons';
import { faHeart as loved } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping as cartS } from '@fortawesome/free-solid-svg-icons';
 
function Cart({ cart, setCart, favorites, setFavorites, getSpecial }) {

  const showSpecials = (s) => {
    const favs = getSpecial(favorites);
    return s.map(a => {
      if (favs.includes(a[1])){
        return <Photo hamster={a[0]} source={a[1]} key={a[0]}  cart={cart} setCart={setCart} isRemoval={true} favorites={favorites}  setFavorites={setFavorites} isRemovalC={true}  getSpecial={getSpecial} id={a[0]} q='1' /> 
      } else {
        return <Photo hamster={a[0]} source={a[1]} key={a[0]}  cart={cart} setCart={setCart} isRemoval={false} favorites={favorites}  setFavorites={setFavorites} isRemovalC={true} getSpecial={getSpecial} id={a[0]}  q='1' />
      }
    });
  }

  const fullfill = () => {
    if (cart.length > 0){
      return showSpecials(cart)
    } else {
    return <div class='eempty'><p>Pillows which will be in your shopping cart will appear here. Click on <FontAwesomeIcon style={{color: '#9d867c'}} icon={cartS} /> to add pillows to your shopping cart.</p></div>
    }
  }

	return (
    <div className='cartt'> 
      <h1>My Shopping Cart: </h1>
      <div className='c'>{fullfill()}</div>
      <Order cart={cart}  setCart={setCart} />
    </div>
  );
}

export default Cart;