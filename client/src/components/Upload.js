import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import axios from "axios";
import { toast } from "react-toastify";
import { addPost } from "../redux/reducers/posts";

export default function Upload({ setOpen, open }) {
  const [captionState, setCaptionState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const previewFile = (file) => {
    const reader = new FileReader();
    //this will convert image to string
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!previewSource) return;
    uploadImage(previewSource);
  };

  const uploadImage = async (base64EncodedImage) => {
    try {
      const { data } = await axios.post(
        "http://localhost:4000/posts",
        { base64: base64EncodedImage, caption: captionState },
        {
          headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      dispatch(addPost(data));

      toast("Saving", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setCaptionState("");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="rounded-lg">
      <form className="flex items-center gap-1">
        <input
          type="text"
          name="caption"
          className=" border w-full my-2 border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Caption ..."
          onChange={(e) => setCaptionState(e.target.value)}
          value={captionState}
          required
        />

        <label className="cursor-pointer" htmlFor="files">
          <i className="fa fa-folder text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md font-medium cursor-pointer"></i>
        </label>
        <input
          onChange={(e) => previewFile(e.target.files[0])}
          id="files"
          type="file"
          name="img"
          className="hidden"
        />

        <div>
          <button
            type="submit"
            className="hover:bg-gray-700 text-white font-bold h-8 w-8 rounded-full"
            onClick={handleSubmitFile}
          >
            <i className="fa fa-plus text-gray-300 hover:bg-gray-700 hover:text-white rounded-md cursor-pointer"></i>
          </button>
        </div>
      </form>
    </div>
  );
}
