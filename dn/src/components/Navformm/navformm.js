import './navformm.css';


function NavFormm() {
  return (
    <nav className="formnav">
        <div className="fondoform">
            <div className="logoform">
                <img src={HoteliaHB} alt=""/>
            </div>
                <div className="j">
                    <h2>Eres más que bienvenido</h2>
                </div>
        </div>
            <a href="login.html" className="item"><button className="salir"><i className="fa-solid fa-arrow-right-from-bracket"></i> Salir</button></a>
        </nav>
  );
}
export default NavFormm;
