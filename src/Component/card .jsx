import React from 'react'
import "../App.css"
import Glasses from "../assets/glasses.jfif"
import HandBag from "../assets/hand bag.jfif"
import Perfume from "../assets/premium perfume.jfif"
import Shoes from "../assets/shoes.jfif"
import Watch from "../assets/classic watch.jpg"
import Jewellery from "../assets/jewellery.webp"

const Card = () => {
  return (
    <div className="cards-container">
      <section className="card">
        <img src={Glasses} alt="Designer Glasses" />
        <div className="card-body">
          <h4 className="card-title">Designer Sunglasses</h4>
          <p className="card-text">Elevate your look with our premium UV-protected luxury eyewear collection crafted for style.</p>
          <a href="#" className="btn-solid theme-primary">Shop Now</a>
        </div>
      </section>

      <section className="card">
        <img src={HandBag} alt="Royal Noir Handbag" />
        <div className="card-body">
          <h4 className="card-title">Royal Noir Handbag</h4>
          <p className="card-text">Crafted with fine leather and signature gold accents for effortless everyday elegance.</p>
          <a href="#" className="btn-solid theme-primary">Shop Now</a>
        </div>
      </section>

      <section className="card">
        <img src={Perfume} alt="Golden Aura Elixir" />
        <div className="card-body">
          <h4 className="card-title">Golden Aura Elixir</h4>
          <p className="card-text">An intense, luxurious fragrance crafted for special evenings with a touch of oriental warmth.</p>
          <a href="#" className="btn-solid theme-primary">Shop Now</a>
        </div>
      </section>

      <section className="card">
        <img src={Shoes} alt="Luxe Gold-Trim Joggers" />
        <div className="card-body">
          <h4 className="card-title">Luxe Gold-Trim Joggers</h4>
          <p className="card-text">Engineered for all-day breathability, soft sole support, and effortless street-style looks.</p>
          <a href="#" className="btn-solid theme-primary">Shop Now</a>
        </div>
      </section>

      <section className="card">
        <img src={Watch} alt="Aura Gold Mesh Watch" />
        <div className="card-body">
          <h4 className="card-title">Aura Gold Mesh Watch</h4>
          <p className="card-text">Featuring a slim profile and shimmering gold finish, designed to add effortless grace to every outfit.</p>
          <a href="#" className="btn-solid theme-primary">Shop Now</a>
        </div>
      </section>

      <section className="card">
        <img src={Jewellery} alt="Royal Crimson Crystal Jewelry Set" />
        <div className="card-body">
          <h4 className="card-title">Royal Crimson Crystal Jewelry Set</h4>
          <p className="card-text">A breathtaking 3-piece gold-plated set featuring radiant ruby-red stones framed in shimmering crystals—includes a pendant necklace, matching earrings, and ring.</p>
          <a href="#" className="btn-solid theme-primary">Shop Now</a>
        </div>
      </section>
    </div>
  )
}

export default Card