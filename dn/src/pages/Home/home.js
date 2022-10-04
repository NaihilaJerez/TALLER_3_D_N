import './home.css';
import Nav from '../../components/Nav/nav.js';
import Informacion from '../../components/Informacion/informacion.js';
import Slider from '../../components/Slider/slider.js';
// import Features from '../../components/Features/features.js';
import Footer from '../../components/Footer/footer.js';
function Home() {
    return ( 
        <div>
            <Nav/>
            <Slider/>
            {/* <Features/> */}
            <Informacion/>
            <Footer/>
        </div>
    );
}
export default Home;