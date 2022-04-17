
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header';
import Increment from './Components/PureComponent/Increment';
import CoronaVirus from './Pages/CononaVirus';
import Home from './Pages/Home';
import PageNotFound from './Pages/PageNotFound';
import TodayInHistory from './Pages/TodayInHistory';
import TopNews from './Pages/TopNews';
import Weather from './Pages/Weather';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/" element={ <Home /> }/>
      <Route path="/increment/" element={ <Increment /> }/>
      <Route path="/weather/" element={ <Weather /> }/>
      <Route path="/corona-virus/" element={ <CoronaVirus/> }/>
      <Route path="/top-news/" element={ <TopNews /> }/>
      <Route path="/today-in-history/" element={ <TodayInHistory /> }/>
      <Route path="*" element={ <PageNotFound /> }/>
    </Routes>
    </BrowserRouter>
     
    </>
  );
}

export default App;
