import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../redux/reducers/posts";
import Upload from "../Upload";
import axios from "axios";
import Post from "./Post";
import Skeleton from "react-loading-skeleton";

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
      .get(`http://localhost:4000/posts?userId=${user.id}`, {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        dispatch(setPosts(res.data));
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [dispatch, user.id]);

  const ShowLoading = () => {
    return (
      <>
        <>
          <div className="col-md-6">
            <Skeleton height={400} />
          </div>
          <div className="col-md-6" style={{ lineHeight: 2 }}>
            <Skeleton height={50} width={300} />
            <Skeleton height={75} />
            <Skeleton height={25} width={150} />
            <Skeleton height={50} />
            <Skeleton height={150} />
            <Skeleton height={50} width={100} />
            <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
          </div>
        </>
      </>
    );
  };

  const ShowPosts = () => {
    return (
      <div className="col-start-5 mt-16">
        <div className="py-2 sm:rounded-xl text-lg font-medium cursor-pointer border dark:border-0 dark:bg-gray-800 max-w-lg mx-auto">
          <h1 className="text-center" onClick={() => setOpen(!open)}>
            Upload
          </h1>

          {open && <Upload setOpen={setOpen} open={open} />}
        </div>
        {posts.map((post, index) => (
          <Post
            id={post._id}
            key={post._id}
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

  return <>{loading ? <ShowLoading /> : <ShowPosts />}</>;
}
