export default function UploadImage() {
  return (
    <div className="border-8 max-w-md mx-auto">
      <h1>Upload your image</h1>
      <form className="grid">
        <input
          type="text"
          name="caption"
          className=""
          placeholder="enter caption"
        />
        <input type="file" name="img" className="" />
        <button
          type="submit"
          className="px-10 py-5 bg-slate-300 hover:bg-slate-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
