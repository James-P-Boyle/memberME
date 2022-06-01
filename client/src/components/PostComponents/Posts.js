import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../redux/reducers/posts";
import Upload from "../Upload";
import axios from "axios";
import Post from "./Post";

export default function Posts() {
  const [imgSource, setImgSource] = useState("");
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const user = useSelector((state) => state.auth.user);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/posts?userId=${user.id}`, {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => dispatch(setPosts(res.data)))
      .catch((err) => console.log(err));
  }, [dispatch, user.id]);

  return (
    <div className="col-start-5 mt-16">
      <div className="hover:text-white px-3 py-2 rounded-md text-xl font-medium cursor-pointer ">
        <h1 onClick={() => setOpen(!open)}>Upload</h1>

        {open && <Upload setOpen={setOpen} open={open} />}
      </div>
      {posts.map((post, index) => (
        <Post
          id={post._id}
          key={post._id}
          caption={post.caption}
          img={post.img}
          date={post.date}
          setImgSource={setImgSource}
        />
      ))}
      <div className="mx-auto mt-5 rounded-xl shadow-xl">
        {imgSource && (
          <div
            onClick={() => {
              setImgSource("");
            }}
            className="h-full overflow-hidden bg-opacity-90 min-w-full fixed bg-black left-0 top-0 flex items-center p-2 z-20"
          >
            <img src={imgSource} alt="" className=" max-h-xl mx-auto" />
          </div>
        )}
      </div>
    </div>
  );
}
