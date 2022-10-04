import './form.css';
import { Link } from 'react-router-dom';
import HoteliaB from './Hotelia horizontal blanco.svg';
import Señora from './señora.jpg';

function Formt() {
    return (
<body className="desk">
    <nav className="navdash">
        <div className="fondito">
            <div className="loguito">
                <img src={HoteliaB} alt=""/>
                <div className="datos">
                    <h6>Angie Vargas</h6>
                    <p className="parra">angievargas2@gmail.com</p>
                </div>
            </div>
        </div>
        <div className="options">
            <Link href="#" className="items"><i className="fa-solid fa-bed"></i> Habitaciones</Link><br/>
            <Link href="#" className="items"><i className="fa-solid fa-bell-concierge"></i> Reservas</Link><br/>
            <Link href="#" className="items"><i className="fa-solid fa-bed"></i> Habitaciones</Link><br/>
            <Link href="#" className="items"><i className="fa-solid fa-bell-concierge"></i> Reservas</Link><br/>
        </div>
        <Link to="/" className="item">
        <button className="salir"><i className="fa-solid fa-arrow-right-from-bracket"></i> Salir</button></Link>
    </nav>
    <section className="information">
        <div className="information-image">
            <img src={Señora} alt=""/>
        </div>
        <div className="information-title">
            <h6>Bienvenida, Angie Vargas</h6>
        </div>
        <div className="information-text">
            <div className="tipoid">
                <label>Tipo de documento</label>
                <br/>
                <input placeholder="Cédula de ciudadanía" type="text"/>
                <div className="id">
                    <label for="">Numero de documento</label>
                    <br/>
                    <input placeholder="1025417456" type="text"/>
                </div>
                <div className="name">
                    <label for="">Nombres</label>
                    <br/>
                    <input placeholder="Angie Camila" type="text"/>
                </div>
                <div className="last">
                    <label for="">Apellidos</label>
                    <br/>
                    <input placeholder="Vargas Pinzón" type="text"/>
                </div>
                <div className="date">
                    <label for="">Fecha nacimiento</label>
                    <br/>
                    <input type="date"/>
                </div>
                <div className="country">
                    <label for="">País de origen</label>
                    <br/>
                    <input placeholder="Colombia" type="text"/>
                </div>
                <div className="form-check">
                    <label for="">Genero</label>
                    <div className="genero">
                        <div className="men">
                            <input type="radio" className="hombre"/>
                            <label for="hombre">Hombre</label>
                        </div>
                        <div className="woman">
                            <input type="radio" className="mujer" checked/>
                            <label for="mujer">Mujer</label>
                        </div>
                        <input type="radio" className="otro"/>
                        <label for="otro">Otro</label>
                    </div>
                </div>
                <div className="cel">
                    <label for="">Telefono de contacto</label>
                    <br/>
                    <input placeholder="3125207460" type="text"/>
                </div>
                <div className="mail">
                    <label for="">Email</label>
                    <br/>
                    <input placeholder="angievargas2@gmail.com" type="text"/>
                </div>
                <div className="actu">
                    <button className="cambiar">Actualizar</button>
                </div>
            </div>
            <div>
                <div className="pass">
                    <label for="">Contraseña</label>
                    <br/>
                    <input type="password"/>
                </div>
                <div className="confpass">
                    <label for="">Confirmar contraseña</label>
                    <br/>
                    <input type="password"/>
                </div>
                <div className="camb">
                    <button className="cambiar">Cambiar</button>
                </div>
                <div className="cambpass">
                    <button className="cambiarpass">Cambiar Contraseña</button>
                </div>
            </div>
            </div>
    </section>
</body>
);
}
export default Formt;
