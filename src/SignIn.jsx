import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase"; // Make sure this path is correct
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Header from "./components/Header";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignin = async () => {
  if (!email || !password) {
    toast.error("Please fill in all fields.");
    return;
  }

  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Signed in successfully!");
    navigate("/Dashbord"); // ✅ redirect to dashboard
  } catch (error) {
    toast.error(error.message);
  }
};

  

  return (
    
   <>
   <Header/>
    <div className="form">
     
      <h2>Sign In</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button onClick={handleSignin} style={{cursor:"pointer"}}>Sign In</button>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
   </>
  );
};

export default SignIn;
