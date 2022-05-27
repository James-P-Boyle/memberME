import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function Upload() {
  const [captionState, setCaptionState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const navigate = useNavigate();

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
      await axios.post(
        "http://localhost:4000/posts",
        { base64: base64EncodedImage, caption: captionState },
        {
          headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      navigate("/");
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
      //toastify success message
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="shadow-lg rounded-lg mt-20">
      <form className="px-2 flex items-center gap-1">
        <input
          type="text"
          name="caption"
          className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 my-2 mx-auto dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Caption ..."
          onChange={(e) => setCaptionState(e.target.value)}
          value={captionState}
          required
        />
        <div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold h-10 w-10 rounded-full"
            onClick={handleSubmitFile}
          >
            +
          </button>
        </div>
        <label className=" cursor-pointer" htmlFor="files">
          <svg
            className="w-10 h-10 text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <input
          onChange={(e) => previewFile(e.target.files[0])}
          id="files"
          type="file"
          name="img"
          className="hidden"
        />
      </form>
    </div>
  );
}
