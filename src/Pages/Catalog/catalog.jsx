import { useEffect } from "react";
import { Fragment, useState } from "react";
import Article from "../../components/Article/article";
import Filter from "../../components/Filter/filter";
import "./catalog.css";
import axios from "axios";
import { useCurrency } from "../../components/js/context";

function Catalog() {
   const [search, searchSet] = useState("");
   const [cameraItem, setcameraItem] = useState(useCurrency());
   const [load, setLoad] = useState(true)

   const getValue = (event) => {
      searchSet(event.target.value);
   }

   const sendDataToParent = (cameraFromChildren) => {
      setcameraItem(cameraFromChildren)
   }

   useEffect(() => {
      setInterval(() => setLoad(false), 2500)
   }, [])

   useEffect(() => {
      function findByName() {
         axios.get("http://localhost:8090/cameras").then((response) => {
            if (search === '') {
               setcameraItem(response.data);
            } else {
               let cameraItem = response.data;
               let foundcamera = cameraItem.filter((camera) => {
                  return camera["nameOfManufacturer"].search(search) !== -1
               });
               setcameraItem(foundcamera);
            }
         })
      };
      findByName();
   }, [search])

   return (
      <Fragment>
         <Filter sendDataToParent={sendDataToParent} />
         <main className="articlecamera">
            {load && <div className="loader">Loading...</div>}
            {!load && cameraItem.map((el) => { return <Article key={el.id} number={el.id} text={el.nameOfManufacturer} /> })}
         </main>
      </Fragment>
   );
}

export default Catalog