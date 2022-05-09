import React from "react";
import { MainContainer, PageHeading } from "../Components/Styles/Global.style";

import {Button, TextField, Tooltip} from "@material-ui/core";

const TodayInHistory = () => {

 // output of sum(20)(30)(40)(50);

//  const sumNumber = (a) => {
//    return (b) => {
//      return (c) => {
//        return (d)=> {
//          return a+b+c+d;
//        }
//      }
//    }
//  }
// console.log(sumNumber(20)(30)(40)(50));

// const sumNumber = (a) => (b) =>  (c) => (d) =>  a+b+c+d;
      
// console.log(sumNumber(20)(30)(40)(50));

//foreach,  some, every method

// const num = [5, 10, 20, 25, 50];

  // num.forEach((elem, index) => {
  //   console.log(elem);
  // });
  // num.join("")
  // console.log(num);

//   const num = [12, 11, 20, 25, 50];
//    let newNum = num.every((elm)=>{
//      return elm % 5 === 0 ;
//    })
// console.log(newNum);

//promoise
// flatten an arrary
const twoDArr = [ [1,2], [3,4], [5,6], [7,8] , [9,10] ];

const oneDArr = twoDArr.reduce((initVal, currVal) => {
  return initVal.concat(currVal);
})
console.log(oneDArr);






  return (
    <>
      <PageHeading>Today In History</PageHeading>
      <MainContainer>
         <TextField id="outlined-basic" label="Outlined" variant="outlined" /><br /><br />

          <Button variant="outlined" color="secondary" >I am nice button </Button><br /><br />
          <Tooltip title="I am a tool top">
                <h2>hello</h2>
          </Tooltip>

      </MainContainer>
    </>
  );
};

export default TodayInHistory;
