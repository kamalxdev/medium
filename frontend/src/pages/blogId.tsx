import axios from "axios";
import { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type iblog = {
  author: {
    name: string;
    email: string;
  };
  title: string;
  content: string;
  date: string;
  id: string;
};

function BlogId() {
  const id = useParams().id;
  const [blog, setBlog] = useState<iblog>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BACKEND_URL + "api/v1/blog/" + id, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setLoading(false);
        setBlog(res.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [id]);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {blog ? (
        <section className="">
          <div className=" md:mx-40 p-8">
            <div className="mb-4">
              <h1 className="text-3xl font-semibold">
                <i>{blog?.title}</i>{" "}
              </h1>
              <figcaption className="text-slate-500">
                <cite>
                  {blog?.date || "16 March 2023"} by {blog?.author?.name}
                </cite>
              </figcaption>
            </div>
            <p className="text-xl ">{blog?.content}</p>
          </div>
        </section>
      ) : (
        <div>Invalid route</div>
      )}
    </div>
  );
}

export default memo(BlogId);
