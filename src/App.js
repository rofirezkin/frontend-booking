import "./assets/scss/style.scss";
import { createBrowserHistory } from "history";
import { BrowserRouter, Router, Route } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";
import Checkout from "pages/Checkout";
import Example from "pages/Example";
import NotFound from "pages/404";
import "assets/scss/style.scss";

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});

function App() {
  return (
    <div className="App">
      <Router history={history} basename={process.env.PUBLIC_URL}>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/properties/:id" component={DetailsPage} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/example" component={Example} />
      </Router>
    </div>
  );
}

export default App;
