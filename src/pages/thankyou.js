import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

class ThankYou extends React.Component {
          render() {
              const siteTitle = "Savannah Schmidt MUA"
              const siteDescription = "Savannah Schmidt professional makeup artist for hire"

              return (
                  <Layout>
                      <Helmet>
                              <title>{siteTitle}</title>
                              <meta name="description" content={siteDescription} />
                      </Helmet>
                      <div id="main">

                          <section id="one">
                              <header className="major">
                                  <h2>Thank you for contacting me! I will get back to you shortly.</h2>
                              </header>
                        </section>
                  </Layout>
        )
    }
}

export default ThankYou
