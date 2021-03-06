import { useSelector, useDispatch } from "react-redux";
import { setProfile } from "../redux/reducers/profile";
import { useEffect } from "react";
import axios from "axios";
import UserCard from "./UserCard";
import InviteIcon from "./InviteIcon";
import InviteInput from "./InviteInput";
import FollowingIcon from "./FollowingIcon";
import FollowingContainer from "./FollowingContainer";
import LogOutButton from "./LogOutButton";

export default function UserPanel() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const profile = useSelector((state) => state.profile.profile);
  const clicked = useSelector((state) => state.invite.clicked);
  const followerClicked = useSelector((state) => state.theme.clicked);

  useEffect(() => {
    try {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/users/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          dispatch(setProfile(res.data));
        });
    } catch (err) {
      console.log(err);
    }
  }, [token]);

  return (
    <>
      <div className="flex flex-col justify-between w-full">
        <UserCard />

        <div className="flex flex-col gap-2 h-full">
          <div className="flex p-3 hover:bg-gray-100 hover:dark:bg-gray-800 cursor-pointer">
            {clicked ? (
              <>
                <InviteIcon />
              </>
            ) : (
              <div className="">
                <InviteInput></InviteInput>
              </div>
            )}
          </div>
          <div className="flex p-3 hover:bg-gray-100 hover:dark:bg-gray-800 cursor-pointer">
            {followerClicked ? (
              <>
                <FollowingIcon />
              </>
            ) : (
              <div className="px-2 w-full">
                <FollowingContainer />
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-center items-center">
          <LogOutButton />
        </div>
      </div>
    </>
  );
}
