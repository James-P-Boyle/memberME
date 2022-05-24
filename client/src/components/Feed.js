import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../redux/reducers/posts";
import axios from "axios";
import Posts from "./Posts";
import UploadImage from "./UploadImage";

export default function Feed() {
  const [imgSource, setImgSource] = useState("");
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  useEffect(() => {
    axios
      .get("http://localhost:4000/posts", {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => dispatch(setPosts(res.data)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="col-start-5">
      <UploadImage />
      {posts.map((post, index) => (
        <Posts
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
            className="h-screen bg-opacity-90 min-w-full fixed bg-black left-0 top-0 flex items-center px-2"
          >
            <img src={imgSource} alt="" className="bg-cover h-xl mx-auto" />
          </div>
        )}
      </div>
    </div>
  );
}
