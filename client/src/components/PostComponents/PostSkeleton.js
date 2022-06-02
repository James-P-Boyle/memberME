export default function PostSkeleton() {
  return (
    <>
      <div className="col-start-5 mt-16 h-12 dark:bg-gray-600 bg-gray-100 animate-pulse rounded-xl flex items-center max-w-lg mx-auto">
        <div className="mx-auto rounded-xl dark:bg-gray-500 h-8 w-16 bg-gray-200"></div>
      </div>
      <div className="sm:rounded-xl mt-2 p-2 h-88 max-w-lg mx-auto animate-pulse bg-gray-100 dark:bg-gray-600">
        <div className="h-12 dark:bg-gray-500 bg-gray-200 rounded-xl"></div>
        <div className="h-52 my-2 dark:bg-gray-500 bg-gray-200 rounded-md"></div>
        <div className="h-16 my-2 dark:bg-gray-500 bg-gray-100 rounded-xl flex items-center">
          <div className="dark:bg-gray-600 bg-gray-200 w-full rounded-xl h-10 mx-2"></div>
          <div className="dark:bg-gray-600 bg-gray-200 w-20 rounded-xl h-10 mr-2"></div>
        </div>
      </div>
      <div className="sm:rounded-xl mt-2 p-2 h-88 max-w-lg mx-auto animate-pulse bg-gray-100 dark:bg-gray-600">
        <div className="h-12 dark:bg-gray-500 bg-gray-200 rounded-xl"></div>
        <div className="h-52 my-2 dark:bg-gray-500 bg-gray-200 rounded-md"></div>
        <div className="h-16 my-2 dark:bg-gray-500 bg-gray-100 rounded-xl flex items-center">
          <div className="dark:bg-gray-600 bg-gray-200 w-full rounded-xl h-10 mx-2"></div>
          <div className="dark:bg-gray-600 bg-gray-200 w-20 rounded-xl h-10 mr-2"></div>
        </div>
      </div>
    </>
  );
}
