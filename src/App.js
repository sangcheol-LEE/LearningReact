import React,{useState, useEffect} from "react";
import ColorData from "./data/color.json"
import ColorList from "./components/ColorList.jsx"
import Axios from "axios";
import faker from "faker";



function App() {
  const [colors,setColors] = useState(ColorData);
  const [getData, setGetData] = useState("");

  const bigList = [...Array(5000)].map(() => ({
    name : faker.name.findName(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar()
  }))



  return (
    <div></div>
  );
}

export default App;
