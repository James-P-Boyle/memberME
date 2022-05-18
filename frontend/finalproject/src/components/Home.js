import { useState, useEffect } from "react";
import axios from "axios";
import Timeline from "./TimeLine";

export default function Home() {
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
    <div className="max-w-xl border-8 mx-auto">
      {imgSource && (
        <div
          onClick={() => {
            setImgSource("");
          }}
          className="h-screen bg-opacity-90 min-w-full fixed bg-black left-0 top-0 flex items-center"
        >
          <img src={imgSource} alt="" className="bg-cover h-xl mx-auto" />
        </div>
      )}

      {posts.map((post, index) => (
        <Timeline
          id={post._id}
          key={post._id}
          caption={post.caption}
          img={post.img}
          date={post.date}
          setImgSource={setImgSource}
        />
      ))}
    </div>
  );
}
