import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Register.css";

const Register = () => {
  const [agree, setAgree] = useState(false);
  //user create with email and password
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, upDateError] = useUpdateProfile(auth);

  const navigate = useNavigate();

  const navigateToLogin = (event) => {
    navigate("/login");
  };

  if (loading || updating) {
    return <Loading></Loading>;
  }

  // jodi user toire hoy....take home a niye jao

  if (user) {
    console.log("user", user);
  }

  // handle register form
  const handleRegister = async (event) => {
    event.preventDefault();
    // console.log(event.target); // full formta accesshobe
    // console.log(event.target.email); // email k access kora
    // console.log(event.target.email.value); // email er value ta k access kora
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const agree = event.target.terms.checked; [ 1ta system]

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log("Updated profile");
    navigate("/home");
  };
  return (
    <div className="register-form">
      <h2 className="text-center py-3">Please Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" placeholder="name" required />
        <input
          type="email"
          name="email"
          placeholder="enter your email"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
        />
        <input
          onClick={() => setAgree(!agree)}
          style={{ width: "20px", height: "15px" }}
          type="checkbox"
          name="terms"
          id="terms"
        />
        <label
          // className={agree ? "text-primary fw-bold " : "text-danger"} ( one way)
          className={`ps-2 fw-bold ${agree ? "text-primary" : "text-danger"}`}
          htmlFor="terms"
        >
          Accept with terms and Condition
        </label>
        <input
          disabled={!agree} // if not agree then register btn will be disabled
          className="bg-primary w-50 mx-auto d-block mt-3 fw-bold"
          type="submit"
          value="Register"
        />
      </form>
      <p className="text-center fw-bold">
        Already have an account ?
        <Link
          to="/login"
          onClick={navigateToLogin}
          className="text-danger px-3 fw-bold pe-auto text-decoration-none"
        >
          Please Login
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
