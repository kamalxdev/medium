import { memo } from "react";

function BlogIdSkeleton() {
  return (
    <div>
      <section className="">
        <div className=" md:mx-40 p-8">
          <div className="mb-4">
            <h1 className="text-3xl font-semibold">
              <i>
                <div className="bg-gray-200 h-2 rounded-full mb-2.5"></div>
              </i>{" "}
            </h1>
            <figcaption className="text-slate-500">
              <cite>
                <div className="bg-gray-200 h-2 rounded-full mb-2.5"></div>
              </cite>
            </figcaption>
          </div>
          <p className="text-xl ">
            <div className="bg-gray-200 h-64 rounded-md mb-2.5"></div>
            
          </p>
        </div>
      </section>
    </div>
  );
}

export default memo(BlogIdSkeleton);
