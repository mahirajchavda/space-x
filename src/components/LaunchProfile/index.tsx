import * as React from "react"
import { useLaunchProfileQuery } from "../../generated/graphql"
import Loader from "../Loader"
import LaunchProfile from "./LaunchProfile"

interface OwnProps {
  id: string
}

const LaunchProfileContainer: React.FC<OwnProps> = ({ id }) => {
  const { data, error, loading, refetch } = useLaunchProfileQuery({
    variables: { id: id }
  })

  React.useEffect(() => {
    refetch({ id: id })
  }, [refetch, id])

  if (loading) {
    return <Loader loading={loading} />
  }

  if (error) {
    return <div>ERROR</div>
  }

  if (!data) {
    return <div>Select a flight from the panel</div>
  }

  return <LaunchProfile data={data} />
}

export default LaunchProfileContainer
