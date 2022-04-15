

import React, { useState } from 'react';
import { MainContainer } from '../Styles/Header.style';
import ToDo from './ToDo';

const Increment = () => {
    const [counter, setCounter] = useState(0);
    const [todo, setToDo] = useState(["todo1", "todo2", "todo3"])

    const incrementClick = () => {
      setCounter(counter+1);
    }

  return (
    <MainContainer>
      <ToDo todoUsersData={todo} />
      <hr />
     Increment : {counter}<br />
     <button className="btn btn-primary" onClick={incrementClick}>+</button>
    </MainContainer>
  )
}

export default Increment;


/// ReactDOM.render(<App />, document.getElementById("root"));