import './registrar.css';
import { Link } from 'react-router-dom';
import HoteliaB from './Hotelia horizontal blanco.svg'

function Registro() {
    return (
<body class="formularioo">
    <nav class="navformu">
        <div class="fondoo">
            <div class="logoo">
                <img src={HoteliaB} alt=""/>
            </div>
                <div class="bien">
                    <h5>Eres más que
                        <br/>bienvenido</h5>
                </div>
        </div>
            <Link to="/" class="item"><button class="salir"><i class="fa-solid fa-arrow-right-from-bracket"></i> Salir</button></Link>
        </nav>
        <section class="informu">
            <div class="informu-title">
                <h5>Registrarse</h5>
            </div>
            <div class="informu-text">
                <div class="tipoform">
                    <label for="cars">Tipo de documento</label>
                    <br/>
                        <select name="tipo" class="tipo">
                            <option value="escoger" selected>Escoja una opcion</option>
                            <option value="cedula">Cedula de ciudadania</option>
                            <option value="tarjeta">Tarjeta de identidad</option>
                        </select>
                </div>
                    <div class="idform">
                        <label for="">Numero de documento</label>
                        <br/>
                        <input type="text"/>
                    </div>
                    <div class="nameform">
                        <label for="">Nombres</label>
                        <br/>
                        <input  type="text"/>
                    </div>
                    <div class="lastform">
                        <label for="">Apellidos</label>
                        <br/>
                        <input type="text"/>
                    </div>
                    <div class="dateform">
                        <label for="">Fecha nacimiento</label>
                        <br/>
                        <input class="datein" type="date"/>
                    </div>
                    <div class="form-checkform">
                        <label for="">Genero</label>
                        <div class="genero">
                            <div class="men">
                                <input type="radio" class="hombre"/>
                                <label for="hombre">Hombre</label>
                            </div>
                            <div class="woman">
                                <input type="radio" class="mujer" checked/>
                                <label for="mujer">Mujer</label>
                            </div>
                            <input type="radio" class="otro"/>
                            <label for="otro">Otro</label>
                        </div>
                    </div>
                    <div class="countryform">
                        <label for="">País de origen</label>
                        <br/>
                        <input type="country"/>
                    </div>
                    <div class="celform">
                        <label for="">Telefono de contacto</label>
                        <br/>
                        <input type="text"/>
                    </div>
                    <div class="mailform">
                        <label for="">Email</label>
                        <br/>
                        <input type="text"/>
                    </div>
                    <div class="photo">
                        <label for="">Foto</label>
                        <br/>
                        <input class="fotoo" type="file"/> 
                    </div>
                </div>
                <div>
                    <div class="passform">
                        <label for="">Contraseña</label>
                        <br/>
                        <input type="password"/>
                    </div>
                    <div class="confpassform">
                        <label for="">Confirmar contraseña</label>
                        <br/>
                        <input type="password"/>
                    </div>
                    <div class="condiciones">
                            <input type="checkbox"/>
                            <label>Acepto Terminos y condiciones</label>
                    </div>
                    <div class="cambform">
                        <Link to="/dashboard" class="cambiar">Ingresar</Link>
                    </div>    
                </div>
        </section>
</body>

    );
}

export default Registro;
