import React from "react";
import logo from './logo.svg';
import Zones from './component/Zones'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar,faGlobe,faPoll,faBuilding,faHome,faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CaseList from './component/CaseList';
import Countries from './component/Countries';
import World from './component/World';
import TopDistricts from './component/TopDistricts'
import './App.css';

import Details from './component/Details'

export default function App() {
  return (
    <Router>
      <div className="main">
        <nav className="nav">
          
          <span className="route">
            
              <Link to="/" className="indent"><h2>India <FontAwesomeIcon icon={faHome} className="icon" /></h2></Link>
              
              <Link to="/Districts" className="indent"><h2>Districts <FontAwesomeIcon icon={faBuilding} className="icon" /></h2></Link>
              
              <Link to="/Countries" className="indent"><h2>Countries <FontAwesomeIcon icon={faPoll} className="icon" /></h2></Link>
              
              
              <Link to="/World" className="indent"><h2>World <FontAwesomeIcon icon={faGlobe} className="icon" /></h2></Link>

              <Link to="/Stats" className="indent"><h2>Stats  <FontAwesomeIcon icon={faChartBar} className="icon" /></h2></Link>
              
              <Link to="/Zones" className="indent"><h2>Zones  <FontAwesomeIcon icon={faInfoCircle} className="icon" /></h2></Link>
            </span>
          
        </nav>

        <Switch>
        <Route path="/Districts" >
            <br></br>
            <TopDistricts />
          </Route>
          <Route path="/Zones" >
            <br></br>
            <Zones />
          </Route>

        <Route path="/Stats" >
            <br></br>
            <Details  />
          </Route>

          <Route path="/World" >
            <br></br>
            <World />
          </Route>

          <Route path="/Countries">
          <br></br>
            <Countries />
          </Route>

          <Route path="/">
          <br></br>
          <CaseList />
          </Route>

        </Switch>
        <br></br>
        <br></br>
        {/* <div className="App">
      <header className="App-header">
      <p>
          Made with React 
        </p>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div> */}
      </div>
    </Router>
    
  );
}
