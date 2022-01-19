import React, { useEffect, useState } from "react"

import { Card } from "react-bootstrap"
import { CommonCard } from "../../style/ship.style"
import { RootStateOrAny, useDispatch, useSelector } from "react-redux"
import { removeFromFavorite } from "../../redux/favoriteSlice"

type mission = {
  name: string
}

type ship = {
  active: Boolean
  id: string
  image: string
  name: string
  weight_kg: number
  url: string
  type: string
  year_built: number
  missions: mission[]
}

const Favorites = () => {
  const [favRockets, setFavRockets] = useState<any>(null)

  const favoriteRockets = useSelector(
    (state: RootStateOrAny) => state.favorite.favoriteShip
  )
  console.log("rokets", favoriteRockets)

  useEffect(() => {
    if (favoriteRockets?.length > 0) {
      setFavRockets(favoriteRockets)
    }
  }, [favoriteRockets])
  const dispatch = useDispatch()

  const handleRemoveToFavorite = async (rocket: ship) => {
    let newFav = favRockets?.filter((i: any) => i.id !== rocket?.id)
    setFavRockets(newFav)
    await dispatch(removeFromFavorite(newFav))
  }

  //Render Rockets page
  return (
    <div>
      <CommonCard>
        {favRockets?.length > 0 &&
          favRockets.map((ship: ship) => {
            return (
              <Card style={{ width: "18rem", margin: "8px" }}>
                <Card.Body>
                  <Card.Img variant="top" src={ship?.image} />
                  <Card.Title>{ship?.name}</Card.Title>
                  <h6>Type</h6>
                  <Card.Text>{ship?.type}</Card.Text>
                  <h6>weight</h6>
                  <Card.Text>{ship?.weight_kg} kg</Card.Text>

                  <h6>Year Built</h6>
                  <Card.Text>{ship?.year_built}</Card.Text>
                  <h6>Status</h6>
                  <Card.Text>
                    {ship?.active ? "Active" : "Deactivate"}
                  </Card.Text>
                  {ship?.url && (
                    <span>
                      <a href={ship?.url} target="_blank" rel="noreferrer">
                        Link to view ship
                      </a>
                    </span>
                  )}
                  <span onClick={() => handleRemoveToFavorite(ship)}>
                    Remove From favorite
                  </span>
                </Card.Body>
              </Card>
            )
          })}
      </CommonCard>
    </div>
  )
}

export default Favorites
