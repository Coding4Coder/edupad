import React, { useEffect, useState } from "react";
import { FaCommentsDollar } from "react-icons/fa";
import { MainContainer, NotFound, PageHeading, SearchBox } from "../Components/Styles/Global.style";

const Home = () => {

  const[items, setItems] = useState([]);
  const[searchInput, setSearchInput] = useState("");
  const[filterdResults, setFilterdResults] = useState([]);
 
   const loadItemsData = async () => {
     try{
      await fetch(`https://fakestoreapi.com/products`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setItems(data)
      })
    }
      catch(err){
        console.log("DATA ERROR TYPE : ",err);
      }
   }
   //console.log(items);


  useEffect(() => {
    loadItemsData();
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
   // console.log(searchValue);

    if(searchInput !== ""){

        const filterdData = items.filter((fitem) => {
          return Object.values(fitem).join("").toLowerCase().includes(searchInput.toLowerCase());
         
        })
      
        setFilterdResults(filterdData);
        console.log("filter data", filterdData.length)
       
  }
    else {
      setFilterdResults(items);
    }

  }

  console.log(filterdResults);
   

  return (
    <>
      <PageHeading>Welcome to EduPad: <br />
      <p>
        {filterdResults.length}
      </p>
      </PageHeading>
      <SearchBox 
      type="text" 
      name="search" 
      autoComplete="off"
      placeholder="Search Products"
      onChange={(e) => searchItems(e.target.value) } 
      />

     
      <MainContainer>

        {
          searchInput.length > 1 ? 
          (
            <div className="card-columns">
            {
              filterdResults.map((item, index) => (
              <div className="card" key={index}>
                <img src={item.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.category}</h5>
                  <p className="card-text">{item.description.split(" ", 10).join(" ")}</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Price $ - {item.price}</small>
                </div>
              </div>  
              ))
          } 
          </div>
          )
          : (
            <div className="card-columns">
              {
                items.map((item, index) => (
                <div className="card" key={index}>
                  <img src={item.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.category}</h5>
                    <p className="card-text">{item.description.split(" ", 10).join(" ")}</p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">Price $ - {item.price}</small>
                  </div>
                </div>  
                ))
            } 
            </div>
          )
        }
        

      </MainContainer>
    </>
  );
};

export default Home;
