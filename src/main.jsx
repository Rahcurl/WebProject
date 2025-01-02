import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import PropExmp from "./props/propscomp3";  // Importing the PropExmp component
// import DefaultProps1 from "./props/defaultprops";
import StateExmpl from "./firstdir/stateexmp";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StateExmpl/>
    
  </StrictMode>
);
