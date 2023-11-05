import { useState } from 'react';
import Camera from '../Elements/element';
import './main.css';

function Main() {
   const [view, setView] = useState(false);
   const [text, setText] = useState("View more")
   const moreInfo = () => {
      if (text === "View more") { setText("View less") }
      if (text === "View less") { setText("View more") }
      setView(!view)
   }

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
         {view && <div className='MainCamera'>
            <Camera number='4' />
            <Camera number='5' />
            <Camera number='6' />
         </div>}
         <button className='button-more' onClick={moreInfo}> {text} </button>
      </main>
   )
}

export default Main;