import logo from './logo.svg';
import './App.css';
import {Header} from "./Compounents/HeaderComponent/HeaderComponent";
import {Route, Router, Switch} from "react-router-dom";


import {createBrowserHistory} from 'history'
import HomeCompounent from "./Compounents/HomeCompounent/HomeCompounent";
import {Footer} from "./Compounents/FooterComponent/FooterComponent";

export const history = createBrowserHistory()
function App() {
  return (
    <div className="App">
        <Router history={history}>
            <Header/>
            <Switch>
                <Route exact path="/" component={()=><HomeCompounent/>}/>
            </Switch>
            <Footer/>
        </Router>

    </div>
  );
}

export default App;
