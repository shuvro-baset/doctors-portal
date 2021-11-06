
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route>
            
          </Route>

        </Switch>
      </Router>
    </>
  );
}

export default App;
