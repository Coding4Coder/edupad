

import React, {memo} from 'react';

const ToDo = ({todoUsersData}) => {
    console.log("child rendering")
  return (
    <>
      <h2>Child To Do</h2>
      {
          todoUsersData.map((todo, index) => 
              <p key={index}> {index+1} {todo} </p>
         
            )
      }
    </>
  )
}

export default memo(ToDo);
