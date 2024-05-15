import { memo, useState } from "react";
import { ArrowRight } from "lucide-react";
import InputBox from "../components/InputBox"

import Quote from "../components/quote";
import { Link } from "react-router-dom";
import axios from "axios";

export function SignUp() {

    const [SignUpData, setSignUpData] = useState({
        name: "",
        email: "",
        password: ""
    })
    
    async function signUp(){
        let backend=import.meta.env.VITE_BACKEND_URL;
        
        await axios.post(`${backend}api/v1/user/signup`,SignUpData).then((res)=>{
            let data = res.data;
            if(data.token){
                alert("Sign up successful")
            }
        }).catch((err)=>{
            console.log(err);
            alert("Sign up failed")
        })
    }

  return (
    <section className="flex w-screen h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 ">
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
          Sign up
        </h2>
        <p className="mt-2 text-base text-gray-600">
          Already have an account?{" "}
          <Link to="/signin" className="font-medium text-black transition-all duration-200 hover:underline">Sign In</Link>
        </p>
        <form action="#" method="POST" className="mt-8">
          <div className="space-y-5">
            <InputBox type="text" placeholder="Full Name" id="name" label="Full Name" onChange={(e)=>{setSignUpData({...SignUpData,name:e.target.value})}}/>
            <InputBox type="email" placeholder="Email Address" id="email" label="Email Address" onChange={(e)=>{setSignUpData({...SignUpData,email:e.target.value})}}/>
            <InputBox type="password" placeholder="Password" id="password" label="Password" onChange={(e)=>{setSignUpData({...SignUpData,password:e.target.value})}}/>
            <div>
              <button
                type="button"
                onClick={signUp}
                className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
              >
                Create Account <ArrowRight className="ml-2" size={16} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
        <Quote />
      </div>
    </section>
  )
}



export default memo(SignUp);