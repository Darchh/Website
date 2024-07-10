import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play_icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>Üniversite Hakkında</h3>
        <h2>Yarının Liderlerini Bugün Yetiştiriyoruz</h2>
        <p>
          Üniversitemizin kapsamlı eğitim programlarıyla dönüştürücü bir eğitim
          yolculuğuna çıkın. Özgün müfredatımız, öğrencileri dinamik eğitim
          alanında başarılı olmaları için gerekli bilgi, beceri ve deneyimlerle
          güçlendirmek üzere tasarlanmıştır.
        </p>
        <p>
          Yenilik, uygulamalı öğrenme ve kişiselleştirilmiş mentorluk üzerine
          odaklanan programlarımız, gelecek vadeden eğitimcileri sınıflarda,
          okullarda ve topluluklarda anlamlı bir etki yaratmaya hazırlıyor.
        </p>
        <p>
          Eğitimci, yönetici, danışman veya eğitim lideri olma hedefiniz ne
          olursa olsun, çeşitli programlarımız eğitimin geleceğini şekillendirme
          potansiyeli sunuyor.
        </p>
      </div>
    </div>
  );
};

export default About;
