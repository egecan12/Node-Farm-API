import "./App.css";
import OverviewPage from "./components/component.overview";
import CardPage from "./components/component.card";

import { Fragment } from "react";
function App() {
  return (
    <Fragment>
      <div className="App">
        <header className="App-header">
          <OverviewPage />
        </header>
      </div>
    </Fragment>
  );
}

export default App;
