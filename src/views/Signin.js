import React, { useEffect, useState } from "react";
import "./style.css";
import background from "../assets/img/background.png";
import { Login } from "API";
import { formatMs } from "@material-ui/core";
import { USER_DATA } from "API";
import { CHECK_AUTH } from "API";
import { USER_TYPE } from "API";
import { getStore } from "API";

export default function Signin() {
  const [showForget, setShowForget] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userType: "user",
  });

  const handleShowForget = () => {
    setShowForget(!showForget);
  };
  // const navigate = useNavigate();

  useEffect(() => {
    console.log(getStore(USER_DATA), "<<< get store");
    if (getStore(CHECK_AUTH) == "true") {
      // navigate("/admin");
      // window.location.href = "/admin";
      if (getStore(USER_DATA)?.userType == "admin") {
        window.location.href = "/admin/course";
      }
      if (getStore(USER_TYPE)?.userType == "user") {
        window.location.href = "/user/course";
      }
    }
  }, []);

  //   const submitLogin = async () => {
  //     console.log(login, "<<<<<");
  //     if (login.email == "" || login.password == "") {
  //       alert("check email/password ");
  //       return null;
  //     }
  //     try {
  //       console.log("checking login");
  //       console.log(login);
  //       const result = await axios.post(
  //         `http://13.92.23.100:3000/onboardingnew/api/v1/user/login`,
  //         {
  //           email: login.email,
  //           password: login.password,
  //         },
  //         {
  //           "Content-Type": "application/json",
  //         }
  //       );

  //       if (result.status == 200) {
  //         localStorage.setItem("organizationId", result.data.result.organization_id);
  //         localStorage.setItem("authToken", result.data.result.token);
  //         history("/Setup/department");
  //       } else {
  //         alert("Invalid email/password");
  //         console.log("invalid user name");
  //       }
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

  const submitLogin = () => {
    console.log(formData);
    // return null;
    Login(formData, async (res) => {
      console.log(res);
      alert(res.message);
      if (res.user) {
        await localStorage.setItem(USER_DATA, JSON.stringify(res.user[0]));
        await localStorage.setItem(CHECK_AUTH, JSON.stringify("true"));
        await localStorage.setItem(
          USER_TYPE,
          JSON.stringify(`${res.user[0].userType}`)
        );
        if (res.user[0].userType == "admin") {
          window.location.href = "/admin/course";
        }
        if (res.user[0].userType == "user") {
          window.location.href = "/user/course";
        }
      }
    });
  };

  return (
    <div className="signin-respo">
      <div>
        <img src={background} className="signin-image" />
      </div>
      <div
        className="mainpanel-sign"
        style={{ textAlign: "center", alignSelf: "center" }}
      >
        <div style={{}}>
          {/* <img
            src={zyyp_logo}
            style={{ marginBottom: "59px", marginRight: "210px" }}
          /> 
          <div className="signin-welcome" style={{ marginRight: "205px" }}>
            Welcome back
          </div>*/}
          <div className="signin-title">Login to your account</div>
          {showForget ? (
            <>
              <div className="signin-welcome">Email</div>
              {/* <input
                className="signin-input"
                placeholder="John.snow@gmail.com"
              /> */}
              <input
                type="email"
                id="email"
                className="signin-input"
                placeholder="John.snow@gmail.com"
                value={formData.email}
                onChange={(value) =>
                  setFormData({ ...formData, email: value.target.value })
                }
              />
              <div className="signin-welcome">Password</div>
              <div>
                {/* <input
                  className="signin-input"
                  placeholder="•••••••••"
                  type={"password"}
                /> */}
                <input
                  type="password"
                  id="password"
                  className="signin-input"
                  placeholder="•••••••••"
                  value={formData.password}
                  onChange={(value) =>
                    setFormData({ ...formData, password: value.target.value })
                  }
                />
              </div>
            </>
          ) : (
            <>
              {/* <div className="signin-welcome">Name</div> */}
              {/* <input
                className="signin-input"
                placeholder="John.snow@gmail.com"
              /> */}

              <div className="signin-welcome">Email</div>
              <input
                className="signin-input"
                placeholder="John.snow@gmail.com"
                value={formData.email}
                onChange={(value) =>
                  setFormData({ ...formData, email: value.target.value })
                }
              />
              <div className="signin-welcome">Password</div>
              <input
                className="signin-input"
                placeholder=""
                value={formData.password}
                onChange={(value) =>
                  setFormData({ ...formData, password: value.target.value })
                }
              />
              <div className="signin-welcome">Role</div>

              <select
                className="signin-input"
                placeholder="John.snow@gmail.com"
                value={formData.userType}
                onChange={(value) =>
                  setFormData({ ...formData, userType: value.target.value })
                }
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </>
          )}
          {showForget ? (
            <div className="signin-forgot" onClick={handleShowForget}>
              Forgot password?
            </div>
          ) : (
            <div className="signin-forgot" onClick={handleShowForget}>
              Back to Login?
            </div>
          )}
          <button className="signin-button" onClick={submitLogin}>
            Login Now
          </button>
          {/* <div
            style={{ position: "absolute", marginTop: "60px", width: "50vw" }}
          >
            <span className="signin-dont2"> Dont have an account? </span>
            <span className="signin-dont">Join free today</span>
          </div> */}
        </div>
      </div>
    </div>
  );
}
