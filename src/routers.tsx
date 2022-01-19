import Home from "./pages/Home"
import Ships from "./pages/Ships"
import Rockets from "./pages/Rocket"
import { Route, Routes } from "react-router-dom"
import Favorites from "./pages/Favorites"

const ChangeRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ships" element={<Ships />} />
        <Route path="rockets" element={<Rockets />} />
        <Route path="rocket:id" element={<Ships />} />
        <Route path="ships:id" element={<Ships />} />
        <Route path="favorite" element={<Favorites />} />
      </Routes>
    </div>
  )
}

export default ChangeRoute
