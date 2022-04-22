import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageTitle from "../../Shared/PageTitle/PageTitle";

const Login = () => {
  // useref
  const emailRef = useRef(""); // string value empty thakbe
  const passwordRef = useRef("");
  const navigate = useNavigate();

  // jodi user registered hy then sign in/ login korbe

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  // reset password

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  // error
  let errorElement; // for error

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  // loading

  if (loading || sending) {
    return <Loading></Loading>;
  }

  // if user created
  if (user) {
    navigate("/home");
  }

  // handle submit
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  const navigateToRegister = (event) => {
    navigate("/register");
  };

  const sendResetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("please enter email address");
    }
  };

  return (
    <div className="container w-50 mx-auto py-2">
      <PageTitle title="Login"></PageTitle>
      <h2 className="text-center text-primary"> Please Login</h2>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button
          variant="primary btn-primary w-50 mx-auto d-block p-2"
          type="submit"
        >
          Login
        </Button>
      </Form>
      {errorElement}
      <p className="mt-3 fw-bold text-center">
        New to Genius Car ?
        <Link
          to="/register"
          onClick={navigateToRegister}
          className="text-primary px-3 fw-bold pe-auto text-decoration-none"
        >
          Please Register
        </Link>
      </p>
      <p className="mt-3 fw-bold text-center">
        Forgot Password ?
        <button
          onClick={sendResetPassword}
          className="btn btn-link text-primary px-3 fw-bold pe-auto text-decoration-none"
        >
          Reset Password
        </button>
      </p>
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;
