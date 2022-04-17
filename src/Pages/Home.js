import React, { useEffect, useState } from "react";
import { FaCommentsDollar } from "react-icons/fa";
import { MainContainer, NotFound, PageHeading } from "../Components/Styles/Global.style";

const Home = () => {

  const[users, setUsers] = useState([]);
 
   const loadUsersData = async () => {
     try{
      await fetch("https://randomuser.me/api/?results=20")
      .then((response) => {
        return response.json()
      })
      .then((data) => {
         setUsers(data.results)
      })
    }
      catch(err){
        console.log("DATA ERROR TYPE : ",err);
      }
   }
   console.log(users);


  useEffect(() => {
    loadUsersData();
  }, []);

  return (
    <>
      <PageHeading>Welcome to EduPad</PageHeading>
      <MainContainer>
        {
          users.length == 0 ? <NotFound>Data not loaded</NotFound>
          : (
            <div className="card-columns">
              {
            users.map((user, index) => (
              
            <div className="card" key={index}>
              <img src={user.picture.medium} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{user.name.first} {user.name.last}</h5>
                <p className="card-text">Age : {user.dob.age}</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Ph :  {user.phone} </small>
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
