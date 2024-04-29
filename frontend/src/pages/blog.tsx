import axios from "axios";
import { memo, useEffect, useState } from "react";

const posts = [
  {
    category: "Design",
    title: "10 Tips for Crafting the Perfect UX Portfolio",
    description:
      "Learn how to showcase your design skills and stand out in a crowded job market.",
    author: "Emily Lee",
    date: "3 April 2023",
    avatar:
      "https://www.uifaces.co/wp-content/uploads/2022/01/uifaces-logo.svg",
    poster:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
  },
  {
    category: "Technology",
    title: "The Future of Mobile App Development",
    description:
      "Discover the latest trends and techniques that will shape the future of mobile app development.",
    author: "John Smith",
    date: "1 April 2023",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    poster:
      "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
  },
  {
    category: "Business",
    title: "How to Launch a Successful Startup",
    description:
      "Learn the essential steps to launch a successful startup and make your dreams a reality.",
    author: "Sarah Brown",
    date: "28 March 2023",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    poster:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  {
    category: "Health",
    title: "The Benefits of Mindfulness Meditation",
    description:
      "Discover the scientifically proven benefits of mindfulness meditation and how it can improve your health and wellbeing.",
    author: "David Kim",
    date: "25 March 2023",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    poster:
      "https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  {
    category: "Education",
    title: "Why Learning a Second Language is Important",
    description:
      "Explore the benefits of learning a second language and how it can improve your cognitive abilities.",
    author: "Maria Rodriguez",
    date: "22 March 2023",
    avatar: "https://randomuser.me/api/portraits/men/97.jpg",
    poster:
      "https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  {
    category: "Travel",
    title: "The Best Places to Visit in Europe",
    description:
      "Discover the top destinations in Europe and plan your dream vacation.",
    author: "Alex Johnson",
    date: "19 March 2023",
    avatar: "https://randomuser.me/api/portraits/men/99.jpg",
    poster:
      "https://images.unsplash.com/photo-1663616132598-e9a1ee3ad186?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  {
    category: "Food",
    title: "How to Make the Perfect Cup of Coffee",
    description:
      "Learn the secrets to making the perfect cup of coffee and impress your friends and family.",
    author: "Thomas Lee",
    date: "16 March 2023",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    poster:
      "https://images.unsplash.com/photo-1426260193283-c4daed7c2024?ixlib=rb-4.0.3&auto=format&fit=crop&w=1476&q=80",
  },
  {
    category: "Fashion",
    title: "The Latest Fashion Trends for Spring 2023",
    description:
      "Discover the hottest fashion trends for the upcoming spring season and stay ahead of the curve.",
    author: "Jessica Kim",
    date: "13 March 2023",
    avatar: "https://randomuser.me/api/portraits/women/47.jpg",
    poster:
      "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  {
    category: "Sports",
    title: "The Benefits of Yoga for Athletes",
    description:
      "Learn how practicing yoga can improve your athletic performance and prevent injuries.",
    author: "Michael Johnson",
    date: "10 March 2023",
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    poster:
      "https://plus.unsplash.com/premium_photo-1663012880499-47f1ca50459d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
];


type iPost = {
  author: string;
  title: string;
  content: string;
}

export function Blog() {
  const [post,setPost]=useState(posts);
  useEffect(()=>{
    let url = import.meta.env.VITE_BACKEND_URL +"api/v1/blog/bulk";
    axios.get(url).then((res)=>{}).catch((err)=>{});
  },[])
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 rounded-md">
        <h1 className="text-3xl font-semibold text-gray-900 mt-4">Blog</h1>
        <div className="flex flex-col gap-6 gap-y-10 py-6">
          {post.map((post) => (
            <Post
              key={post.title}
              title={post.title}
              content={post.description}
              author={post.author}
              date={post.date}
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
}


const Post = memo((post:iPostProp) => {
  return (
    <div key={post.title} className="border">
      <div className="min-h-min p-3">
        <p className="mt-4 flex-1 text-base font-semibold text-gray-900">
          {post.title}
        </p>
        <p className="mt-4 w-full text-sm leading-normal text-gray-600">
          {post.content}
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
  console.log(`bg-${color[Math.floor(Math.random()*color.length)]}-300`);
  
  return (
    <div className="h-10 w-10 rounded-full  flex justify-center items-center font-semibold " style={{background:color[Math.floor(Math.random()*color.length)]}}>
      {props.name[0].toUpperCase()}
    </div>
  )
})

export default memo(Blog);
