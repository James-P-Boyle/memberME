import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { deletePost } from "../../redux/reducers/posts";

export default function DeletePost({ postId, deleteOpen, setDeleteOpen }) {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  const removePost = () => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/posts/${postId}`, {
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
    <>
      {!deleteOpen ? (
        <>
          <button
            onClick={() => {
              setDeleteOpen(!deleteOpen);
            }}
            className="font-bold text-2xl rounded-xl dark:bg-gray-600 bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 hover:dark:border hover:text-red-500 cursor-pointer h-full w-full transition delay-100 duration-300 ease-in-out"
          >
            Delete
          </button>
        </>
      ) : (
        <>
          <button
            onClick={removePost}
            className="font-bold text-2xl rounded-xl dark:bg-gray-600 bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 hover:dark:border hover:text-red-500 cursor-pointer h-full w-full transition delay-100 duration-300 ease-in-out"
          >
            Are you sure ?
          </button>
        </>
      )}
    </>
  );
}
