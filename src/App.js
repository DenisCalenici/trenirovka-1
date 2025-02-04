import './App.css'
import { Route } from 'react-router-dom'
import HeaderContainer from './components/Header/HeaderContainer'
import Navbar from './components/Navbar/Navbar'
import UsersContainer from './users/usersContainer'
import store from './index'
import News from './components/News/News'
import Settings from './components/Settings/Settings'
import Music from './components/Music/Music'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import ProfileContainer from './components/Profaile/ProfaileContainer'
import LoginPage from './login/login'
import { Component } from 'react'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { initializeApp, initialized } from './redax///app-reducer '
import Preloader from './components/Common/preloader'
class App extends Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/profile:userId?"
            render={() => <ProfileContainer store={props.store} />}
          />

          <Route
            path="/dialogs"
            render={() => <DialogsContainer store={props.store} />}
          />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <LoginPage />} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  initialized: state.app.initialized
}

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App)
