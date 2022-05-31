import { useSelector, useDispatch } from "react-redux";
import { setProfile, clearProfile } from "../redux/reducers/profile";
import { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard";
import InviteIcon from "./InviteIcon";
import InviteInput from "./InviteInput";

export default function UserPanel() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const profile = useSelector((state) => state.profile.profile);
  const clicked = useSelector((state) => state.invite.clicked);

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
    <div className="flex flex-col justify-between rounded-xl">
      <div className="">
        <UserCard />
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
    </div>
  );
}
