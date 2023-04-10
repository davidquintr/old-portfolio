import React, { useContext, useRef, useState, useEffect} from "react";
import { ThemeContext } from "./ThemeContext";
import "../scss/_darkMode.scss";
import "../scss/project.scss";
import "../scss/contact.scss";
import socials from "../assets/json/socials.json";
import emailjs from '@emailjs/browser'
import Alert from "./Alert";

const Contact = () => {
const [response, setResponse] = useState(null);
  const { darkMode } = useContext(ThemeContext);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zmht5zq', 'template_bq67pfa', form.current, 'aqJFVCZrRMTDkeRGM')
      .then((result) => {
          setResponse(true)
      }, (error) => {
          setResponse(false)
      });
      setTimeout(() => {
        setResponse(null)
      }, 7000);  
  };

  return (

    <article
      className={"article contact" + (darkMode ? " darkmode-article" : "")}
    >
      <div className={"contact-header " + (darkMode ? "darkmode-contact-header" : "")}>
        <h3>¡Contáctame!</h3>
        <p>
          Si estás buscando ayuda con un proyecto o necesitas asistencia, no dudes en contactarme.
        </p>
      </div>
      <div className={"contain-contact " + (darkMode ? "darkmode-contain-contact" : "")}>
      <form ref={form} onSubmit={sendEmail}>
        <div className={"contact-elements " + (darkMode ? "darkmode-contact-elements" : "")}>
          <div className={"contact-elements-middle " + (darkMode ? "darkmode-contact-elements-middle" : "")}>
            <input
              className={"input-contact name " + (darkMode ? "darkmode-input-contact" : "")}
              type="text"
              placeholder="Nombre y Apellido"
              name="user_name"
            ></input>
            <input
              className={"input-contact number " + (darkMode ? "darkmode-input-contact" : "")}
              type="text"
              placeholder="Numero"
              name="user_number"
            ></input>
          </div>
          <div className="contact-elements-column ">
            <input
              className={"input-contact email " + (darkMode ? "darkmode-input-contact" : "")}
              type="text"
              placeholder="Email"
              name="user_email"
            ></input>
            <textarea
              className={"input-contact subject " + (darkMode ? "darkmode-input-contact" : "")}
              placeholder="Asunto"
              name="message"
              rows="4"
            ></textarea>
            <button type="submit" className={"element-button " + (darkMode ? "darkmode-element-button" : "")}>Enviar mensaje</button>
          </div>
        </div>
        </form>
        <div className={"contact-social " + (darkMode? "darkmode-contact-social" : "")}>
          <p className="contact-social-title">
            ¿Quieres una comunicación más directa? Contáctame en mis redes
            sociales
          </p>
          <div className="contact-social-elements">
            {socials.map((element, index) => (
              <a
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                href={element.url}
                className={"contain-social " + (darkMode ? "darkmode-contain-social" : "")}
              >
                <div className="contain-social-element" key={index}>
                  <img
                    src={`${process.env.PUBLIC_URL + element.img}`}
                    alt={element.name}
                    key={index}
                    title={element.name}
                    className="contain-social-element-img"
                  ></img>
                </div>
              </a>
            ))}
          </div>
        </div>
        {response === true ? <Alert type="success" /> : response === false ? <Alert type="error" /> : null}
      </div>
    </article>
  );
};
export default Contact;
