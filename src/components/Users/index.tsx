import React from "react"
import { useInsertUserMutation } from "../../generated/graphql"

const User = () => {
  const [insertUser] = useInsertUserMutation()

  const addUser = async () => {
    await insertUser({
      variables: {
        input: {
          name: "New",
          rocket: "New Rocket"
        }
      }
    })
  }

  return (
    <div>
      <button onClick={addUser}>Add user</button>
    </div>
  )
}

export default User
