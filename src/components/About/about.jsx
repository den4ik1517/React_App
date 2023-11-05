import { useNavigate } from "react-router-dom";
import img from "../../image/foto.jpg";
import './about.css';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useCurrency } from "../../components/js/context";
import { addToCart } from "../../components/Store/slice";


function About() {

   const navigation = useNavigate();
   const [camera, setCamera] = useState(useCurrency())
   const dispatch = useDispatch()

   const goBack = () => {
      navigation(-1)
   }
   const addElementToCart = () => {
      let id = parseInt(window.location.pathname.split(/.catalog./)[1]) - 1
      dispatch(addToCart(camera[id]))
   }
   return (
      <main className="Information">
         <div className="main">
            <img className="icam" src={img} alt="img for camera" />
            <div className="textInformation">
               <div className="textInformation--main">
                  <h1 className="h11">Title </h1>
                  <span className="span1">There should be description but i don't know what can i write there </span>
               </div>
            </div>
         </div>
         <div className="Navigation">
            <p className="p1">Price 12990 ₴</p>
            <div className="d2">
               <button className="goback" onClick={goBack}>Go Back</button>
               <button className="goback2" onClick={addElementToCart}>Add camera</button>
            </div>
         </div>
      </main>
   )
}

export default About;