import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { updatePost } from "../../redux/reducers/posts";

export default function EditTitle({ postId }) {
  const [titleClicked, setTitleClicked] = useState(false);
  const [caption, setCaption] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    editTitle(caption);
  };

  const editTitle = async (caption) => {
    try {
      await axios
        .put(
          `http://localhost:4000/posts/${postId}`,
          { caption },
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => {
          dispatch(updatePost(res.data));
          console.log(res);
        })
        .catch((err) => console.log(err));
      setTitleClicked(!titleClicked);
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
      {!titleClicked ? (
        <div
          onClick={() => {
            console.log("clicked");
            setTitleClicked(!titleClicked);
          }}
          className="flex items-center justify-center rounded-xl dark:bg-gray-600 dark:hover:bg-gray-700 cursor-pointer h-full w-full transition delay-100 duration-200 ease-in-out bg-gray-100 hover:bg-gray-200 hover:dark:border"
        >
          Edit Title
        </div>
      ) : (
        <div className="flex items-center justify-center rounded-xl dark:bg-gray-600 dark:hover:bg-gray-700 cursor-pointer h-full w-full transition delay-100 duration-200 ease-in-out bg-gray-100 hover:bg-gray-200 hover:dark:border">
          <form className="mx-4" onSubmit={handleSubmit}>
            <div className="flex gap-2 text-white">
              <textarea
                className="w-full h-10 p-2 text-gray-500 dark:text-white dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-gray-300 focus:ring-1"
                placeholder="Edit Title"
                onChange={(e) => setCaption(e.target.value)}
              ></textarea>
              <button className="px-4 py-2 text-sm text-white bg-gray-600 dark:bg-gray-600 hover:bg-gray-500 dark:hover:bg-gray-500 rounded">
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
