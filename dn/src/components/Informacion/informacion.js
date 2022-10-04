import './informacion.css';
import Diana from './diana.jpg'
import Diego from './diego.jpg'
import HNV from './Hotelia negro vertical.svg'
import Iframe  from  'react-iframe';
function Informacion() {
    return (
        <body className='bodyInde'>
        <section id="info">
            <div className="info-text">
                <p>Estamos ubicados en el barrio La Cabrera al norte de Bogotá, en un contexto de
                    lujo donde interactúan los negocios, el ocio y el descanso, gracias a su
                    estratégica ubicación rodeada de bancos, restaurantes de alta cocina, centros
                    comerciales, almacenes de lujo y emblemáticos parques para aprovechar la
                    naturaleza entre la ciudad caminay y hacer un poco de deporte al aire libre están
                    el parque del Virrey y El Parque de la 93. Además de nuestro exclusivo diseño,
                    ponemos a tu disposición una oferta gastronómica tan sofisticada commo
                    saludable a base de productos locales, cargados de lo mejor de la tradición
                    colombiana.
                </p>
            </div>
            <div className="info-image">
                <img src={HNV} alt=""/>
            </div>
        </section>
        <section id="features">
            <h2 class="features-title">Razones por las que disfrutarás quedarte con nosotros</h2>
            <div class="features-description">
                <div class="feature feature-blue">
                    <i class="fa-solid fa-bell-concierge"></i>
                    <p>Lorem ipsum dolor</p>
                </div>
                <div class="feature feature-black">
                    <i class="fa-solid fa-bed"></i>
                    <p>Lorem ipsum dolor</p>
                </div>
                <div class="feature feature-blue">
                    <i class="fa-solid fa-wifi"></i>
                    <p>Lorem ipsum</p>
                </div>
                <div class="feature feature-black">
                    <i class="fa-solid fa-dumbbell"></i>
                    <p>Lorem ipsum</p>
                </div>
            </div>
        </section>
        <section id="location">
            <h2 className="location-tittle">Ubícanos</h2>
            <div className="location-maps">
                <Iframe className="mapa"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2603.668779715141!2d-74.07073232748797!3d4.605737218435465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1658870245530!5m2!1ses!2sco"
                    width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"/>
            </div>
            <div className="location-text">
                <p>AVENIDA CARRERA 8, #12A-42, BOGOTA DC, COLOMBIA</p>
                <hr/>
                <p>+57 601 4567899</p>
            </div>
        </section>

        <div className="title-cards">
            <h2>Nuestros usuarios dicen...</h2>
        </div>
        <section className="card" id="opinion">
            <div className="card__perfil">
                <div className="card__nombre">
                    <img src={Diego} alt=""/>
                </div>
                <div className="nombre">
                    <h3>Diego Rodriguez</h3>

                    <i className="fa-solid fa-star icon"></i>
                    <i className="fa-solid fa-star icon"></i>
                    <i className="fa-solid fa-star icon"></i>
                    <i className="fa-solid fa-star icon"></i>
                    <i className="fa-solid fa-star icon1"></i>
                </div>
                <div className="card__descripcion">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolores perferendis rem ipsam
                        veniam reiciendis eveniet optio eum velit, dignissimos asperiores fugit molestias ipsum
                        temporibus
                        rerum hic iste nulla vitae?</p>
                </div>
            </div>
            <div className="card__perfil">
                <div className="card__nombre">
                    <img src={Diana} alt=""/>
                </div>
                <div className="nombre">
                    <h3>Diana García</h3>
                    <i className="fa-solid fa-star icon"></i>
                    <i className="fa-solid fa-star icon"></i>
                    <i className="fa-solid fa-star icon"></i>
                    <i className="fa-solid fa-star icon"></i>
                    <i className="fa-solid fa-star icon"></i>
                </div>
                <div className="card__descripcion">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolores perferendis rem ipsam
                        veniam reiciendis eveniet optio eum velit, dignissimos asperiores fugit molestias ipsum
                        temporibus
                        rerum hic iste nulla vitae?</p>
                </div>
            </div>
            <div className="card__perfil">
                <div className="card__nombre">
                    <img src={Diego} alt=""/>
                </div>
                <div className="nombre">
                    <h3>Diego Rodriguez</h3>
                    <i className="fa-solid fa-star icon"></i>
                    <i className="fa-solid fa-star icon"></i>
                    <i className="fa-solid fa-star icon"></i>
                    <i className="fa-solid fa-star icon"></i>
                    <i className="fa-solid fa-star icon1"></i>
                </div>
                <div className="card__descripcion">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolores perferendis rem ipsam
                        veniam reiciendis eveniet optio eum velit, dignissimos asperiores fugit molestias ipsum
                        temporibus
                        rerum hic iste nulla vitae?</p>
                </div>
            </div>
        </section>
    </body>
    );
}
export default Informacion;