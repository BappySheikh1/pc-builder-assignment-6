import Head from 'next/head';
import { FaGithub,FaGoogle } from 'react-icons/fa';
import { signIn, useSession } from "next-auth/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from '@/redux/hook';

const LoginPage = () => {
    const dispatch = useAppDispatch();
    const { data: session } = useSession()
    console.log(session?.user?.email)
    const handelGoogleLogin = () => {
      signIn("google", {
        callbackUrl: "http://localhost:3000/",
      })
     
    }
    const handelGithubLogin = () => {
      signIn("github", {
        callbackUrl: "http://localhost:3000/",
      })
      
    }

    return (
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <h1 className="text-center text-2xl">Login now!</h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control">
                  <button className="btn btn-primary">Login</button>
                </div>
                <div className="flex justify-evenly mt-4">
                  <button
                    onClick={handelGoogleLogin}
                    className="text-3xl"
                  >
                    <FaGoogle />
                  </button>
                  <button
                    onClick={handelGithubLogin}
                    className="text-3xl"
                  >
                    <FaGithub />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
};

export default LoginPage;
