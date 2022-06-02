import Comment from "../Comment";
import { useState } from "react";
import PostOptionsLayout from "../PostComponents/PostOptionLayout";
import PostedImage from "../PostComponents/PostedImage";

export default function Post({ caption, img, date = "", id, setImgSource }) {
  const [open, setOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  return (
    <div className="my-3 px-3 py-3 shadow-md md:rounded-xl border dark:border-0 max-w-lg mx-auto hover:shadow-xl bg-white-400 dark:bg-gray-800">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl capitalize letter tracking-wide font-bold">
            {caption}
          </h1>
          <p className="text-sm font-light">{date.split("T")[0]}</p>
        </div>
        <button
          onClick={() => {
            setOpen(!open);
            if (deleteOpen) {
              setDeleteOpen(!deleteOpen);
            }
          }}
          className="h-10 w-10 hover:bg-gray-400 text-2xl hover:text-white px-3 py-1 rounded-full cursor-pointer font-bold"
        >
          {/* ADD HOVER EFFECT */}
          {open ? "-" : "+"}

          {/*  <i className="fa-solid fa-ellipsis-stroke me-1"></i> */}
        </button>
      </div>
      <div className="relative my-4">
        {!open ? (
          <>
            <PostedImage img={img} setImgSource={setImgSource} />
          </>
        ) : (
          <>
            <PostOptionsLayout
              postId={id}
              deleteOpen={deleteOpen}
              setDeleteOpen={setDeleteOpen}
            />
          </>
        )}
      </div>
      <div>
        <Comment post={id} />
      </div>
    </div>
  );
}
