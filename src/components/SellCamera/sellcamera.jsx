import './sellcamera.css'
import camera from '../../image/foto.jpg'
import { useDispatch } from 'react-redux';

function Sellcamera({ count, id, price }) {
   const dispatch = useDispatch()


   return (
      <div className='Sellcamera'>
         <div className='title'>
            <img className='imgg' src={camera} alt={'Camera'} />
            <p>Camera</p>
         </div>
         <span className='price'> {price} ₴</span>
      </div>
   )
}

export default Sellcamera;