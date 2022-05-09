
import React, { useEffect, useState } from 'react';
import { CovidContainer, MainContainer, NotFound, PageHeading, SearchBox } from "../Components/Styles/Global.style";

const CononaVirus = () => {

  const[coronaData, setCoronaData] = useState([]);
  const[inputSearch, setInputSearch] = useState("");
  const[filteredResult, setFilteredResult] = useState([]);


 const loadCoronaData = async () => {
   try{
        await fetch(`https://api.covid19api.com/summary`)
        .then((response) => {
         // console.log(response);
          return response.json();
        })
        .then((data) => {
          setCoronaData(data.Countries);
         // console.log(data.Countries);
        })
   }
   catch(err) {
     console.log("Data Not Loading", err);
   }
 }

 //console.log(coronaData);


  useEffect(() => {
     loadCoronaData();
  }, []);

 const onChangeHandler = (e) => {
        setInputSearch(e.target.value);
       // console.log(inputSearch);
    if(inputSearch !== "")
    {

       const filterdData = coronaData.filter((filterData) => {
                  return Object.values(filterData).join("").toLowerCase().includes(inputSearch.toLowerCase());
       })
        console.log(filterdData);
        setFilteredResult(filterdData)
      }
      else {
        setFilteredResult(coronaData)
      }

 }



  return (
    <>
          <PageHeading>Corona Virus Updates</PageHeading>
              <SearchBox
              type="text"
              autoComplete="off"
              placeholder="Search"
              value={inputSearch}
              onChange={ onChangeHandler }
              />

          <MainContainer>
                 <CovidContainer className='header'>
                    <div className="item"> Country </div>
                    <div className="item"> New Confirmed </div>
                    <div className="item"> New Deaths </div>
                    <div className="item"> Total Confirmed </div>
                  </CovidContainer>


             {
                inputSearch.length > 1 ? (
                  filteredResult.map((covid, index) => 
                  <CovidContainer key={index}>
                    <div className="item"> { covid.Country }</div>
                    <div className="item"> { covid.NewConfirmed }</div>
                    <div className="item"> { covid.NewDeaths }</div>
                    <div className="item"> { covid.TotalConfirmed }</div>
                  </CovidContainer>
               )
                ) : (
                  coronaData.map((covid, index) => 
                  <CovidContainer key={index}>
                    <div className="item"> { covid.Country }</div>
                    <div className="item"> { covid.NewConfirmed }</div>
                    <div className="item"> { covid.NewDeaths }</div>
                    <div className="item"> { covid.TotalConfirmed }</div>
                  </CovidContainer>
               )
                )
             }
             
          </MainContainer>
      </>
  )
}

export default CononaVirus;
