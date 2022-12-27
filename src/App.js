import React,{useState, useEffect} from "react";
import ColorData from "./data/color.json"
import ColorList from "./components/ColorList.jsx"
import GitUser from "./components/GitUser";

function App() {
  const [colors,setColors] = useState(ColorData);
  const [login, setLogin] = useState(["moontahoe","sangcheol-LEE","xangjong"])

  return (
    <div>
      {
        login?.map((item,i) => (
          <GitUser login={item} key={i}/>
        ))
      }
    </div>
  );
}

export default App;
