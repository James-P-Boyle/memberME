import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard";
import UserEdit from "./UserEdit";

export default function UserPanel() {
  const [userInfo, setUserInfo] = useState({});
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  console.log(user);

  useEffect(() => {
    try {
      axios
        .get(`http://localhost:4000/users/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setUserInfo(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  }, [token]);

  return (
    //MAKE CUSTOM CSS CLASSES
    <div className="flex flex-col justify-between ronded-xl">
      <div className="">
        <UserCard userInfo={userInfo} user={user} />
        {/*   <UserEdit /> */}
      </div>
    </div>
  );
}
