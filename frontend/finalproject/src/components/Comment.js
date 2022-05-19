import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export default function Comment({ post }) {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(post, comment);
  };

  const postComment = async (post, comment) => {
    console.log(post, comment);
    try {
      const { data } = await axios.post(
        "http://localhost:4000/comments",
        {
          post,
          comment,
        },
        {
          headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      toast("Saving", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <form className="w-full p-5" onSubmit={handleSubmit}>
      <div className="flex">
        <label htmlFor="comment"></label>
        <textarea
          onChange={(e) => setComment(e.target.value)}
          className="w-full h-10 p-2 border rounded-lg focus:outline-none focus:ring-gray-300 focus:ring-1"
          name="comment"
          id="comment"
          placeholder="Leave your memory ..."
        ></textarea>
        <button className="px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded">
          Save
        </button>
      </div>
    </form>
  );
}
