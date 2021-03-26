// import logo from './logo.svg';
// import homePageLogo from './assets/logo.svg'
import './App.css';
import Navbar from './components/navbar/navbar';
import HomePage from './components/homepage/homepage';
import Documentation from './components/documentation/documentation';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div> 
        <Navbar/> 
        <Switch>
          <Route path="/" exact component={HomePage}/> 
          <Route path="/docs/" component={Documentation}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
