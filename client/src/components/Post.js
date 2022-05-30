import Comment from "./Comment";
import { useState } from "react";
import PostOptions from "./PostOptions";
import PostImage from "./PostImage";

export default function Post({ caption, img, date = "", id, setImgSource }) {
  const [clicked, setClicked] = useState(false);
  console.log(clicked);
  return (
    <div className="my-3 py-3 px-2 shadow-md border rounded-xl max-w-lg mx-auto">
      <div className="flex justify-between">
        <div>
          <h1 className="text-xl capitalize font-bold pb-1">{caption}</h1>
          <p className="text-sm font-light">{date.split("T")[0]}</p>
        </div>
        <button
          onClick={() => setClicked(!clicked)}
          className="font-bold text-2xl pr-2"
        >
          {/* ADD HOVER EFFECT */}
          {clicked ? "-" : "+"}

          {/*  <i className="fa-solid fa-ellipsis-stroke me-1"></i> */}
        </button>
      </div>
      <div className="relative p-1">
        {!clicked ? (
          <>
            <PostImage img={img} setImgSource={setImgSource} />
          </>
        ) : (
          <>
            <PostOptions postId={id} />
          </>
        )}
      </div>
      <div>
        <Comment post={id} />
      </div>
    </div>
  );
}
