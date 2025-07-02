import React from 'react';
import Header from '../components/Estaticos/Header';
import Footer from '../components/Estaticos/Footer';

const AcercaDe = () => {
  return (
    <>
      <Header />

      <main className="acercade-container">
        <h1>🤝 Conocenos</h1>

        <section className="historia">
          <h2>50 años creciendo con vos</h2>
          <p>
            En <strong>Casa Nube</strong> llevamos más de cinco décadas acompañando a las familias argentinas, ofreciendo una amplia variedad de productos para el hogar, la vida cotidiana y la tecnología. 
            Desde nuestros inicios, apostamos por brindar calidad, buenos precios y una atención cercana y confiable.
          </p>
        </section>

        <section className="confianza">
          <h2>Una tienda de confianza</h2>
          <p>
            Lo que nos diferencia no es solo lo que vendemos, sino cómo lo hacemos. Construimos relaciones basadas en la honestidad, el respeto y el compromiso con cada cliente. 
            Creemos que comprar debe ser una experiencia sencilla, segura y placentera.
          </p>
        </section>

        <section className="productos">
          <h2>Variedad, calidad y estilo</h2>
          <p>
            Nuestra tienda reúne una selección diversa de productos que se adaptan a todas las necesidades:
          </p>
          <ul>
            <li>👗 Ropa para toda la familia</li>
            <li>📱 Tecnología y electrónica</li>
            <li>🍳 Electrodomésticos grandes y pequeños</li>
            <li>🪑 Artículos para el hogar y decoración</li>
            <li>🎁 Regalos y accesorios para ocasiones especiales</li>
          </ul>
        </section>

        <section className="compromiso">
          <h2>Estamos para ayudarte</h2>
          <p>
            Nuestro equipo está formado por personas que conocen lo que hacen, que escuchan, asesoran y acompañan cada decisión de compra. 
            Ya sea en nuestra tienda física o desde nuestra web, queremos que encuentres eso que buscás, y que vuelvas siempre que lo necesites.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AcercaDe;