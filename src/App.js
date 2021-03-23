import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import SingleMovie from './SingleMovie';

function App() {
  return (
    <Router>
      <main>
        <div className='container'>
          <Switch>
            <Route path='/movies/:id'>
              <SingleMovie />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
      </main>
    </Router>
  );
}

export default App;
