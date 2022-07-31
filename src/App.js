import routes from "./routes";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Routes>
          {routes.map(({ path, component: Component, exact }, key) => (
            <Route
              key={key}
              exact={exact}
              path={`${path}`}
              element={<Component />}
            />
          ))}
          {/* <Navigate from={"*"} to="/home" /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
