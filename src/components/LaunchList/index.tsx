import * as React from "react"
import { useLaunchListQuery } from "../../generated/graphql"
import Loader from "../Loader"
import LaunchList from "./LaunchList"

type Props = {
  handleIdChange: (newId: string) => void
}

const LaunchListContainer: React.FC<Props> = ({ handleIdChange }) => {
  const { data, error, loading } = useLaunchListQuery()

  if (loading) {
    return <Loader loading={loading} />
  }

  if (error || !data) {
    return <div>ERROR</div>
  }

  return <LaunchList data={data} handleIdChange={handleIdChange} />
}

export default LaunchListContainer
