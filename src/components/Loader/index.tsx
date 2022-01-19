import React from "react"
import { Grid } from "react-loader-spinner"
import { LoaderStyles } from "../../style/ship.style"

type Props = {
  loading: boolean
}

const Loader: React.FC<Props> = ({ loading }) => {
  return (
    <LoaderStyles>
      {loading && <Grid color="#00BFFF" height={80} width={80} />}
    </LoaderStyles>
  )
}

export default Loader
