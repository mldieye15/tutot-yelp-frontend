import { Route, Switch } from "react-router";
import LandingPage from "./LandingPage/LandingPage";
import { Search } from "./Search/Search";

function App() {
  return (
    <Switch>
      <Route path="/search" component={Search} />
      <Route path="/" exact component={LandingPage} />

    </Switch>
  );
}

export default App;
