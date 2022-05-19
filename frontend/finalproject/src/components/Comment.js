import { useState } from "react";

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
      const { data } = await axios.post("http://localhost:4000/auth/signup", {
        post,
        comment,
      });
      //add toastify
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <form className="w-full p-5" onSubmit={handleSubmit}>
      <div className="flex">
        <label for="comment"></label>
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
