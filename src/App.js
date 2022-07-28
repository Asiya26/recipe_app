import Home from "./components/home"
import About from "./components/about"
import Contacts from "./components/contacts"
import Navigation from "./components/navigation"
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App(){
    return (
        <div className="container">
        <BrowserRouter>
        <Navigation />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contacts" element={<Contacts/>} />
        </Routes>
        </BrowserRouter>  
        </div>
        
    )
}

export default App;