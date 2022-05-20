import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function UploadImage() {
  const [fileInputState, setFileInputState] = useState("");
  const [captionState, setCaptionState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const navigate = useNavigate();

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

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
    <div className="border-8 max-w-6xl mx-auto rounded-lg mt-20">
      <div className="max-w-xl mx-auto p-3 md:p-1">
        <h1 className="text-3xl font-bold mb-3">Upload your image</h1>
        <form className="grid" onSubmit={handleSubmitFile}>
          <input
            type="text"
            name="caption"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg mb-3 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="enter caption"
            onChange={(e) => setCaptionState(e.target.value)}
            value={captionState}
            required
          />
          <input
            onChange={handleFileInputChange}
            value={fileInputState}
            type="file"
            name="img"
            className=""
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 my-4 rounded"
          >
            Upload
          </button>
        </form>
        <div className="text-4xl text-center capitalize font-semibold">
          <>
            <h1>{captionState}</h1>
            {previewSource && (
              <img
                src={previewSource}
                className="mt-3 mx-auto"
                alt={captionState}
              />
            )}
          </>
        </div>
      </div>
    </div>
  );
}
