import { useState } from "react";

export default function UploadImage() {
  const [fileInputState, setFileInputState] = useState("");
  const [captionState, setCaptionState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [selectedFile, setSelectedFile] = useState("");

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
    <div className="border-8 max-w-md mx-auto">
      <h1>Upload your image</h1>
      <form className="grid" onSubmit={handleSubmitFile}>
        <input
          type="text"
          name="caption"
          className=""
          placeholder="enter caption"
          onChange={handleInputChange}
          value={captionState}
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
          className="px-10 py-5 bg-slate-300 hover:bg-slate-200"
        >
          Submit
        </button>
      </form>
      <div className="">
        {previewSource && <img src={previewSource} className="w-full" alt="" />}
      </div>
    </div>
  );
}
