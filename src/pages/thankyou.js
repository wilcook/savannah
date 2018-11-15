import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

export default () => (

  const siteTitle = "Savannah Schmidt MUA"
  const siteDescription = "Savannah Schmidt professional makeup artist for hire"

  return (
          <Helmet>
                  <title>{siteTitle}</title>
                  <meta name="description" content={siteDescription} />
          </Helmet>

  <Layout>


    <div style={{ backgroundColor: `#BFAFB2`, padding: `1.5rem` }}>
      <h1>Savannah Schmidt MUA</h1>
      <p>
        Lorem ipsum dolor sit amet, eu iudico everti his, eu sea elit dicat. Eu
        nec oratio antiopam, id tale legendos est. Saepe debitis at est. Pro
        interesset suscipiantur signiferumque ea, ei copiosae maiestatis ius.
        Mei eu esse debet perfecto, has illud noluisse eloquentiam ex. Ius
        eirmod reprehendunt ex, vel enim tibique philosophia cu. Duo vero audiam
        te.
      </p>
    </div>
  </Layout>
);


export default ThankYou
