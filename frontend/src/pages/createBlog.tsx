import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";





 function CreateBlog() {
    const [data, setData] = useState({ title: "", content: ""});
    const [loading, setLoading] = useState(false);
    const navigate =useNavigate()
    async function createBlog() {
        setLoading(true);
        await axios.post(import.meta.env.VITE_BACKEND_URL + "api/v1/blog/", {
            ...data,
            published: true,
          },
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
        }).then((res) => {
            setLoading(false);
            if (res.status === 200) {
                alert("Blog created successfully");
                navigate("/blogs")
            }
        }).catch((err) => {
            setLoading(false);
            console.log(err);
            alert("Error on creating blog");
        });
    }
    if (loading) {
        return <div>Loading...</div>;
    }
  return (
    <section className="mx-10 md:mx-20">
        <div className="">
            <h1 className="text-2xl font-semibold">Create Blog</h1>
        </div>
      <div className="flex flex-col ml-2 my-5">
        <input
          type="text"
          className="outline-none text-2xl font-semibold"
          placeholder="Title..."
          onChange={(e) => {setData({...data, title: e.target.value})}}
        />
        <hr />
        <textarea
          name=""
          id=""
          className="outline-none text-xl font-extralight text-slate-600 resize-none h-96"
          placeholder="Content..."
          onChange={(e) => {setData({...data, content: e.target.value})}}
        ></textarea>
      </div>
      <div className="flex items-center justify-center">
      <button onClick={createBlog} className="text-xl font-semibold mb-5 bg-green-400 py-2 px-5 rounded-md">
        Create
      </button>
      </div>
    </section>
  );
}

export default CreateBlog
