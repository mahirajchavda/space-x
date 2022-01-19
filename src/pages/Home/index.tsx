import React from "react"
import LaunchListContainer from "../../components/LaunchList"
import LaunchProfile from "../../components/LaunchProfile"
import User from "../../components/Users"
import { HomeStyle } from "../../style/home.style"

const Home = () => {
  const [id, setId] = React.useState("13")

  const handleIdChange = React.useCallback((newId) => {
    setId(newId)
  }, [])

  return (
    <>
      <User />
      <HomeStyle>
        <LaunchListContainer handleIdChange={handleIdChange} />
        <LaunchProfile id={id} />
      </HomeStyle>
    </>
  )
}

export default Home
