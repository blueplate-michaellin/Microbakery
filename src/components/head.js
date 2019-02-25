import React from "react"
import { Helmet } from "react-helmet"

const Head = () => (
    <Helmet>
      {/** Global site tag (gtag.js) - Google Analytics **/}
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-135120897-1"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-135120897-1');
      </script>

      {/** UIkit CSS **/}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.3/css/uikit.min.css" />

      {/** UIkit JS **/}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.3/js/uikit.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.3/js/uikit-icons.min.js"></script>

    </Helmet>

)

export default Head
