export default function List({ caption, img, date = "", id, setImgSource }) {
  return (
    <div className="mx-auto my-2 shadow-md border md:rounded-xl">
      <div className="flex justify-between py-3 px-5">
        <div className="">
          <h1 className="text-xl capitalize font-bold">{caption}</h1>
          <p className="text-sm font-light">{date.split("T")[0]}</p>
        </div>
        <button className="font-bold text-xl hover:animate-bounce hover:font-black">
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
        className="max-h-30 max-w-30 mx-auto cursor-pointer"
      />
    </div>
  );
}
