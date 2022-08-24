import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { userData } from "../../@fake-db/auth";
import { SET_MESSAGE } from "../Message/store/actionTypes";
import { login } from "./store/action";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = (props) => {

  //#region Hooks
  const userDetails = useSelector((state) => state.authReducer);
  // const  user  = useSelector(({ authReducer }) => authReducer);
  const { handleSubmit } = useForm();
  const message = useSelector((state) => state.messageReducer);
  const dispatch = useDispatch();
  console.log(userDetails);
  //#endregion

  //#region State
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("demo123");
  const [loading, setLoading] = useState(false);
  //#endregion

  //#region Events
  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    setLoading(true);

      const data = userData.find(
        (user) => user.username === username && user.password === password
      );

      if (data) {
        dispatch(login(username, password));
        props.history.push("/profile");
      } else {
        dispatch({
          type: SET_MESSAGE,
          payload: "Please Provide currect Info!",
        });
      }
    
  };

  //#endregion

  return (
    <div className="col-md-12 page-content m-auto mt-5">
      <div className="card card-container">
        <div className="container h-100">
          <div className="row justify-content-sm-center h-100">
            <div className="col-xl-5 col-lg-5 col-md-7 col-sm-9">
              <div className="card shadow-lg w-100">
                <div className="card-body p-5">
                  <Form onSubmit={handleSubmit(handleLogin)}>
                  <div className="mb-3">
                      <div className="mb-2 w-100">
                        <label className="text-muted">Username or Email</label>
                      </div>
                      <Input
                        id="username"
                        type="username"
                        className="form-control"
                        name="username"
                        value={username}
                        onChange={onChangeUsername}
                        validations={[required]}
                      />
                    </div>

                    <div className="mb-3">
                      <div className="mb-2 w-100">
                        <label className="text-muted">Password</label>
                      </div>
                      <Input
                        id="password"
                        type="password"
                        className="form-control"
                        name="password"
                        value={password}
                        onChange={onChangePassword}
                        validations={[required]}
                      />
                    </div>

                    {message?.message && (
                      <div className="form-group">
                        <div className="alert alert-danger" role="alert">
                          {message?.message}
                        </div>
                      </div>
                    )}

                    <div className="d-flex align-items-center justify-content-between">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          name="remember"
                          id="remember"
                          className="form-check-input"
                        />
                        <label className="form-check-label">Remember Me</label>
                      </div>
                      <div className="form-group">
                        <button
                          className="btn btn-primary btn-block"
                          disabled={loading}
                        >
                          {loading && (
                            <span className="spinner-border spinner-border-sm"></span>
                          )}
                          <span>Login</span>
                        </button>
                      </div>
                    </div>
                    {/* <a href="/" className="text-center">
                      Forgot Password?
                    </a> */}
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
