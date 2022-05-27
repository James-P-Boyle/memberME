import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function UploadImage() {
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
      //toastify success message
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="shadow-lg mx-auto rounded-lg mt-20">
      <form className="grid grid-cols-12 px-2">
        <button type="submit" className="">
          PIC.
        </button>
        <input
          type="text"
          name="caption"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-lg col-span-10 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 my-2 mx-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="enter caption"
          onChange={(e) => setCaptionState(e.target.value)}
          value={captionState}
          required
        />

        <div className="">
          <input
            onChange={(e) => previewFile(e.target.files[0])}
            id="files"
            type="file"
            name="img"
            className="hidden"
          />
          <label htmlFor="files" className="text-6xl">
            +
          </label>
        </div>
      </form>
      <div className="text-4xl text-center capitalize font-semibold border-1 mx-auto max-w-fit px-5 rounded-2xl shadow-xl hover:shadow-2xl">
        <>
          <h1>{captionState}</h1>
          {previewSource && (
            <>
              <img
                src={previewSource}
                className="mx-auto max-h-80 p-5 "
                alt={captionState}
              />
              <button
                type="submit"
                onClick={handleSubmitFile}
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 col-span-1 border-b-4 border-blue-700 hover:border-blue-500 my-4 rounded"
              >
                Upload
              </button>
            </>
          )}
        </>
      </div>
    </div>
  );
}
