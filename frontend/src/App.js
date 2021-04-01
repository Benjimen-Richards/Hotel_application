import React from "react";
import { Route } from "react-router";
import Addevent from "./Components/Homepage/Addevent";
import Homepage from "./Components/Homepage/Homepage";
import Nullpage from "./Components/Homepage/Nullpage";

const App = () => {
  return (
    <div>
      <Route path="/" exact component={Homepage} />
      <Route path="/addevent" component={Addevent} />
      <Route path="/null" component={Nullpage} />
    </div>
  );
};

export default App;
