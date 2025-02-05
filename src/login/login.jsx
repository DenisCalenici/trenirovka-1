import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from '..//components/Common/FormsControls/FormsControls'
import { required } from '../utils/falidators/indexFalidators'
import { connect } from 'react-redux'
import { login } from '../redux/auth-reducer'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import style from '../components/Common/FormsControls/FormControls.module.css'

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={'email'}
          validate={[required]}
          name="email"
          component={Input}
        />
      </div>
      <div>
        <Field
          placeholder={'Password'}
          validate={[required]}
          name="password"
          component={Input}
          type={'password'}
        />
      </div>
      <div>
        <Field type={'checkbox'} name="rememberMe" component={Input} />
        remember ne
      </div>
      {props.error && <div className={style.formSummaryError}>error</div>}
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
