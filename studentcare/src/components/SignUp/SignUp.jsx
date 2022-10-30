import React, { useRef } from "react";
import axios from "axios"

function SignUp() {
  const fullName = useRef();
  const email = useRef();
  const password = useRef();
  // const [hostel, setHostel ] = useState(false);
  const handleSubmit = async (e) => {
    // var q1 = document.getElementById("hostel").value
    // setHostel(q1)
    e.preventDefault();
    const data = {
      fullName: fullName.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    if (password.current.value.length < 6) {
      document.getElementById("errordiv").innerHTML =
        "Password Should be Minimum of 6 Characters";
    } else {
      try {
        await axios.post("/api/auth/register", data);
        window.location.replace("/login");
      } catch (err) {
        console.log(err);
        document.getElementById("errordiv").innerHTML =
          "Something wents wrong.";
      }
    }
  };
  return (
    <div className='loginpage'>
      <div className="container loginform signupform">
        <div className="forms">
          <form action="" className="formlogin" onSubmit={handleSubmit}>
            {/* <img src={logo} alt="" /> */}
            <h1 style={{ color: "black" }}>Sign Up</h1>
            <div id="errordiv" style={{ color: "red" }}></div>
            <input
              type="text"
              placeholder="Full Name"
              className="input"
                ref={fullName}
            />
            <input
              type="email"
              placeholder="Email"
              className="input"
                ref={email}
            />
            <input
              type="password"
              placeholder="Password"
              className="input"
                ref={password}
            />
            {/* <p>Are you a PICT hostel student ?</p>
            <div className="checkboxdiv">
              <div>
              <label htmlFor="Yes">Yes</label>
              <input type="checkbox" id="hostel" value={true} ref={hostel} />
              </div>

            </div> */}
            <button type="submit" className="button-18 mt-4">
              Sign Up
            </button>
            <p style={{ color: "black" }}>
              Already have an account ? <a href="/login">Login</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
