import Comment from "../Comment";
import { useState } from "react";
import PostOptionsLayout from "../PostComponents/PostOptionLayout";
import PostedImage from "../PostComponents/PostedImage";

export default function Post({ caption, img, date = "", id, setImgSource }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="my-3 px-3 py-5 shadow-md md:rounded-xl border dark:border-0 max-w-lg mx-auto hover:shadow-xl bg-white-400 dark:bg-gray-800">
      <div className="flex justify-between">
        <div>
          <h1 className="text-xl capitalize letter tracking-wide font-bold">
            {caption}
          </h1>
          <p className="text-sm font-light">{date.split("T")[0]}</p>
        </div>
        <button
          onClick={() => setClicked(!clicked)}
          className="font-bold text-2xl"
        >
          {/* ADD HOVER EFFECT */}
          {clicked ? "-" : "+"}

          {/*  <i className="fa-solid fa-ellipsis-stroke me-1"></i> */}
        </button>
      </div>
      <div className="relative my-4">
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
