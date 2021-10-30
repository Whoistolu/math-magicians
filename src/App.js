import { Switch, Route } from 'react-router-dom';
import Calculator from './components/calculator';
import Header from './components/Header';
import Home from './components/Homepage';
import Quote from './components/Quote';

const App = () => (
  <>
    <Header />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/calculator">
        <Calculator />
      </Route>
      <Route path="/quote">
        <Quote />
      </Route>
    </Switch>
  </>
);

export default App;
