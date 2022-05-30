import Comment from "./Comment";
import { useState } from "react";

export default function Posts({ caption, img, date = "", id, setImgSource }) {
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
            <img
              onClick={() => {
                setImgSource(img);
              }}
              src={img}
              alt=""
              className="bg-white w-full h-60 object-cover rounded-xl mx-auto z-10 cursor-pointer"
            />
          </>
        ) : (
          <>
            <div className="h-60 w-full flex items-center justify-evenly border rounded-xl">
              <button className="font-bold text-2xl rounded-xl text-black hover:bg-gray-700 hover:text-red-500 cursor-pointer h-full w-full transition delay-100 duration-300 ease-in-out">
                Delete
              </button>
              <button className="font-bold text-2xl rounded-xl text-black hover:bg-gray-700 hover:text-white cursor-pointer h-full w-full transition delay-100 duration-300 ease-in-out">
                Edit Memoey
              </button>
            </div>
          </>
        )}
      </div>

      <div>
        <Comment post={id} />
      </div>
    </div>
  );
}
