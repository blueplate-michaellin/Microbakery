import React from "react"
import { Helmet } from "react-helmet"

const Head = () => (
    <Helmet>
      {/** UIkit CSS **/}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.3/css/uikit.min.css" />

      {/** UIkit JS **/}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.3/js/uikit.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.3/js/uikit-icons.min.js"></script>

    </Helmet>

)

export default Head
