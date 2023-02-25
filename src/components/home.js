//import './Home.js';
import React from 'react'
import "./Home.css"
import pes from "./peslogo.jpg";
const logo192=new URL("./logo192.webp",import.meta.url)
//const pes=new url("./peslogo.jpg",import.meta.url)

function App() {
  return (
    <div className="bg-text">
          <h1>WELCOME TO PESU CAFETERIA</h1>
          <p>For the Foodies</p>
          <div class="img">
            <img src={pes}/>
          </div>
          <div class="bg-img">
              <img src={logo192}/>
          </div>
    </div>
  );
}

export default App;