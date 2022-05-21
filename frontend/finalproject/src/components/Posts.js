import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [imgSource, setImgSource] = useState("");
  console.log(posts);
  useEffect(() => {
    axios
      .get("http://localhost:4000/posts", {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
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
        <div className="">
          {posts.map((post, index) => (
            <Card
              id={post._id}
              key={post._id}
              caption={post.caption}
              img={post.img}
              date={post.date}
              setImgSource={setImgSource}
            />
          ))}
        </div>
      </div>
    </>
  );
}
