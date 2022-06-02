import DeletePost from "././DeletePost";
import EditButtons from "./EditButtons";

export default function PostOptionLayout({
  postId,
  deleteOpen,
  setDeleteOpen,
}) {
  return (
    <div className="h-60 w-full flex items-center gap-3 justify-evenly">
      <DeletePost
        postId={postId}
        deleteOpen={deleteOpen}
        setDeleteOpen={setDeleteOpen}
      />
      <EditButtons />
    </div>
  );
}
