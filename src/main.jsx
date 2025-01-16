import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import PropExmp from "./props/propscomp3";  // Importing the PropExmp component
// import DefaultProps1 from "./props/defaultprops";
//import StateExmpl from "./firstdir/stateexmp";
import ApiSimulation from "./Effect/useeffectclass";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApiSimulation/>
    
  </StrictMode>
);
