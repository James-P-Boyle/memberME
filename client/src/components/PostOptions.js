import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { deletePost } from "../redux/reducers/posts";

export default function PostOptions({ postId }) {
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
    <div className="h-60 w-full flex items-center gap-1 justify-evenly rounded-xl">
      <button
        onClick={removePost}
        className="font-bold bg-gray-100 text-2xl rounded-xl text-black hover:bg-gray-700 hover:text-red-500 cursor-pointer h-full w-full transition delay-100 duration-300 ease-in-out"
      >
        Delete
      </button>
      <button className="font-bold bg-gray-100 text-2xl rounded-xl text-black hover:bg-gray-700 hover:text-white cursor-pointer h-full w-full transition delay-100 duration-300 ease-in-out">
        Edit
      </button>
    </div>
  );
}
