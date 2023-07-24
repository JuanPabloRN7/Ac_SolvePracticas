import Post from "../post/Post";

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map(post => <Post key={post.id} post={post} />)}
    </div>
  );
}

export default PostList;
