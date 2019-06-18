import React, { useState } from 'react'
import Login from './login'
import CreateAccount from './createAccount'
import styles from './home.styl'
import classnames from 'classnames'

const Home = () => {
  const [showLogin, setShowLogin] = useState(true)

  const toggleForm = () => {
    setShowLogin(!showLogin)
  }

  return (
    <div className={classnames(styles.mainCard, 'border rounded m-auto')}>
      { showLogin
        ? <Login onCreateAccountClick={toggleForm} />
        : <CreateAccount onLoginClick={toggleForm} />
      }
    </div>
  )
}

export default Home
