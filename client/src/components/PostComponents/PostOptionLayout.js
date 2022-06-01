import DeletePost from "../DeletePost";

export default function PostOptionLayout({ postId }) {
  return (
    <div className="h-60 w-full flex items-center gap-3 justify-evenly rounded-xl dark:bg-white-400">
      <DeletePost postId={postId} />
      <button className="font-bold text-2xl rounded-xl hover:bg-gray-600 hover:text-white cursor-pointer h-full w-full transition delay-100 duration-300 ease-in-out hover:dark:border">
        Edit
      </button>
    </div>
  );
}
