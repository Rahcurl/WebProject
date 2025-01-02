import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import PropExmp from "./props/propscomp3";  // Importing the PropExmp component
import DefaultProps1 from "./props/defaultprops";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DefaultProps1 />  
    <br />
    <DefaultProps1 var1={true}/>
    <br />
    <DefaultProps1 var2="Yellow" />
    <br />
    <DefaultProps1 var3={"New Text"} />
    <br />
    <DefaultProps1 var1={true} var2={"green"} var3={"abc"} />
  </StrictMode>
);
