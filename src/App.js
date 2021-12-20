import logo from './logo.svg';
import './App.css';
import {Header} from "./Compounents/HeaderComponent/HeaderComponent";
import {Route, Router, Switch} from "react-router-dom";


import {createBrowserHistory} from 'history'
import HomeCompounent from "./Compounents/HomeCompounent/HomeCompounent";

export const history = createBrowserHistory()
function App() {
  return (
    <div className="App">
        <Router history={history}>
            <Header/>
            <Switch>
                <Route exact path="/" component={()=><HomeCompounent/>}/>
            </Switch>
        </Router>

    </div>
  );
}

export default App;
