import './App.css'

import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { initializeApp } from './redux/app-reducer '
import { withSuspense } from './HOC/withSuspence'
import Preloader from './users/preloader'
import HeaderContainer from './components/Header/HeaderContainer'
import Navbar from './components/Navbar/Navbar'
import LoginPage from './login/login'

const UsersContainer = React.lazy(() => import('./users/usersContainer'))
const DialogsContainer = React.lazy(() =>
  import('./components/Dialogs/DialogsContainer')
)
const ProfileContainer = React.lazy(() =>
  import('./components/Profaile/ProfaileContainer')
)

class App extends Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render(props) {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={withSuspense(DialogsContainer)} />

          <Route
            path="/profile:userId?"
            render={withSuspense(ProfileContainer)}
          />
          <Route path="/users" render={withSuspense(UsersContainer)} />
          <Route path="/login" render={() => <LoginPage />} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App)
