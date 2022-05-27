import Comment from "./Comment";

export default function Posts({ caption, img, date = "", id, setImgSource }) {
  return (
    <div className="my-3 pt-5 shadow-md border rounded-xl ">
      <div className="flex justify-between pb-3 px-5">
        <div className="">
          <h1 className="text-xl capitalize font-bold">{caption}</h1>
          <p className="text-sm font-light">{date.split("T")[0]}</p>
        </div>
        <button className="font-bold text-xl">
          {/* ADD HOVER EFFECT */}
          ...
          {/*  <i className="fa-solid fa-ellipsis-stroke me-1"></i> */}
        </button>
      </div>
      <div className="">
        <img
          onClick={() => {
            setImgSource(img);
          }}
          src={img}
          alt=""
          className="p-1 bg-white object-cover h-60 w-full rounded-xl mx-auto cursor-pointer"
        />
      </div>

      <div>
        <Comment post={id} />
      </div>
    </div>
  );
}
