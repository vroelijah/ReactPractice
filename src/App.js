import logo from './logo.svg';
import './App.css';
import Home from "./Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
      <Route pathname ="/Home">
<Home></Home>

      </Route>
      </Router>
    </div>
  );
}

export default App;
