import { useState, useEffect } from "react";
import axios from "axios";
import Timeline from "./TimeLine";

export default function Home() {
  const [posts, setPosts] = useState([]);
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
      {posts.map((post, index) => (
        <Timeline
          id={post._id}
          key={post.index}
          caption={post.caption}
          img={post.img}
          date={post.date}
        />
      ))}
    </div>
  );
}
