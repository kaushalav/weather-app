
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react";
import './App.css';

function App() {


  const apiKey = "f56f24967aaf51182d1d4df628297c6d"
  const [inputCity, setInputCity] = useState("patna")
  const [tempInfo,setTempInfo]=useState({});


  const getWetherDetails = async() => {
    try{
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + inputCity + "&units=metric&appid=" + apiKey
    const d= await fetch(apiURL);
    const res= await d.json();
    console.log(res);
      const{temp}=res.main;
      const{name}=res;
      const{country}=res.sys;
      const myWeatherInfo={
        temp,name,country
      }
      setTempInfo(myWeatherInfo);
    }catch(err){
      console.log("err", err)
    }
  }

  useEffect(()=>{
    getWetherDetails();
  }
  ,[])


  return (
    <div className=" shadow rounded">
      <div className="col-md-12 wetherBg">
      
        <h1 className="heading">Weather App</h1>

        <div className="d-grid gap-3 col-4 mt-4">
          <input type="text" className="form-control"
            value={inputCity}
            onChange={(e)=>setInputCity(e.target.value)} />
          <button className="btn btn-primary" type="button"
            onClick={getWetherDetails}
          >Search</button>
        </div>
      </div>

      
        <div className="col-md-12 text-center mt-5 wetherResultBox">

        
            <img className="weathorIcon"
              src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" />

            <h5 className="weathorCity">
              {tempInfo.name}, {tempInfo.country}
            </h5>
            <h6 className="weathorTemp">{tempInfo.temp}°C</h6>
          </div>
     </div>
      

  
    
    
  );
}

export default App;
