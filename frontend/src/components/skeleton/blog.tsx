
import { memo} from "react";



export function BlogSkeleton() {
    const post=[{},{},{}]
  return (
    <div className="animate-pulse">
      <div className="max-w-7xl px-4 rounded-md md:mx-44">
        <div className="flex flex-col gap-6 gap-y-10 py-6">
          {post.map(() => (
            <Post
            />
          ))}
        </div>
      </div>
    </div>
  );
}




const Post = memo(() => {
  return (
    <div className="border rounded-sm">
      <div className="min-h-min p-3">
      <div className="bg-gray-200 h-2 rounded-full mb-2.5 mt-4"></div>

        <p className="mt-4 w-full text-sm leading-normal text-gray-600">
        <div className="bg-gray-200 h-2 rounded-full mb-2.5"></div>
        
        </p>
        <div className="mt-4 flex space-x-3 ">
          <Avatar/>
          <div>
            <p className="text-sm font-semibold leading-tight text-gray-900">
                <div className="bg-gray-200 h-2 rounded-full mb-2.5"></div>
            </p>
            <p className="text-sm leading-tight text-gray-600">
        <div className="bg-gray-200 h-2 rounded-full mb-2.5"></div>

            </p>
          </div>
        </div>
      </div>
    </div>
  );
});


const Avatar =memo(()=>{
  return (
    <div className="h-10 w-10 rounded-full  flex justify-center items-center font-semibold bg-gray-200">

    </div>
  )
})

export default memo(BlogSkeleton);
