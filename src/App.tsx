import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import ApiClient from './containers/apiclient/index'
import PageNotFound from './containers/pagenotfound/index'

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={ApiClient}/>
            {/* <Route path="/repos" component={Repos}/> */}
            {/* <Route path="/about" component={About}/> */}
            <Route path="/" component={PageNotFound}/>
          </Switch>
          
        </Router>
    </div>
  );
}

export default App;
