import Comment from "./Comment";

export default function Memory({ caption, img, date = "", id, setImgSource }) {
  return (
    <div className="mx-auto  my-2 pt-5 shadow-md border md:rounded-xl">
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
        className="bg-cover shadow-2xl hover:shadow-8xl mx-auto cursor-pointer"
      />
      {}
      <Comment post={id} />
    </div>
  );
}
