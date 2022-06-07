import { useSelector, useDispatch } from "react-redux";
import { setEditClicked } from "../../redux/reducers/theme";
import AddDate from "./AddDate";
import EditTitle from "./EditTitle";
import EditComment from "./EditComment";

export default function EditButtons({ postId }) {
  const dispatch = useDispatch();
  const editClicked = useSelector((state) => state.theme.editClicked);
  return (
    <>
      {!editClicked ? (
        <div
          onClick={() => {
            dispatch(setEditClicked());
          }}
          className="flex items-center justify-center rounded-xl dark:bg-gray-600 dark:hover:bg-gray-700 cursor-pointer h-full w-full transition delay-100 duration-200 ease-in-out bg-gray-100 hover:bg-gray-200 hover:dark:border"
        >
          <button className="font-bold text-2xl">Edit</button>
        </div>
      ) : (
        <div className="flex flex-col gap-1 justify-center items-center w-full h-full">
          <span>
            <button className="text-xl text-gray-300 hover:text-red-400 rounded-md cursor-pointer absolute top-0 right-0">
              <i
                onClick={() => dispatch(setEditClicked())}
                className="fa fa-times"
              ></i>
            </button>
          </span>
          <AddDate postId={postId} />
          <EditTitle postId={postId} />
          <EditComment postId={postId} />
        </div>
      )}
    </>
  );
}
