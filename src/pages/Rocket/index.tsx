import { useQuery } from "@apollo/client"
import React from "react"
import { getRokets } from "../../utils/query"
import { Card } from "react-bootstrap"
import { CommonCard } from "../../style/ship.style"

import Loader from "../../components/Loader"

type rocket = {
  company: string
  country: string
  first_flight: Date
  name: string
  payload_weights: { kg: number }
  id: number
  success_rate_pct: number
}

const Rocket = () => {
  //Queries
  const { data, loading } = useQuery(getRokets)

  if (loading) {
    return <Loader loading={loading} />
  }

  //Render Rockets page
  return (
    <div>
      <CommonCard>
        {data?.rockets?.length > 0 &&
          data?.rockets.map((rocket: rocket) => {
            return (
              <div key={rocket?.id}>
                <Card style={{ width: "18rem", margin: "8px" }}>
                  <Card.Body>
                    <Card.Title>{rocket?.name}</Card.Title>
                    <h6>Company</h6>
                    <Card.Text>{rocket?.company}</Card.Text>
                    <h6>First Flight</h6>
                    <Card.Text>{rocket?.first_flight}</Card.Text>
                    <h6>Success rate</h6>
                    <Card.Text>{rocket?.success_rate_pct} %</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            )
          })}
      </CommonCard>
    </div>
  )
}

export default Rocket
