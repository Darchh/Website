import React, { useRef, useState } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef(null);
  const [tx, setTx] = useState(0);

  const slideForward = () => {
    if (tx > -75) {
      setTx(tx - 25);
      slider.current.style.transform = `translateX(${tx - 25}%)`;
    }
  };

  const slideBack = () => {
    if (tx < 0) {
      setTx(tx + 25);
      slider.current.style.transform = `translateX(${tx + 25}%)`;
    }
  };

  return (
    <div className="testimonials">
      <img
        src={next_icon}
        alt="Next"
        className="next-btn"
        onClick={slideForward}
      />
      <img
        src={back_icon}
        alt="Back"
        className="back-btn"
        onClick={slideBack}
      />
      <div className="slider">
        <ul ref={slider} className="slides">
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="User 1" />
                <div>
                  <h3>Emine Sedirven</h3>
                  <span>Can Eğitim, Türkiye</span>
                </div>
              </div>
              <p>
                Can Eğitim'de derecemizi takip etmeye karar vermek, şimdiye
                kadar verdiğim en iyi kararlardan biriydi. Destekleyici
                topluluk, son teknoloji tesisler ve akademik mükemmeliyete olan
                bağlılık, gerçekten beklentilerimi aştı.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="User 2" />
                <div>
                  <h3>Alican Kurutepe</h3>
                  <span>Can Eğitim, Türkiye</span>
                </div>
              </div>
              <p>
                Can Eğitim'deki topluluk inanılmaz destekleyici ve öğrencilere
                sunulan kaynaklar birinci sınıf. Bu harika bir yolculuk oldu.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="User 3" />
                <div>
                  <h3>Saliha Beyaz</h3>
                  <span>Can Eğitim, Türkiye</span>
                </div>
              </div>
              <p>
                Can Eğitim'deki zamanımda akademik ve kişisel olarak çok
                geliştim. Öğretim kadrosu gerçekten başarınızı önemsiyor.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="User 4" />
                <div>
                  <h3>Mustafa Kemer</h3>
                  <span>Can Eğitim, Türkiye</span>
                </div>
              </div>
              <p>
                Can Eğitim, hiç düşünmediğim fırsatlar sunarak benim için
                unutulmaz bir deneyim oldu.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
