import './Photo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as love } from '@fortawesome/free-solid-svg-icons';
import { faHeart as loved } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping as cartS } from '@fortawesome/free-solid-svg-icons';

import {useEffect, useState} from 'react';
 
function Photo({hamster, source, favorites,  setFavorites, isRemoval, cart, setCart, isRemovalC}) {

  const addFavs = () => {
    setFavorites([...favorites, [hamster, source]]);
  } 
  
  const toCart = () => {
    setCart([...cart, [hamster, source, 1]]);
}

  const removeFavs = () => {
    const n = favorites.filter(h => h[0] !== hamster && h[1] !== source);
    setFavorites(n);
  }

  const fromCart = () => {
    const n = cart.filter(h => h[0] !== hamster && h[1] !== source);
    setCart(n);
  }

  const renderAction = () => {
    if (isRemoval && isRemovalC){
      return <div className='photo'>
          <img src={source} id={hamster} />
          <button className='like' onClick={removeFavs}><FontAwesomeIcon icon={ love } /></button>
          <button className='ca'  style={{color: '#675751'}}  onClick={fromCart}><FontAwesomeIcon style={{color: '#675751'}} icon={cartS} /></button>
          
        </div>
    } else if (!isRemoval && isRemovalC) {
      return <div className='photo'>
          <img src={source} id={hamster} />
          <button className='like' onClick={addFavs}><FontAwesomeIcon icon={ loved } /></button>
          <button className='ca'  style={{color: '#675751'}}  onClick={fromCart}><FontAwesomeIcon style={{color: '#675751'}} icon={cartS} /></button>
          
        </div>
    } else if (isRemoval && !isRemovalC) {
      return <div className='photo'>
          <img src={source} id={hamster} />
          <button className='like' onClick={removeFavs}><FontAwesomeIcon icon={ love } /></button>
          <button className='ca'  style={{color: '#9d867c'}}  onClick={toCart}><FontAwesomeIcon style={{color: '#9d867c'}} icon={cartS} /></button>

        </div>
    } else if (!isRemoval && !isRemovalC) {
      return <div className='photo'>
          <img src={source} id={hamster} />
          <button className='like' onClick={addFavs}><FontAwesomeIcon icon={ loved } /></button>
          <button className='ca' style={{color: '#9d867c'}}   onClick={toCart}><FontAwesomeIcon style={{color: '#9d867c'}} icon={cartS} /></button>

        </div>
    }
  }

	return (
    <>
    {renderAction()}
    </>
  );
}

export default Photo;