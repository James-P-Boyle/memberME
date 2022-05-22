import { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./Posts";
import UserPanel from "./UserPanel";
import UploadImage from "./UploadImage";

export default function Feed() {
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
    <div className="md:grid md:grid-cols-8 gap-2 max-h-screen w-screen relative">
      <div className="h-screen shadow-2xl hidden md:block fixed top-20 left-0 w-60">
        <UserPanel />
      </div>

      <div className="col-span-4 col-start-4 m-2 md:m-5">
        <UploadImage />

        <div className="col-start-5">
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
      </div>
    </div>
  );
}
