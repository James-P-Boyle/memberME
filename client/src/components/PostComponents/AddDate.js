import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function AddDate({ postId }) {
  const [dateClicked, setDateClicked] = useState(false);
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    editDate(date);
  };

  const editDate = async (date) => {
    try {
      await axios
        .put(
          `http://localhost:4000/posts/${postId}`,
          { date },
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      setDateClicked(!dateClicked);
      toast("Date Added", {
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
      {!dateClicked ? (
        <div
          onClick={() => {
            console.log("clicked");
            setDateClicked(!dateClicked);
          }}
          className="flex items-center justify-center rounded-xl dark:bg-gray-600 dark:hover:bg-gray-700 cursor-pointer h-full w-full transition delay-100 duration-200 ease-in-out bg-gray-100 hover:bg-gray-200 hover:dark:border"
        >
          Add Date
        </div>
      ) : (
        <div className="flex items-center justify-center rounded-xl dark:bg-gray-600 dark:hover:bg-gray-700 cursor-pointer h-full w-full transition delay-100 duration-200 ease-in-out bg-gray-100 hover:bg-gray-200 hover:dark:border">
          <form className="mx-4" onSubmit={handleSubmit}>
            <div className="flex gap-2 text-white">
              <textarea
                className="w-full h-10 p-2 text-gray-500 dark:text-white dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-gray-300 focus:ring-1"
                placeholder="DD/MM/YYYY"
                onChange={(e) => setDate(e.target.value)}
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

{
  /* {!deleteOpen ? (
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
</> */
}
