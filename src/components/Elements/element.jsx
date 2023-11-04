import './element.css';
import foto from '../../image/foto.jpg'

function Camera(props) {
   return (
      <div className='Camera'>
         <img src={foto} alt='camera' />
         <h2 className='Cam'>Camera</h2>
         <h3 className='Mod'>model {props.number}</h3>
         <p>bla bla bla</p>
      </div>
   )
}

export default Camera;