import {useState} from "react"
import "./UserHandler.css"
import Login from "../login/login"
import Register from "../register/register"

export default function UserHandler({}){
const [showLogin, setShowLogin] = useState(true)

    return(
            <div className="absolute bg-white/50 top-[5rem] left-[0rem] rounded-lg text-center text-xl z-20 p-[10px] justify-center w-[100%] h-[800px] overflow-hidden ">
            <h1 class="bare_segment"><span id="one">PESU</span><span id="two"> Cafe</span></h1>
            <h3>🍴📱 Order your snacks and beverages <br/>from the PESU Cafeteria with
                ease! 🍔🍟</h3>
                <Login/>
            </div>
    )
}