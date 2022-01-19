import { gql } from "@apollo/client"

export const getLaunchesPast = gql`
  query {
    launchesPast(limit: 10) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
      }
    }
  }
`

export const getShips = gql`
  query {
    ships {
      active
      id
      image
      name
      url
      weight_kg
      year_built
      type
      missions {
        name
      }
    }
  }
`

export const getRokets = gql`
  query {
    rockets {
      company
      country
      first_flight
      name
      payload_weights {
        kg
      }
      id
      success_rate_pct
    }
  }
`
