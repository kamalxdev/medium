import { memo } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <section className=" p-4">
      <div className="flex justify-between items-center">
        <div>
          <Link to="/" className=" text-2xl font-semibold mr-10 ">
            Medium
          </Link>
          <Link to="/blogs" className="underline">
            Blogs
          </Link>
        </div>
        <div className="flex justify-between items-center gap-4">
          {localStorage.getItem("token") ? (
            <>
              <Link to="/create" className="p-2 bg-green-400 rounded-md ">
                Create Blog
              </Link>
              <Link to="/signin" className="underline">
                Sign Out
              </Link>
            </>
          ) : (
            <>
              <Link to="/signin" className="underline">
                Sign In
              </Link>
              <Link to="/signup" className="underline">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default memo(Navbar);
