import Comment from "./Comment";

export default function Card({ caption, img, date = "", id, setImgSource }) {
  return (
    <div className="mx-auto bg-green-200 my-3 pt-5 shadow-md border md:rounded-xl w-full ">
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

      <img
        onClick={() => {
          setImgSource(img);
        }}
        src={img}
        alt=""
        className="max-h-60 w-auto shadow-2xl hover:shadow-8xl mx-auto cursor-pointer"
      />
      <div>
        <Comment post={id} />
      </div>
    </div>
  );
}
