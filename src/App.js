import './App.css';
import { BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
import Home from './pages/Home/Home';
import NavBar from './components/NavBar/NavBar';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route>
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
