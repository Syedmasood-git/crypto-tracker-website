import React, { useState } from "react";
import "./style.css";
import Input from "../Common/Input";
import { toast } from "react-toastify";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, db, provider } from "../../config/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Button_signup from "../Common/Button_signup";

const SignupSignin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loginForm, setLoginForm] = useState(false);
  const navigate = useNavigate();

  function signupWithEmail() {
    if (name != "" && email != "" && password != "" && confirmPassword != "") {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("User>>>", user);
          toast.success("User Created Succesfully!");
          navigate("/home");
          createDoc(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorMessage);
          // ..
        });
    } else {
      toast.error("All Fields are mandatory!...");
    }
  }
  function loginWithEmail() {
    if (email != "" && password != "") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          toast.success("User Logged In!", user);
          navigate("/home");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error("Invalid Username  or Password");
        });
    } else {
      toast.error("All Fields are mandatory!...");
    }
  }
  async function createDoc(user) {
    if (!user) return;

    const userRef = doc(db, "users", user.uid);
    const userData = await getDoc(userRef);
    if (!userData.exists()) {
      const { displayName, email, photoURL } = user;
      const createdAt = new Date();
      try {
        await setDoc(userRef, {
          name: displayName ? displayName : name,
          email: email,
          photoURL: photoURL ? photoURL : "",
          createdAt,
        });
        toast.success("Doc created");
      } catch (err) {
        toast.error(err.message);
      }
    } else {
      // toast.error("Doc already exists");
    }
  }
  function googleAuth() {
    try {
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
          console.log("use>>", user);
          toast.success("User  Authenticated");
          createDoc(user);
          navigate("/home");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.customData.email;
          const credential = GoogleAuthProvider.credentialFromError(error);
          toast.error(errorMessage);
          // ...
        });
    } catch (error) {}
  }

  return (
    <>
      {loginForm ? (
        <div className="signup-wrapper">
          <h2 className="title">
            Login to <span style={{ color: "var(--theme" }}> Crypto Tracker.</span>
          </h2>
          <form>
            <Input
              type="email"
              label={"Email"}
              state={email}
              setState={setEmail}
              placeholder={"JohnDoe@gmail.com"}
            />
            <Input
              type="password"
              label={"Password"}
              state={password}
              setState={setPassword}
              placeholder={"Example@1"}
            />
            <Button_signup
              text={"Login using Email and Password"}
              onClick={loginWithEmail}
            />
            <p className="p-login">or</p>
            <Button_signup
              onClick={googleAuth}
              text={"login using Google"}
              blue={true}
            />
            <p className="p-login" onClick={() => setLoginForm(!loginForm)}>
              Or Don't Have an Account? Click here
            </p>
          </form>
        </div>
      ) : (
        <div className="signup-wrapper">
          <h2 className="title">
            Sign Up to <span style={{ color: "var(--theme" }}> Crypto Tracker.</span>
          </h2>
          <form>
            <Input
              type="text"
              label={"Full Name"}
              state={name}
              setState={setName}
              placeholder={"John Doe"}
            />
            <Input
              type="email"
              label={"Email"}
              state={email}
              setState={setEmail}
              placeholder={"JohnDoe@gmail.com"}
            />
            <Input
              type="password"
              label={"Password"}
              state={password}
              setState={setPassword}
              placeholder={"Example@1"}
            />
            <Input
              type="password"
              label={"Confirm Password"}
              state={confirmPassword}
              setState={setConfirmPassword}
              placeholder={"Example@1"}
            />
            <Button_signup
              text={"Signup using Email and Password"}
              onClick={signupWithEmail}
            />
            <p className="p-login">or</p>
            <Button_signup
              onClick={googleAuth}
              text={"Signup using Google"}
              blue={true}
            />
            <p className="p-login" onClick={() => setLoginForm(!loginForm)}>
              Or Have an Account Already? Click here
            </p>
          </form>
        </div>
      )}
    </>
  );
};

export default SignupSignin;
