
import Counter from "./components/Counter"
import { BrowserRouter, Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>}/>
          <Route path="/counter" element={<Counter/>}/>
           
              <Route path="/mycart" element={<h1>My Cart Page</h1>}/>
                 <Route path="/myorders" element={<h1>Orders Page</h1>}/>
                    <Route path="/settings" element={<h1>Settings Page</h1>}/>
                       <Route path="/profile" element={<h1>Profile Page</h1>}/>
                          <Route path="/logout" element={<h1>Logout Page</h1>}/>
                          <Route path="*" element={<h1>Error: Page not found</h1>}/>

      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
