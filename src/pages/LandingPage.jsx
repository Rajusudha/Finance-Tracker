import React from "react";
import { Link } from "react-router-dom";
import SignIn from "../SignIn";
// import Header from "../components/Header";

const LandingPage = () => {
  return (
    <div className="landing" style={{ padding: "2rem" }}>
      {/* <Header/> */}
      {/* <h2>Welcome to MyApp</h2> */}
      {/* <p style={{ color: "black" }}>djfvikdjfvnkdf</p> */}
      <SignIn/>
      {/* <p>Manage your tasks, notes, and life with ease.</p> */}
      {/* <p>
        Already have an account? <Link to="/signin">Sign In</Link>
      </p> */}
      {/* <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p> */}
    </div>
  );
};

export default LandingPage;
