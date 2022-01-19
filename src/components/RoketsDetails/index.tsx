import React from "react"
import { Card } from "react-bootstrap"
import { CommonCard } from "../../style/ship.style"

type AppProps = {
  rokets: Array<any>
}
const RoketsDetails = ({ rokets }: AppProps) => {
  return (
    <CommonCard>
      {rokets?.length > 0 &&
        rokets.map((rocket: any) => {
          return (
            <div>
              <Card style={{ width: "18rem", margin: "8px" }}>
                <Card.Body>
                  <Card.Title>{rocket?.name}</Card.Title>
                  <h6>Company</h6>
                  <Card.Text>{rocket?.company}</Card.Text>
                  <h6>First Flight</h6>
                  <Card.Text>{rocket?.first_flight}</Card.Text>
                  <h6>Success rate</h6>
                  <Card.Text>{rocket?.success_rate_pct}</Card.Text>
                  <span>Add to Favorites</span>
                </Card.Body>
              </Card>
            </div>
          )
        })}
    </CommonCard>
  )
}

export default RoketsDetails
