import axios from "axios";
import { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BlogSkeleton } from "../components/skeleton/blog";



type iPost = {
  author: {
    name: string;
    email: string;
  }
  title: string;
  content: string;
  date: string;
  id: string;
}

export function Blog() {
  const [post,setPost]=useState<iPost[]>([]);
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    let url = import.meta.env.VITE_BACKEND_URL +"api/v1/blog/bulk";
    axios.get(url,{
      headers:{
        "Authorization":localStorage.getItem("token")
      }
    }).then((res)=>{
      setLoading(false);
      
      setPost(res.data);
      
    }).catch((err)=>{
      setLoading(false);
      console.log(err);
    });
  },[])
  if(loading){
    return <BlogSkeleton/>
  }
  return (
    <div >
      <div className="max-w-7xl px-4 rounded-md md:mx-44">

        <div className="flex flex-col gap-6 gap-y-10 py-6">
          {post.map((post,index) => (
            <Post
              key={index}
              title={post?.title}
              content={post?.content}
              author={post?.author?.name}
              id={post?.id}
              date={post?.date || "16 March 2024"}
            />
          ))}
        </div>
        <div className="w-full border-t border-gray-300">
          <div className="mt-2 flex items-center justify-between">
            <div className="hidden md:block">
              <p>
                showing <strong>1</strong> to <strong>10</strong> of{" "}
                <strong>20</strong> results
              </p>
            </div>
            <div className="space-x-2">
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                &larr; Previous
              </button>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


type iPostProp = {
  title: string;
  content: string;
  author: string;
  date: string;
  id: string;
}


const Post = memo((post:iPostProp) => {
  return (
    <div key={post.title} className="border rounded-sm">
      <div className="min-h-min p-3">
        <Link to={"/blog/"+post.id} className="mt-4 flex-1 text-xl font-semibold text-gray-900">{post.title}</Link>
        <p className="mt-4 w-full text-sm leading-normal text-gray-600">
          {post.content.slice(0, 200) + "..."}
        </p>
        <div className="mt-4 flex space-x-3 ">
          <Avatar name={post.author}/>
          <div>
            <p className="text-sm font-semibold leading-tight text-gray-900">
              {post.author}
            </p>
            <p className="text-sm leading-tight text-gray-600">{post.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
});


const Avatar =memo((props:{name:string})=>{
  const color =["#F77E64","#F7AE64","#F7E764","#64F7B2","#64F7F2","#647FF7","#B264F7","#F764F7","#F764A6","#F76464"]
  
  return (
    <div className="h-10 w-10 rounded-full  flex justify-center items-center font-semibold " style={{background:color[Math.floor(Math.random()*color.length)]}}>
      {props.name[0].toUpperCase()}
    </div>
  )
})

export default memo(Blog);
