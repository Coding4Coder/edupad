import React, { useEffect, useState } from "react";
import { CovidContainer, MainContainer, NotFound, PageHeading, SearchBox } from "../Components/Styles/Global.style";

const CoronaVirus = () => {

  const[covid, setCovid] = useState([]);
  const[searchCovid, setSearchCovid] = useState("");
  const[filteredResult, setFilteredResult] = useState([]);

  const loadCoronaVirusData = async () => {
   
      await fetch("https://api.covid19api.com/summary")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log(data)
        setCovid(data.Countries);
      })

    }
   
  
  console.log(covid);

  useEffect(() => {
    loadCoronaVirusData();
  },[])

  const searchHandler = (e) =>{
    setSearchCovid(e.target.value);

    if(searchCovid !== "") {

        const filterdData = covid.filter((filterItem) => {
            return Object.values(filterItem).join("").toLowerCase().includes(searchCovid.toLowerCase());
        })
        //now store the filter Items in a varialble
        setFilteredResult(filterdData);
        console.log(filterdData)
      }
    else{
      setFilteredResult(covid);
    }
  }

  return (
    <>
      <PageHeading>Corona Virus Updates</PageHeading>
      <SearchBox 
        autoComplete="off"
        placeholder="Search"
        onChange={ searchHandler }
      />
      <MainContainer>
              <CovidContainer className="header">
                    <div className="item bdr-r"> Country  </div>
                    <div className="item bdr-r"> New Confirmed </div>
                    <div className="item bdr-r"> Total Confirmed </div>
                    <div className="item"> Total Deaths </div>
              </CovidContainer>
          {
            searchCovid.length > 1 ? (
             

              filteredResult.map((corona, index) =>
                  <CovidContainer key={index}>
                      <div className="item bdr-r"> {corona.Country} </div>
                      <div className="item bdr-r"> {corona.NewConfirmed } </div>
                      <div className="item bdr-r"> {corona.TotalConfirmed} </div>
                      <div className="item"> {corona.TotalDeaths} </div>
                  </CovidContainer>
                  )
            ) :
            covid.map((corona, index) =>
            <CovidContainer key={index}>
                <div className="item bdr-r"> {corona.Country} </div>
                <div className="item bdr-r"> {corona.NewConfirmed } </div>
                <div className="item bdr-r"> {corona.TotalConfirmed} </div>
                <div className="item"> {corona.TotalDeaths} </div>
            </CovidContainer>
            )

          }
      </MainContainer>
    </>
  );
};

export default CoronaVirus;
