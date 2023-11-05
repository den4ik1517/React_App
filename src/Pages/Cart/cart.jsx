import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Sellcamera from "../../components/SellCamera/sellcamera";
import './cart.css'

function Cart() {

   const camera = useSelector(state => state.product.cart)

   const navigation = useNavigate();

   const goBack = () => {
      navigation(-1)
   }


   return (
      <div className="Cart">
         {camera.map((el) => {
            return <Sellcamera
               key={el.id}
               count={el.quantity}
               id={el.id}
               price= '12990' />
         })}
         <div className="button">
            <button className="back" onClick={goBack}> Go Back </button>
         </div>
      </div>
   )
}

export default Cart;