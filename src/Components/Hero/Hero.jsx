import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Daha iyi bir dünya için daha iyi eğitim sağlıyoruz.</h1>
        <p>
          Özgün müfredatımız, öğrencileri dinamik eğitim alanında başarılı
          olmaları için gerekli bilgi, beceri ve deneyimlerle güçlendirmek üzere
          tasarlanmıştır.
        </p>
        <button className="btn">
          Fazlasını Keşfet <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
