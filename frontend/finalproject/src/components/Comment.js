export default function Comment({ post }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="w-full p-5" onSubmit={handleSubmit}>
      <div className="flex">
        <label for="comment"></label>
        <textarea
          className="w-full h-10 p-2 border rounded-lg focus:outline-none focus:ring-gray-300 focus:ring-1"
          name="comment"
          placeholder="Leave your memory ..."
        ></textarea>
        <button className="px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded">
          Save
        </button>
      </div>
    </form>
  );
}
