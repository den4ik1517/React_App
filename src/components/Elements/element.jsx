import './element.css';
import foto from '../../image/foto.jpg'

function Camera(props) {
   return (
      <div className='Camera'>
         <img src={foto} alt='img' />
         <h2 className='Cam'>Camera</h2>
         <h3 className='Mod'>model {props.number}</h3>
         <p>There should be some description</p>
      </div>
   )
}

export default Camera;