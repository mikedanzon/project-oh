import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import './assets/styles/style.scss';
import PortoTwo from './components/portotwo';

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
