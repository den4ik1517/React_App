import img from "../../image/foto.jpg";
import { useNavigate } from "react-router-dom";
import "./article.css";

function Article({ number, text }) {


   const navigate = useNavigate();
   const navigateItem = () => {
      navigate(`/catalog/${number}`);
   }

   return (
      <div className="cameraItem">
         <p className="item">Camera {number}</p>
         <img className="imgcam" src={img} alt={"img"} />
         <div className="textcamera">
            <h2 className="text">{text}</h2>
            <span>There should be some description</span>
         </div>
         <button className="view" onClick={navigateItem}>View more</button>
      </div>
   )
}

export default Article;