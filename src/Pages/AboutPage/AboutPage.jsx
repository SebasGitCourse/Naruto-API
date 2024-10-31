import "./AboutPage.css";
// ACERCA DE
const AboutPage = () => {
  return (
    <div className="div-about">
      <header className="header_1">
        <h1 className="h1-about">Acerca de</h1>
      </header>

      <main className="main-about">
        <section className="about-project">
          <h2 className="h2">Sobre el Proyecto</h2>
          <p className="p">
            Esta aplicación utiliza la API de Naruto para mostrar información
            sobre los personajes, como el nombre, sexo, estado del personaje y
            otras propiedades. Esta aplicacion permite agregar personajes a
            {"FAVORITOS"} , estos personajes son almacenados en una BD NO-SQL
            usando el Servicio de FireBase {" - - "} FireStore.
          </p>
        </section>

        <section className="about-author">
          <h2 className="h2">Sobre mí</h2>
          <p className="p">
            Mi nombre es <strong>Sebastian Ramírez Capera</strong>, estudiante
            de Ingeniería de Sistemas en la
            <strong> Universidad de la Amazonia</strong>. Estoy apasionado por
            el desarrollo de software y las tecnologías emergentes.
          </p>
        </section>

        <section className="social-media">
          <h2 className="h2_">Redes Sociales</h2>
          {/* LISTA DE REDES SOCIALES */}
          <ul className="social-networks-list">
            <li className="li">
              <a
                className="ancla a"
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </li>
            <li className="li">
              <a
                className="ancla b"
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </li>
            <li className="li">
              <a
                className="ancla c"
                href="https://www.whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p className="footer-p">
          &copy; 2024 Sebastian Ramírez Capera. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
};

export default AboutPage;
