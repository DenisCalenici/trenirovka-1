import React from 'react'
import { reduxForm } from 'redux-form'
import { required } from '../utils/falidators/indexFalidators'
import { connect } from 'react-redux'
import { login } from '../redux/auth-reducer'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import style from '../components/Common/FormsControls/FormControls.module.css'
import {
  createField,
  Input,
} from '../components/Common/FormsControls/FormsControls'

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField('Email', [required], 'email', Input)}
      {createField('Password', [required], 'password', Input, {
        type: 'password',
      })}
      {createField('rememberMe', [], 'rememberMe', Input, {
        type: 'checkbox',
      })}
      {error && <div className={style.formSummaryError}>error</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }
  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { login })(Login)
