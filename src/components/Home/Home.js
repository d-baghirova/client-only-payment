import './Home.css';
 
function Home({ cart, setCart, favorites, setFavorites, getSpecial }) {

	return (
    <div className='home'>
      <div className='block'>
        <img src='/assets/pillow2.png' />
      <div className='text'>
        <h2>About</h2>
        <p>pillow-fight.surge.sh is an online shop of handmade pillows and toys, which is currently functioning only in Baku.
          <br /><br />
        Our decorative pillows are the perfect addition to any home decor. Made from high-quality materials, each pillow features a vibrant and eye-catching design. Whether you're looking to add a pop of color to your living room or create a cozy ambiance in your bedroom, our pillows are sure to enhance any space </p>

      </div>
      </div>
    </div>
  );
}

export default Home;