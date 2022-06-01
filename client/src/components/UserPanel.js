import { useSelector, useDispatch } from "react-redux";
import { setProfile, clearProfile } from "../redux/reducers/profile";
import { useEffect } from "react";
import axios from "axios";
import UserCard from "./UserCard";
import InviteIcon from "./InviteIcon";
import InviteInput from "./InviteInput";
import FollowingIcon from "./FollowingIcon";
import FollowingContainer from "./FollowingContainer";

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
        .get(`http://localhost:4000/users/profile`, {
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
    //MAKE CUSTOM CSS CLASSES
    <div className="flex flex-col justify-between rounded-xl w-full">
      <UserCard />
      <div className="">
        <div className="">
          {clicked ? (
            <>
              <InviteIcon />
            </>
          ) : (
            <div className="px-2">
              <InviteInput></InviteInput>
            </div>
          )}
        </div>
        <div className="">
          {followerClicked ? (
            <>
              <FollowingIcon />
            </>
          ) : (
            <div className="px-2">
              <FollowingContainer />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
