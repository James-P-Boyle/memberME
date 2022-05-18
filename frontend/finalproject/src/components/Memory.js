import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Memory() {
  const [memory, setMemory] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/posts/${id}`, {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => setMemory(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {memory ? (
        <div className="mx-auto border-green-500 border max-w-xl">
          <button
            className="bg-slate-400 px-3 py-4"
            onClick={() => navigate(-1)}
          >
            go back
          </button>
          <div className="flex items-end justify-between px-2 py-4 font-bold">
            <h1 className="text-3xl capitalize">{memory.caption}</h1>
            <p>{memory.date}</p>
          </div>

          <img src={memory.img} alt="" className="max-h-30 max-w-30 mx-auto" />
        </div>
      ) : (
        "Loading"
      )}
    </div>
  );
}
