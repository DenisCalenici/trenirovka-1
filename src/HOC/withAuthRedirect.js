import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
let mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth,
})

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to={'/Login'} />
      return <Component {...this.props} />
    }
  }

  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
    RedirectComponent
  )
  return ConnectedAuthRedirectComponent
}
