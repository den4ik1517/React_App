import Camera from '../Elements/element.jsx';
import './main.css';

function Main() {
   return (
      <main className='Main'>
         <div className='MainInformation'>
            <div>
               <h1 className=' Title'> Our Cameras </h1>
               <p className='Par'>There are all our models</p>
            </div>
         </div>
         <div className='MainCamera'>
            <Camera number='1' />
            <Camera number='2' />
            <Camera number='3' />
         </div>
      </main>
   );
}
export default Main;