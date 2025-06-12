import { Routes, Route, Link } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import ProtectedRoute from "./ProtectedRoute";
import { useAuth } from "./authContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LandingPage from "./pages/LandingPage";
// import Header from "./components/Header";
// import "react-toastify/dist/ReactToastify.css";
import Dashbord from"./components/Dashbord"


const Home = () => {
  const { currentUser, logout } = useAuth();

  return (
    <div className="container">
      <h2>Welcome, {currentUser?.email}</h2>
      <button onClick={logout} >Logout</button>
    </div>
  );
};

function App() {
  return (
    <div className="container">
      {/* <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/signin">Sign In</Link>
      </nav> */}

      <Routes>
        {/* <Header/> */}
        {/* <Route path="/dashbord"element={<ProtectedRoute><Dashbord /></ProtectedRoute>} /> */}
         {/* <Route path="/" element={<LandingPage />} /> */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
         <Route path="/" element={<SignIn />} /> {/* Default route */}
        <Route path="/Dashbord" element={<Dashbord />} />
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute> }/>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
