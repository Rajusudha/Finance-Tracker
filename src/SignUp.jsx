import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Header from "./components/Header";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [displayName, setDisplayName] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async () => {
    const { name, email, password, confirmPassword } = form;

    if (!name || !email || !password || !confirmPassword) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(userCredential.user, {
        displayName: name,
      });

      setDisplayName(name);
      toast.success("Account created successfully!");
      navigate("/"); // redirect to home or dashboard
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("This email is already registered. Please sign in.");
      } else if (error.code === "auth/invalid-email") {
        toast.error("Please enter a valid email address.");
      } else if (error.code === "auth/weak-password") {
        toast.error("Password must be at least 6 characters.");
      } else {
        toast.error("Signup failed. Please try again.");
        console.error(error); // for debugging
      }
    }
  };

  return (
    <>
    <Header/>
    <div className="form">
      <h2 style={{textAlign:"center"}}>Sign Up On <span style={{color:"#007BFF"}}>Financely</span>.</h2>

      <input
        type="text"
        placeholder="Full Name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        type="email"
        placeholder="Email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />

      <input
        type="password"
        placeholder="Password"
        name="password"
        value={form.password}
        onChange={handleChange}
      />

      <input
        type="password"
        placeholder="Confirm Password"
        name="confirmPassword"
        value={form.confirmPassword}
        onChange={handleChange}
      />

      <button onClick={handleSignup} style={{cursor:"pointer"}}>Sign Up</button>
       <p>
        Already have an account? <Link to="/signin">Sign In</Link>
      </p>

      {displayName && (
        <p style={{ marginTop: "1rem", color: "green" }}>
          👋 Welcome, <strong>{displayName}</strong>!
        </p>
      )}
       
    </div>
    </>
  );
};

export default SignUp;
