import Stories from "../../components/stories/Stories"
import Posts from "../../components/posts/Posts"
import Share from "../../components/share/Share"
import "./sociedad.scss"

const Sociedad = () => {
  return (
    <div className="sociedad">
      <Stories/>
      <Share/>
      <Posts/>
    </div>
  )
}

export default Sociedad