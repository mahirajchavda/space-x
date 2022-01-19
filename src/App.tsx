import React from "react"
import "./App.css"
import Navigation from "./components/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import ChangeRoute from "./routers"

function App() {
  return (
    <div>
      <Navigation />
      <ChangeRoute />
    </div>
  )
}

export default App
