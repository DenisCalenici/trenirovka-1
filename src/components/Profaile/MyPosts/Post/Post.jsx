import classes from './Post.module.css'
const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://avatars.mds.yandex.net/i?id=4ee66f4c9bb78e32e1bab93a08e09a11dac47d99-10700817-images-thumbs&n=13" />

      {props.message}
      <div>
        <span>Like</span>
        {props.like}
      </div>
    </div>
  )
}
export default Post
