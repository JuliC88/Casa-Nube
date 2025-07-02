import React from 'react';
import Header from '../components/Estaticos/Header';
import Footer from '../components/Estaticos/Footer';

const Contacto = () => {
  return (
    <>
      <Header />

      <main className="contacto-container">
        <h1>📨 Contactanos</h1>
        <p>
          ¡Gracias por visitar <strong>Casa Nube</strong>! <br />
          Si tenés alguna consulta, sugerencia o querés saber más sobre nuestros productos, estamos para ayudarte.
        </p>

        <section className="contact-info">
          <h2>📞 ¿Querés hablar con nosotras?</h2>
          <p>
            <strong>Teléfono / WhatsApp:</strong> <br />
            📱 +54 9 11 2345 6789 <br />
            ⏰ Lunes a viernes de 10 a 18 hs.
          </p>

          <h2>📬 ¿Preferís escribirnos?</h2>
          <p>
            <strong>Correo electrónico:</strong> <br />
            ✉️ <a href="mailto:hola@casanube.com.ar">hola@casanube.com.ar</a> <br />
            Respondemos en menos de 24 hs hábiles.
          </p>

          <h2>📍 ¿Dónde estamos?</h2>
          <p>
            📍 Calle de los Sueños 123, CABA, Argentina <br />
            (¡Estamos en el barrio de Villa Crespo!)
          </p>
        </section>

        <section className="contact-form">
          <h2>🗨️ También podés enviarnos un mensaje directo</h2>
          <form>
            <label>
              Nombre
              <input type="text" name="nombre" required />
            </label>
            <label>
              Correo
              <input type="email" name="email" required />
            </label>
            <label>
              Asunto
              <input type="text" name="asunto" />
            </label>
            <label>
              Mensaje
              <textarea name="mensaje" rows="5" required />
            </label>
            <button type="submit">Enviar</button>
          </form>
        </section>

        <section className="redes-sociales">
          <h2>🤝 ¡Seguinos en redes!</h2>
          <ul>
            <li>
              <i className="fa-brands fa-instagram"></i>{' '}
              <a href="https://instagram.com/casanube.ar" target="_blank" rel="noopener noreferrer">
                @casanube.ar
              </a>
            </li>
            <li>
              <i className="fa-brands fa-facebook"></i>{' '}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                Casa Nube
              </a>
            </li>
            <li>
              <i className="fa-brands fa-tiktok"></i>{' '}
              <a href="https://tiktok.com/@casanube.ar" target="_blank" rel="noopener noreferrer">
                @casanube.ar
              </a>
            </li>
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contacto;