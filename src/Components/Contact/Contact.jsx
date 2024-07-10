import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "79290e52-220b-4b6f-888c-c961d74158a3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Bize Mesaj Gönderin <img src={msg_icon} alt="" />
        </h3>
        <p>
          İletişim formu aracılığıyla veya iletişim numaramızı kullanarak
          bizimle iletişime geçmekten çekinmeyin. Geri bildiriminiz, sorularınız
          ve önerileriniz müşterilerimize olağanüstü hizmet sunmaya çalışırken
          bizim için oldukça önemlidir.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            berkay@info.dev
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +90 123-456-7890
          </li>
          <li>
            <img src={location_icon} alt="" />
            956. Cad. Çankaya <br /> Ankara, Türkiye
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Adınız</label>
          <input
            type="text"
            name="name"
            placeholder="Adınızı Giriniz"
            required
          />
          <label>Telefon Numarası</label>
          <input
            type="tel"
            name="phone"
            placeholder="Telefon Numaranızı Giriniz"
            required
          />
          <label>Mesajınızı buraya yazın</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Mesajınızı Giriniz"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Gönder <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
