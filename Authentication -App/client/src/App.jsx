import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./Components/Home"
import Counter from "./Components/Counter"

import Stopwatch from "./Components/Stopwatch"
import "./App.css"
import Login from "./Components/Login"
const App = () => { 
  return (
    <div>
      <BrowserRouter>
      <Routes>
       <Route path="/user" element={<Home />}/>
       <Route path="counter" element={<Counter />}/>
       <Route path="stopwatch" element={<Stopwatch />}/>
       <Route path="store" element={<h1>My Store</h1>}/>
       <Route path="/" element={<Login />}/>
       <Route path="logout" element={<Logout />}/>
       <Route path="*" element={<h1>404 Page Not Found</h1>}/>
       
       

        </Routes>
       </BrowserRouter>
      
     </div>
  )
}

export default App
