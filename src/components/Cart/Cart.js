import './Cart.css';
import Order from '../Order/Order';
import Photo from '../Photo/Photo';
 
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

	return (
    <div className='cartt'> 
      <h1>My Shopping Cart: </h1>
      <div className='c'>{showSpecials(cart)}</div>
      <Order cart={cart}  setCart={setCart} />
    </div>
  );
}

export default Cart;