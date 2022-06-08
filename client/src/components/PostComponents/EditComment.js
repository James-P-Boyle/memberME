import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function EditComment({ postId }) {
  const [editCommentClicked, setEditCommentClicked] = useState(false);
  const [comments, setComments] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    editComment(comments);
  };

  const editComment = async (comment) => {
    try {
      await axios
        .put(
          `${process.env.REACT_APP_BACKEND_URL}/posts/${postId}`,
          { comment },
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      setEditCommentClicked(!editCommentClicked);
      toast("Updated successfully", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <>
      {!editCommentClicked ? (
        <div
          onClick={() => {
            console.log("clicked");
            setEditCommentClicked(!editCommentClicked);
          }}
          className="flex items-center justify-center rounded-xl dark:bg-gray-600 dark:hover:bg-gray-700 cursor-pointer h-full w-full transition delay-100 duration-200 ease-in-out bg-gray-100 hover:bg-gray-200 hover:dark:border"
        >
          Edit Comment
        </div>
      ) : (
        <div className="flex items-center justify-center rounded-xl dark:bg-gray-600 dark:hover:bg-gray-700 cursor-pointer h-full w-full transition delay-100 duration-200 ease-in-out bg-gray-100 hover:bg-gray-200 hover:dark:border">
          <form className="mx-2 md:mx-4" onSubmit={handleSubmit}>
            <div className="flex gap-1 md:gap-2 text-white">
              <textarea
                className="w-full h-10 p-2 text-gray-500 dark:text-white dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-gray-300 focus:ring-1"
                placeholder="Edit Comment"
                onChange={(e) => setComments(e.target.value)}
              ></textarea>
              <button className="py-2 px-1 sm:px-2 md:px-4 text-sm text-white bg-gray-600 dark:bg-gray-600 hover:bg-gray-500 dark:hover:bg-gray-500 rounded">
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
