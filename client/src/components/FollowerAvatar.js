import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setPosts, toggleFollower } from "../redux/reducers/posts";

export default function FollowerAvatar({ follower }) {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const { followers } = useSelector((state) => state.posts);
  console.log(followers);

  const getFollowerPosts = async (id) => {
    try {
      const res = await axios.get(
        `http://localhost:4000/posts/following/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(setPosts(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div
        key={follower.id}
        className="rounded-full capitalize cursor-pointer transition duration-100 ease-in-out"
      >
        <img
          src={follower.profilePic}
          alt=""
          onClick={() => {
            getFollowerPosts(follower._id);
            setActive(!active);
            dispatch(toggleFollower(follower._id));
          }}
          className={`${
            active
              ? "duration-100 ease-in-out scale-125 border-2 border-gray-400"
              : ""
          } h-10 w-10 rounded-full border dark:border-gray-700 border-gray-300`}
        />
      </div>
      <span className="text-sm">{follower.userName}</span>
    </div>
  );
}
