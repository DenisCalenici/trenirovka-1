import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import classes from './../Dialogs.module.css'
const DialogItem = (props) => {
  let path = '/dialogs/' + props.id
  return (
    <div className={classes.dialog}>
      <NavLink to="path">{props.name}</NavLink>
    </div>
  )
}

export default DialogItem
