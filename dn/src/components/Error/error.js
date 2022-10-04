import './error.css';
import Nosotres from './nosotres.jpeg'


function Error() {
  return (
    <body className='bodyerror'>
    <section>
      <div className='texto'>
        <h1> ERROR 404</h1>
        <h2>Lo sentimos mucho:c</h2>
      </div>
      <div>
        <img className='img' src={Nosotres}/>
      </div>
      </section>
      </body>
  );
}
export default Error;