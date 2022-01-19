import { useQuery } from "@apollo/client"
import React from "react"

import { Card } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { addToFavorite } from "../../redux/favoriteSlice"
import { CommonCard } from "../../style/ship.style"
import { getShips } from "../../utils/query"
import Loader from "../../components/Loader"

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

const Ships = () => {
  //Queries
  const { data, loading } = useQuery<any>(getShips)
  const dispatch = useDispatch()

  const handleAddToFavorite = async (ship: ship) => {
    await dispatch(addToFavorite(ship))
  }

  if (loading) {
    return <Loader loading={loading} />
  }

  //Render ships page
  return (
    <div>
      {data?.ships?.length > 0 && (
        <CommonCard>
          {data?.ships?.length > 0 &&
            data?.ships.map((ship: ship) => {
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
                    <span onClick={() => handleAddToFavorite(ship)}>
                      Add to Favorites
                    </span>
                  </Card.Body>
                </Card>
              )
            })}
        </CommonCard>
      )}
    </div>
  )
}

export default Ships
