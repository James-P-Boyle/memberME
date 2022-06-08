import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../redux/reducers/posts";
import Upload from "../Upload";
import axios from "axios";
import Post from "./Post";
import PostSkeleton from "./PostSkeleton";

export default function Posts() {
  const [imgSource, setImgSource] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/posts?userId=${user.id}`, {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        dispatch(setPosts(res.data));
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [dispatch, user.id]);

  const ShowPosts = () => {
    return (
      <div className="col-start-5 mt-16 ">
        <div className="py-2 sm:rounded-xl text-lg font-medium cursor-pointer border hover:border-gray-300 dark:border-0 dark:bg-gray-800 max-w-lg mx-auto">
          <h1 className="text-center" onClick={() => setOpen(!open)}>
            UploadS
          </h1>

          {open && <Upload setOpen={setOpen} open={open} />}
        </div>
        {posts.map((post, index) => (
          <Post
            id={post._id}
            key={`${post._id} ${index}`}
            caption={post.caption}
            img={post.img}
            date={post.date}
            setImgSource={setImgSource}
            loading={loading}
          />
        ))}
        <div className="mx-auto mt-5 rounded-xl shadow-xl">
          {imgSource && (
            <div
              onClick={() => {
                setImgSource("");
              }}
              className="h-full overflow-hidden bg-opacity-90 min-w-full fixed bg-black left-0 top-0 flex items-center p-2 z-20"
            >
              <img src={imgSource} alt="" className=" max-h-xl mx-auto" />
            </div>
          )}
        </div>
      </div>
    );
  };

  return <>{loading ? <PostSkeleton /> : <ShowPosts />}</>;
}
