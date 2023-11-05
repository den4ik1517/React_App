import { Fragment, useState } from "react";
import "./filter.css";
import axios from "axios";

function Filter({ sendDataToParent }) {
   const [memoryValue, setMemoryValue] = useState("Memory");
   const [companyValue, setCompanyValue] = useState("Company");
   const [camera, setcamera] = useState([]);

   const filtercamera = (event) => {
      axios.get("http://localhost:8090/cameras").then((response) => {
         setcamera(response.data)
      });
      event.preventDefault();
      let findcamera = camera;
      let left = parseInt(memoryValue.toString().split(",")[0]);
      let right = parseInt(memoryValue.toString().split(",")[1]);
      if (memoryValue === "Memory" && companyValue === "Company") { findcamera = camera }
      if (memoryValue !== "Memory" && companyValue === "Company") { findcamera = camera.filter((el) => el.memoryCapacity >= left && el.memoryCapacity <= right) }
      if (memoryValue === "Memory" && companyValue !== "Company") { findcamera = camera.filter((el) => el.nameOfManufacturer === companyValue) }
      if (memoryValue !== "Memory" && companyValue !== "Company") { findcamera = camera.filter((el) => el.memoryCapacity >= left && el.memoryCapacity <= right && el.nameOfManufacturer === companyValue) }
      sendDataToParent(findcamera);
   }


   return (
      <Fragment>
         <form>
            <div className="d3">
               <select className="s2" onChange={(event) => { setMemoryValue(event.target.value) }}>
                  <option multiple={true} value={"Memory"}>Memory</option>
                  <option multiple={true} value={["0", "32"]}>To 32 Gb</option>
                  <option multiple={true} value={["32", "64"]}>From 32 to 64</option>
                  <option multiple={true} value={["64", "128"]}>From 64 to 128</option>
                  <option multiple={true} value={["128", "2048"]}>From 128 Gb...</option>
               </select>
            </div>
            <button className="apply" type="submit" onClick={filtercamera}>Apply</button>
         </form>
      </Fragment>
   )
}

export default Filter;