import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";

export default function Comment({ post }) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/comments?post=${post}&user=${user.id}`, {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => setComments(res.data))
      .catch((err) => console.log(err));
  }, [post, user.id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(post, comment);
  };

  const postComment = async (post, comment) => {
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
      setComments([data]);
      toast("Saving", {
        position: "top-right",
        autoClose: 2000,
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
    <>
      {!comments.length ? (
        <form className="w-full p-1" onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <textarea
              onChange={(e) => setComment(e.target.value)}
              className="w-full h-10 p-2 border rounded-lg focus:outline-none focus:ring-gray-300 focus:ring-1"
              placeholder="Leave your memory ..."
            ></textarea>
            <button className="px-6 py-2 text-sm text-blue-100 bg-blue-600 rounded">
              Save
            </button>
          </div>
        </form>
      ) : (
        <div>
          <form className="w-full p-1" onSubmit={handleSubmit}>
            <div className="w-full h-10 p-2 border rounded-lg text-gray-500 capitalize">
              {comments[0].comment}
            </div>
            {/*         <button className="px-6 py-2 text-sm text-blue-100 bg-green-200 rounded">
                Edit
              </button> */}
          </form>
        </div>
      )}
    </>
  );
}
