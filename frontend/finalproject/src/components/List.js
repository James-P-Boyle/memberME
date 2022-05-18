export default function List({ caption, img, date = "", id, setImgSource }) {
  return (
    <div className="mx-auto my-2 shadow-md border md:rounded-xl">
      <div className="flex justify-between p-3">
        <div className="">
          <h1 className="text-2xl capitalize">{caption}</h1>
          <p className="text-sm font-light">{date.split("T")[0]}</p>
        </div>
        <button>options</button>
      </div>

      <img
        onClick={() => {
          setImgSource(img);
        }}
        src={img}
        alt=""
        className="max-h-30 max-w-30 mx-auto"
      />
    </div>
  );
}
