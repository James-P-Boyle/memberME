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
    setOpen(!open);
    if (!previewSource) return;
    uploadImage(previewSource);
  };

  const uploadImage = async (base64EncodedImage) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/posts`,
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
    <div className="md:rounded-lg mx-3">
      <form className="flex items-center gap-1">
        <input
          type="text"
          name="caption"
          className="border w-full my-2 pl-2 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Caption ..."
          onChange={(e) => setCaptionState(e.target.value)}
          value={captionState}
          required
        />

        <label className="cursor-pointer" htmlFor="files">
          <i className="fa fa-folder dark:hover:bg-gray-600 hover:bg-gray-300 hover:text-white text-gray-500 px-3 py-3 rounded-full font-medium cursor-pointer"></i>
        </label>
        <input
          onChange={(e) => previewFile(e.target.files[0])}
          id="files"
          type="file"
          name="img"
          className="hidden"
        />

        {previewSource && (
          <div>
            <button
              type="submit"
              className="dark:hover:bg-gray-600 hover:bg-gray-300 hover:text-white text-gray-500 px-3 py-1 rounded-full font-medium cursor-pointer"
              onClick={handleSubmitFile}
            >
              <i className="fa fa-plus text-gray-400 hover:text-white rounded-md cursor-pointer"></i>
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
