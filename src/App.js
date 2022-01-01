import logo from './logo.svg';
import './App.css';
import {Header} from "./Compounents/HeaderComponent/HeaderComponent";
import {Route, Router, Switch} from "react-router-dom";


import {createBrowserHistory} from 'history'
import HomeCompounent from "./Compounents/HomeCompounent/HomeCompounent";
import {Footer} from "./Compounents/FooterComponent/FooterComponent";
import SearchCompounent from "./Compounents/SearchCompounent/SearchCompounent";
import SignUpCompounent from "./Compounents/SignUpCompounent/SignUpCompounent";
import {Contact} from "./Compounents/ContactUsComponent/ContactUsComponent";
import Presentation from "./Compounents/PresentationCompounent/PresentationCompounent";
import AdDetails from "./Compounents/AdDetailsCompounent/AdDetails";
import ProfileCompounent from "./Compounents/ProfileCompounent/ProfileCompounent";

export const history = createBrowserHistory()
function App() {
  return (
    <div className="App">
        <Router history={history}>
            <Header/>
            <Switch>
                <Route exact path="/" component={()=><HomeCompounent/>}/>
                <Route exact path="/search" component={()=><SearchCompounent/>} />
                <Route exact path="/ad/:adId" component={()=><AdDetails/>} />
                <Route exact path="/signup" component={()=><SignUpCompounent/>} />
                <Route exact path="/contact" component={()=><Contact/>} />
                <Route exact path="/presentation" component={()=><Presentation/>} />
                <Route exact path="/profile" component={()=><ProfileCompounent/>} />

            </Switch>
            <Footer/>
        </Router>

    </div>
  );
}

export default App;
