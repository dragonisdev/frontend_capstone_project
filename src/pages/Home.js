import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="home">

     
      <section className="hero">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            At the heart of every dish is a story — and ours begins with the Little Lemon. From classic Mediterranean recipes to innovative culinary twists, Little Lemon brings brightness, balance, and a spark of joy to every plate.
          </p>
          <Link  to="/Booking"><button>Reserve a Table</button></Link>
        </div>
        
          <img className="heroImg" src='/assets/heroImg.jpg' />
        
      </section>

      
      <section className="specials">
        <div className="specials-header">
          <h2>Specials</h2>
           <Link to="/"><button>Online Menu</button></Link>
        </div>
        <div className="specials-cards">
          <div className="card">
            <img className="placeholder-image" src='/assets/salad.jpg'/>
            <h3>Greek salad <span>$12.99</span></h3>
            <p>Our famous Greek salad with crispy lettuce, olives and feta cheese, garnished with rosemary croutons.</p>
            <a className="order" href='' target='blank'>Order a delivery 🚚</a>
          </div>
          <div className="card">
            <img className="placeholder-image" src='/assets/brusche.jpg'/>
            <h3>Bruschetta <span>$5.99</span></h3>
            <p>Bruschetta made with grilled bread, garlic and seasoned with salt and olive oil. Perfect after a hard day of work.</p>
            <a className="order" href='' target='blank'>Order a delivery 🚚</a>
          </div>
          <div className="card">
            <img className="placeholder-image" src='/assets/lemon.jpg'/>
            <h3>Lemon Dessert <span>$5.00</span></h3>
            <p>This dessert comes from grandma’s recipe book – every ingredient has been sourced and is authentic.</p>
            <a className="order" href='' target='blank'>Order a delivery 🚚</a>
          </div>
        </div>
      </section>

      
      <section className="testimonials">
        <h2>Testimonials</h2>
        <div className="reviews">
          <div className="review-card">
            <img className="placeholder-image small" src='/assets/bateman.jpg' alt='Newman'/>
            <p>Rating ★★★★☆</p>
            <p>Jake Newman</p>
            <p>"Great meal"</p>
          </div>
          <div className="review-card">
            <img className="placeholder-image small" src='/assets/patrick.webp' alt='Patrick Starfish'/>
            <p>Rating ★★★★★</p>
            <p>Patrick Starfish</p>
            <p>"10/10 would dine again"</p>
          </div>
          <div className="review-card">
            <img className="placeholder-image small" src='/assets/bro.jpg'alt='my bro'/>
            <p>Rating ★★★★☆</p>
            <p>My Homie</p>
            <p>"This place bussin'"</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;