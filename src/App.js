import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./home/Home";


import { Route, Routes } from "react-router-dom";
import Det from "./component/details/Det";
import Search from "./component/search/Search";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route exact path="/cat/:id" element={<Det></Det>}></Route>
        <Route exact path="/search/" element={<Search></Search>}></Route>
      </Routes>
    </div>
  );
}

export default App;
