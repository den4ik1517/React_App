import Camera from '../Elements/element.jsx';
import './main.css';

function Main() {
   return (
      <main className='Main'>
         <div className='MainInformation'>
            <div>
               <h1 className=' Title'> Our Cameras </h1>
               <p className='Par'>Our models</p>
            </div>
         </div>
         <div className='MainCamera'>
            <Camera number='1' />
            <Camera number='2' />
            <Camera number='3' />
         </div>
         <button className="button">View more</button>
      </main>
   );
}

export default Main;