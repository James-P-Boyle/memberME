import DeletePost from "../DeletePost";

export default function PostOptionLayout({ postId }) {
  return (
    <div className="h-60 w-full flex items-center gap-3 justify-evenly">
      <DeletePost postId={postId} />
      <button className="font-bold text-2xl rounded-xl dark:bg-gray-600 cursor-pointer h-full w-full transition delay-100 duration-200 ease-in-out bg-gray-100 hover:bg-gray-200 hover:dark:border">
        Edit
      </button>
    </div>
  );
}
