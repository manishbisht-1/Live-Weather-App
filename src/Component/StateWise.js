import { React, useEffect, useState } from "react";
import "./StateWise.css"
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';


const StateWise = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("delhi");
  

useEffect(()=>{
const fetchApi=async()=>{
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=1eafaa178c55d819eed528922c9df7e9`
  const response=await fetch(url)
const resJson=await response.json();
setCity(resJson.main)
}
  fetchApi();
},[search])

const handle=(e)=>{
  setSearch(e.target.value)
}

  return (
    <div >
    
<div className="cardOuter">
<div className="card text-white bg-info mb-12" >
  <div className="card-header"><h1>Live Weather App </h1></div>
  <div className="card-body">
     
  {/* <div className="inputData"> */}

{/* <input type="search" value={search} className="inputFeild" onChange={handle} /> */}

<div className="input-group">
  <div className="form-outline">
    <input type="search" id="form1" className="form-control" value={search}  onChange={handle}  style={{marginLeft:"80px"}}/>
    <label className="form-label" for="form1" style={{marginLeft:"90px",marginTop:"20px"}}>Search City</label>
    
  </div>
  
</div>

{/* </div> */}
  {!city ? (
  <p>No Data Present</p>
): (<div>
    <h2 className="card-title">{search}</h2>
    <i className="fas fa-street-view fa-5x center" style={{marginRight:"50px"}} ></i><br/><br/>
    <h4 className="card-text">Temp:{city.temp}°cel</h4><br/><br/>
    <h4 className="card-text">min:{city.temp_min}°cel | max:{city.temp_max}°cel</h4>
    <h5 className="card-title">Huimidity:{city.humidity}</h5>
    
    </div>)}
    </div>
</div>
    </div>
    </div>
  );
};

export default StateWise;
