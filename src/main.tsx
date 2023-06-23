import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { Padre } from "./07-tarea-memo/Padre";
// import { CallBackHook } from "./06-memos/CallBackHook";
// import { MemoHook } from "./06-memos/MemoHook";
// import { Memorize } from "./06-memos/Memorize";
// import { Layout } from "./05-useLayoutEffect/Layout";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
// import { FormCustomHook } from "./02-useEffect/FormCustomHook";
// import { SimpleForm } from "./useEffect/SimpleForm";
// import { CounterAppWithCustomHook } from "./useState/CounterAppWithCustomHook";
// import { HooksApp } from "./HooksApp";
// import { CounterApp } from "./useState/CounterApp";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Padre />
  </React.StrictMode>
);
