import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Homepage from './home'
import Products from './snacks'

function AppRouter(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/Homepage" element={<Homepage/>}/>
            <Route path="/Products" element={<Products/>}/>

        </Routes>
        </BrowserRouter>
    )
}

export default AppRouter