import React, { Fragment } from 'react'
import { vh100 } from './styles.styl'
import classnames from 'classnames'
import Head from './Head'

const Layout = ({ children }) => (
  <Fragment>
    <Head />
    <main className={classnames('d-flex', vh100)}>
      {children}
      <script src='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js' integrity='sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM' crossOrigin='anonymous' />
    </main>
  </Fragment>
)

export default Layout
