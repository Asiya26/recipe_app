import { useState } from "react"
import Home from "./components/home"
import About from "./components/about"
import Contacts from "./components/contacts"
import Navigation from "./components/navigation"
import Details from "./components/details"
import Login from "./components/login"
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App(){
    const[cardObject,setCardObject]=useState('')
    const[loggedInOrNot,setLoggedInOrNot]=useState(false)

    const bringCardObject=(data)=>{
        setCardObject(data)

    }
    return (
        <div className="container">
        <BrowserRouter>
        <Navigation loggedIn={loggedInOrNot} setLoggedInOrNot={setLoggedInOrNot}/>
        <Routes>
            <Route path="/" element={<Home bringCardObject={bringCardObject}/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contacts" element={<Contacts/>} />
            <Route path="/details/recipe" element={<Details cardObject={cardObject}/>} />
            <Route path="/login" element={<Login setLoggedInOrNot={setLoggedInOrNot}/>} />


        </Routes>
        </BrowserRouter>  
        </div>
        
    )
}

export default App;