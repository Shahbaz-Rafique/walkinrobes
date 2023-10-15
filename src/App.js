import Home from "./Components/home";
import Products from "./Components/products";
import {Switch,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/products" component={Products}/>
      </Switch>
    </div>
  );
}

export default App;
