import React from "react";
import ReactDOM from "react-dom";
import CounterApp from "./CounterApp";
//import PrimeraApp from "./PrimeraApp";

import "./index.css";

const divRoot = document.querySelector("#root");

//ReactDOM: renderizar en el html. (valor/variable?, dónde)
ReactDOM.render(<CounterApp value={10} />, divRoot);
