import React from "react";
import google from "../../../imgs/google.png";
import { SiFacebook } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  const navigate = useNavigate();
  // social login

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

  let errorElement; // for error

  if (error || error1) {
    errorElement = (
      <p className="text-danger">
        Error: {error?.message} {error1.message}
      </p>
    );
  }

  if (loading || loading1) {
    return <Loading></Loading>;
  }

  if (user || user1) {
    navigate("/home");
  }

  return (
    <>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="w-50 bg-primary"></div>
        <p className="px-3">or</p>
        <div style={{ height: "1px" }} className="w-50 bg-primary"></div>
      </div>
      {errorElement}
      <div className="py-3">
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-primary d-block w-50 mx-auto"
        >
          <img style={{ width: "50px" }} src={google} alt="" />
          <span> Sign In With Google</span>
        </button>
      </div>
      <div className="py-3">
        <button className="btn btn-primary d-block w-50 mx-auto">
          <SiFacebook className="fs-2 w-25 mx-auto"></SiFacebook>
          <span> Sign In With Facebook</span>
        </button>
      </div>
      <div className="py-3">
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-primary d-block w-50 mx-auto"
        >
          <BsGithub className="fs-2 w-25 mx-auto"></BsGithub>
          <span> Sign In With Github</span>
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
