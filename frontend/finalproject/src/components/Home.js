import { useState, useEffect } from "react";
import axios from "axios";
import Memory from "./Memory";
import UploadImage from "./UploadImage";
import UserPanel from "./UserPanel";

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
    <>
      <div className="lg:flex">
        <div className="w-1/6 pt-20 h-screen hidden lg:block lg:fixed shadow-2xl">
          <UserPanel />
        </div>
        <div className=" lg:w-4/6 mx-auto lg:ml-1/6">
          <UploadImage />
          <div className="max-w-xl mx-auto mt-5">
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

            {posts.map((post, index) => (
              <Memory
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
      </div>
    </>
  );
}
