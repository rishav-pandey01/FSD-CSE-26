import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Home
