import React from "react"
import { Card } from "react-bootstrap"
import { CommonCard } from "../../style/ship.style"

type AppProps = {
  ships: Array<any>
}
const ShipsDetails = ({ ships }: AppProps) => {
  return (
    <CommonCard>
      {ships?.length > 0 &&
        ships.map((item: any) => {
          return (
            <Card style={{ width: "18rem", margin: "8px" }}>
              <Card.Body>
                <Card.Img variant="top" src={item?.image} />
                <Card.Title>{item?.name}</Card.Title>
                <h6>Type</h6>
                <Card.Text>{item?.type}</Card.Text>
                <h6>weight</h6>
                <Card.Text>{item?.weight_kg} kg</Card.Text>
                <h6>Link</h6>
                <Card.Text>{item?.url}</Card.Text>
                <h6>year_built</h6>
                <Card.Text>{item?.year_built}</Card.Text>
              </Card.Body>
            </Card>
          )
        })}
    </CommonCard>
  )
}

export default ShipsDetails
