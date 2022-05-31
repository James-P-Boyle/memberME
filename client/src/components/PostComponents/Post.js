import Comment from "../Comment";
import { useState } from "react";
import PostOptionsLayout from "../PostComponents/PostOptionLayout";
import PostedImage from "../PostComponents/PostedImage";

export default function Post({ caption, img, date = "", id, setImgSource }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="my-3 pt-1 shadow-md border md:rounded-xl max-w-lg mx-auto hover:shadow-xl delay-100">
      <div className="flex justify-between p-2">
        <div>
          <h1 className="text-xl capitalize font-bold pb-1 px-2">{caption}</h1>
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
      <div className="relative">
        {!clicked ? (
          <>
            <PostedImage img={img} setImgSource={setImgSource} />
          </>
        ) : (
          <>
            <PostOptionsLayout postId={id} />
          </>
        )}
      </div>
      <div>
        <Comment post={id} />
      </div>
    </div>
  );
}
