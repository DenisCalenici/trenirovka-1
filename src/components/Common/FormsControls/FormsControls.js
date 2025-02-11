import styles from './FormControls.module.css'
import { Field } from 'redux-form'

const FormControl = ({
  input,
  meta: { touched, error },
  child,
  children,
  ...props
}) => {
  const hasError = touched && error
  return (
    <div className={styles.formControl + '' + (hasError ? styles.error : '')}>
      <div>{children}</div>
      {hasError && <span>{error}</span>}
    </div>
  )
}

export const Textarea = (props) => {
  const { input, meta, children, ...restProps } = props
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  )
}

export const Input = (props) => {
  const { input, meta, children, ...restProps } = props
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  )
}
export const createField = (
  placeholder,
  validate,
  name,
  component,
  props = {},
  text = ''
) => {
  ;<div>
    <Field
      placeholder={placeholder}
      validate={validate}
      name={name}
      component={component}
      {...props}
    />
    {text}
  </div>
}
