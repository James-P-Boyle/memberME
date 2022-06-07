import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFollowers, setPosts } from "../redux/reducers/posts";
import { setMobileMenuOpen } from "../redux/reducers/theme";
import axios from "axios";

export default function FollowerAvatar({ follower }) {
  const [active, setActive] = useState(false);
  const openMenu = useSelector((state) => state.theme.mobileMenuOpen);
  const followers = useSelector((state) => state.posts.followers);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center">
      <div
        key={follower.id}
        className="rounded-full capitalize cursor-pointer transition duration-100 ease-in-out"
      >
        <img
          src={follower.profilePic}
          alt="Follower"
          onClick={() => {
            setActive(!active);
            dispatch(setMobileMenuOpen(!openMenu));
            const foundFollower = followers.find(
              (followerId) => followerId === follower._id
            );
            if (!foundFollower) {
              axios
                .post(
                  "http://localhost:4000/posts/following",
                  [...followers, follower._id],
                  {
                    headers: {
                      authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                  }
                )
                .then((res) => {
                  dispatch(setPosts(res.data));
                  dispatch(setFollowers([...followers, follower._id]));
                });
            } else {
              const filteredFollowers = followers.filter(
                (followerId) => followerId !== follower._id
              );
              axios
                .post(
                  "http://localhost:4000/posts/following",
                  filteredFollowers,
                  {
                    headers: {
                      authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                  }
                )
                .then((res) => {
                  dispatch(setPosts(res.data));
                  dispatch(setFollowers(filteredFollowers));
                });
            }
          }}
          className={`${
            active
              ? "duration-100 ease-in-out scale-125 border-2 dark:border-gray-600 border-gray-400"
              : ""
          } h-10 w-10 rounded-full border dark:border-gray-700 border-gray-300`}
        />
      </div>
      <span className="text-sm">{follower.userName}</span>
    </div>
  );
}
