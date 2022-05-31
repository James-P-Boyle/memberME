import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard";

export default function UserPanel() {
  const [userInfo, setUserInfo] = useState({});
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/users/profile`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setUserInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    //MAKE CUSTOM CSS CLASSES
    <div className="flex flex-col justify-between ronded-xl">
      <div className="">
        <UserCard userInfo={userInfo} user={user} />
      </div>
    </div>
  );
}
