import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { deletePost } from "../redux/reducers/posts";

export default function DeletePost({ postId }) {
  const dispatch = useDispatch();

  const { posts } = useSelector((state) => state.posts);

  const removePost = () => {
    //delete post from server
    axios
      .delete(`http://localhost:4000/posts/${postId}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        dispatch(deletePost(postId));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <button
      onClick={removePost}
      className="font-bold text-2xl rounded-xl hover:bg-gray-600 hover:dark:border hover:text-red-500 cursor-pointer h-full w-full transition delay-100 duration-300 ease-in-out"
    >
      Delete
    </button>
  );
}
