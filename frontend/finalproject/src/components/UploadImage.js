import { useState } from "react";

export default function UploadImage() {
  const [fileInputState, setFileInputState] = useState("");
  const [captionState, setCaptionState] = useState("");
  const [previewSource, setPreviewSource] = useState("");

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];

    previewFile(file);
  };
  const handleInputChange = (e) => {
    const val = e.target.value;
    setCaptionState(val);
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
    console.log(base64EncodedImage);
    try {
      await fetch("http://localhost:4000/posts", {
        method: "POST",
        body: JSON.stringify({
          base64: base64EncodedImage,
          caption: captionState,
        }),
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2QxOTlmZmM0MGZiOTRhNDYyOGJhMSIsImVtYWlsIjoiamFtZSIsImlhdCI6MTY1MjM2NTcyNywiZXhwIjoxNjUyMzk1NzI3fQ.codhTl9QL_KF95b1WGxmM6ZnzALCmDOjRCLC-bpexYY`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-3 border-8 max-w-6xl mx-auto rounded-lg">
      <div className="max-w-xl mx-auto p-3 md:p-1">
        <h1 className="text-3xl font-bold mb-3">Upload your image</h1>
        <form className="grid" onSubmit={handleSubmitFile}>
          <input
            type="text"
            name="caption"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg mb-3 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="enter caption"
            onChange={handleInputChange}
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
