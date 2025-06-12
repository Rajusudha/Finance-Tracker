import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Dashbord from "../components/Dashbord"

const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/signin");
  };
  

  return (
    <header className="header" style={{background:"#007BFF"}} >
      <h2>💰 MyFinance</h2>

      <nav>
        

        {user ? (
          <button
            onClick={handleLogout}
            className="btn"
            style={{
              background: "#007BFF",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              marginLeft: "1rem",
              fontSize:"20px"
            }}
          >
            Logout
          </button>
        ) : (
          <>
            {/* <Link to="/signin" style={{ marginLeft: "1rem" }}>Sign In</Link>
            <Link to="/signup" style={{ marginLeft: "1rem" }}>Sign Up</Link> */}
            <Link to="/Dashbord" style={{background:"#007BFF"}}>Dashboard</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
