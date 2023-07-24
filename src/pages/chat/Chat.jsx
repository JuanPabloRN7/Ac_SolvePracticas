import Stories from "../../components/stories/Stories"
import Posts from "../../components/posts/Posts"
import Share from "../../components/share/Share"
import "./chat.scss"

const Chat = () => {
  return (
    <div className="chat">
      <Stories/>
      <Share/>
      <Posts/>
    </div>
  )
}

export default Chat