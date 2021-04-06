import { Route, Switch } from 'react-router-dom';
import './assets/styles/style.scss';
import Home from './pages/Home';
import PortoTwo from './pages/porto/PortoTwo';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/porto2' component={PortoTwo}/>
      </Switch>
    </>
  );
}

export default App;
