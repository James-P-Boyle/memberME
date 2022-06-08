import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFollowers, setPosts } from "../redux/reducers/posts";
import { setMobileMenuOpen } from "../redux/reducers/theme";
import axios from "axios";

export default function FollowerAvatar({ follower }) {
  const [active, setActive] = useState(false);
  const openMenu = useSelector((state) => state.theme.mobileMenuOpen);
  const user = useSelector((state) => state.auth.user);
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
                  `${process.env.REACT_APP_BACKEND_URL}/posts/following`,
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
              if (filteredFollowers.length) {
                axios
                  .post(
                    `${process.env.REACT_APP_BACKEND_URL}/posts/following`,
                    filteredFollowers,
                    {
                      headers: {
                        authorization: `Bearer ${localStorage.getItem(
                          "token"
                        )}`,
                      },
                    }
                  )
                  .then((res) => {
                    dispatch(setPosts(res.data));
                    dispatch(setFollowers(filteredFollowers));
                  });
              } else {
                axios
                  .get(
                    `${process.env.REACT_APP_BACKEND_URL}/posts?userId=${user.id}`,
                    {
                      headers: {
                        authorization: `Bearer ${localStorage.getItem(
                          "token"
                        )}`,
                      },
                    }
                  )
                  .then((res) => {
                    dispatch(setPosts(res.data));
                  })
                  .catch((err) => console.log(err));
              }
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
