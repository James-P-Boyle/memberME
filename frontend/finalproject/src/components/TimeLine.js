export default function Timeline({
  caption,
  img,
  date = "",
  id,
  setImgSource,
}) {
  console.log(id);
  return (
    <div className="mx-auto border-green-500 border">
      <div className="flex items-end justify-between px-2 py-4 font-bold">
        <h1 className="text-3xl capitalize">{caption}</h1>
        <p>{date.split("T")[0]}</p>
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
