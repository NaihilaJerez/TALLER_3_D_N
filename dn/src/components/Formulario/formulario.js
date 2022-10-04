import './formulario.css';
import { Link } from 'react-router-dom';
import HoteliaN from './Hotelia horizontal negro.svg';
import PropsF from "./PropsF";
import AL from './avatar login.webp';
function Formulario() {
    return (
        <body className="iniciarr">
            <div className="login-box">
                <img className="imagen" src={HoteliaN} alt="Logo de FAzt" />
                <div className="login-form">
                    {/* <h1 className="avatar"><img src={AL}></img></h1> */}
                    <PropsF username='username' />
                    <br />
                    <div>
                        <label for="password">Password</label>
                        <input className="password" type="password" placeholder="Enter Password" />
                    </div>
                    <br />
                    <div>
                        <Link className="iniciar" to="/dashboard">Ingresar</Link>
                    </div>
                    <br />
                    <div>
                        <p>¿No tienes una cuenta?<Link to="/registrar">Registrate aqui</Link></p>
                    </div>
                </div>
            </div>
            <div>
                <Link className="atras" to="/"><i className="fa-solid fa-angle-left">index</i></Link>
            </div>
        </body>
    );
}

export default Formulario;
