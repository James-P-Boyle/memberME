export default function PostOptions() {
  return (
    <div className="h-60 w-full flex items-center gap-1 justify-evenly rounded-xl">
      <button className="font-bold bg-gray-100 text-2xl rounded-xl text-black hover:bg-gray-700 hover:text-red-500 cursor-pointer h-full w-full transition delay-100 duration-300 ease-in-out">
        Delete
      </button>
      <button className="font-bold bg-gray-100 text-2xl rounded-xl text-black hover:bg-gray-700 hover:text-white cursor-pointer h-full w-full transition delay-100 duration-300 ease-in-out">
        Edit Memoey
      </button>
    </div>
  );
}
