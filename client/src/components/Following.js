import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setPosts } from "../redux/reducers/posts";

export default function Following() {
  const profile = useSelector((state) => state.profile.profile);
  const dispatch = useDispatch();

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
    <div className="flex flex-wrap justify-center md:gap-2 gap-6">
      {profile
        ? profile.following.map((follower, index) => {
            return (
              <div className="flex flex-col items-center">
                <div
                  key={index}
                  className="rounded-full capitalize hover:animate-bounce cursor-pointer transition duration-100 ease-in-out"
                >
                  <img
                    src={follower.profilePic}
                    alt=""
                    onClick={() => getFollowerPosts(follower._id)}
                    className="h-10 w-10 rounded-full border dark:border-gray-700 border-gray-300"
                  />
                </div>
                <span className="text-sm">{follower.userName}</span>
              </div>
            );
          })
        : null}
    </div>
  );
}
