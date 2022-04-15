
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header';
import Increment from './Components/PureComponent/Increment';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/increment" element={ <Increment /> }/>
    </Routes>
    </BrowserRouter>
     
    </>
  );
}

export default App;
