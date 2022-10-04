import './footer.css';


function Footer() {
  return (
    <footer>
            <article>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quas eum repellat ab, assumenda</p>
                <div className="iconos">
                    <i className="fa-brands fa-twitter"></i>
                </div>
            </article>
            <article>
                <div className="direccionfoot">
                    <i className="fa-solid fa-ubicacion-dot"></i>
                    <label> Avenida Carrera 8, #12A-42, Bogota dc, Colombia</label>
                </div>
            </article>
            <article>
                <div className="pol">
                    <p>Politicas de privacidad</p>
                    <p>Politicas de privacidad</p>
                </div>
            </article>
        </footer>
  );
}

export default Footer;
