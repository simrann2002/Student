import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homepage/Homepage";
import Createissue from "./components/CreateIssue/Createissue";
import Profile from "./components/Profile/Profile";
import Admin from "./components/Admin/Admin";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Feedbackpage from "./components/Feedbackpage/Feedbackpage";
import Aboutus from "./components/AboutUS/Aboutus";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div className="App">
      {user ? (
        <>
          <Navbar />
          <Router>
            <Routes>
              <Route path="/" element={<Homepage />} />
              {/* <Route exact path="/" element={<Login />} /> */}
              <Route exact path="/raiseissue" element={<Createissue />} />
              <Route exact path="/feedbacks" element={<Feedbackpage />} />
              <Route exact path="/admin" element={<Admin />} />
              <Route exact path="/profile" element={<Profile />} />
              <Route exact path="/aboutus" element={<Aboutus />} />
            </Routes>
          </Router>
          <Footer />
        </>
      ) : (
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/logout" element={<Login />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<SignUp />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
