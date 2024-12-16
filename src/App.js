import './App.css'
import { Route } from 'react-router-dom'
import HeaderContainer from './components/Header/HeaderContainer'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profaile/Profaile'
import UsersContainer from './users/usersContainer'
import store from './index'
import News from './components/News/News'
import Settings from './components/Settings/Settings'
import Music from './components/Music/Music'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import ProfileContainer from './components/Profaile/ProfaileContainer'

function App(props) {
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
        {/*
          <Route path="/music" component={Music} />
          <Route path="/news" component={News} />
          <Route path="/settings" component={Settings} />*/}
      </div>
    </div>
  )
}

export default App
