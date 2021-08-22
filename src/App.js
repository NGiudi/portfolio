import { BrowserRouter, Route, Switch } from 'react-router-dom';

// imports pages.
import Portfolio from "./pages/Portfolio/Portfolio";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Portfolio} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
