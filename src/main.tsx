import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { SimpleForm } from "./useEffect/SimpleForm";
// import { CounterAppWithCustomHook } from "./useState/CounterAppWithCustomHook";
// import { HooksApp } from "./HooksApp";
// import { CounterApp } from "./useState/CounterApp";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <HooksApp /> */}
    {/* <CounterApp /> */}
    {/* <CounterAppWithCustomHook /> */}
    <SimpleForm />
  </React.StrictMode>
);
