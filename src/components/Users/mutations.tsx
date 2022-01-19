import { gql } from "@apollo/client"

export const ADD_USER = gql`
  mutation insertUser($input: [users_insert_input!]!) {
    insert_users(objects: $input) {
      affected_rows
    }
  }
`
