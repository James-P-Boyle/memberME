export default function PostedImage({ img, setImgSource }) {
  return (
    <img
      onClick={() => {
        setImgSource(img);
      }}
      src={img}
      alt=""
      className="bg-white w-full h-60 object-cover rounded-xl mx-auto z-10 cursor-pointer"
    />
  );
}
