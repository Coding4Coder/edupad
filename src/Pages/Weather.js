
import React, { useEffect, useState } from "react";
import { 
  MainContainer, 
  PageHeading, 
  NotFound,
  CityName
 } from "../Components/Styles/Global.style";
import {FaBuilding, FaCloudSun, FaCloudMeatball} from "react-icons/fa";
import SearchBar from "material-ui-search-bar";

const Weather = () => {
  const [cityName, setCityName] = useState("Delhi");
  const [tempData, setTempData] = useState();

  const inutChangeHandler = (e) => {
      console.log("value", e.target.value )
        setCityName(e.target.value);
  }

  const getData = async () => {
   
    const myurl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=34127472731d7bc8d3f2fbe7e9025232`;
     let result = await fetch(myurl);
     let response = await result.json();
     console.log(response);
     setTempData(response.main);
    
  }
  console.log("my data", tempData)

  useEffect(() => {
       getData();
  }, [cityName])


  return (
    <>
      <PageHeading>Weather</PageHeading>
      <MainContainer className="cloudBg">
        <input 
        type="text" 
        className="searchBox" 
        autoComplete="off" 
        name="cityName" 
        value={ cityName } 
        onChange={ inutChangeHandler } />
       
        {
          !tempData ? (
          <NotFound> Invalid City! Please Enter Valid City / Country !! </NotFound>) : (
            <>
            <CityName>
              <span> <FaBuilding /></span> {cityName} <br />
              <span> <FaCloudSun /> Temperature:</span> {tempData.temp} <sup>o</sup>Cel <br />
              <div className="minMax">
              <span>  Min:</span>{tempData.temp_min} <sup>o</sup>Cel | <span>Max:</span>{tempData.temp_max} <sup>o</sup>Cel  
              </div>
              <span> <FaCloudMeatball /> Humidity:</span> {tempData.humidity}

              </CityName>
           
            </>
          )
        }

      
     
      </MainContainer>
    </>
  );
};

export default Weather;
