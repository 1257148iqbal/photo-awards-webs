/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style/entryForm.css";

const EntryForm = () => {
  return (
    <div>
      <div class="container login__form active">
        <div class="row vh-100 w-100 align-self-center">
          <div class="col-12 col-lg-6 col-xl-6 px-5">
            <div class="row vh-100">
              <div class="col align-self-center p-5 w-100">
                <h3 class="fw-bolder">WELCOME BACK !</h3>
                <p class="fw-lighter fs-6">
                  Don't have an account,{" "}
                  <span id="signUp" role="button" class="text-primary">
                    Sign Up
                  </span>
                </p>
                <form action="" class="mt-5">
                  <div class="mb-3">
                    <label for="username" class="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      class="form-control text-indent shadow-sm bg-grey-light border-0 rounded-pill fw-lighter fs-7 p-3"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="username" class="form-label">
                      Password
                    </label>
                    <div class="d-flex position-relative">
                      <input
                        type="password"
                        class="form-control text-indent auth__password shadow-sm bg-grey-light border-0 rounded-pill fw-lighter fs-7 p-3"
                      />
                      <span class="password__icon text-primary fs-4 fw-bold bi bi-eye-slash"></span>
                    </div>
                  </div>
                  <div class="col text-center">
                    <button
                      type="submit"
                      class="btn btn-outline-dark btn-lg rounded-pill mt-4 w-100"
                    >
                      Login
                    </button>
                  </div>
                </form>
                <p class="mt-5 text-center">Or Sign in with social platforms</p>
                <div class="row text-center">
                  <div class="col mt-3">
                    <a
                      href=""
                      class="btn btn-outline-dark border-2 rounded-circle"
                    >
                      <i class="bi bi-facebook fs-5"></i>
                    </a>
                  </div>
                  <div class="col mt-3">
                    <a
                      href=""
                      class="btn btn-outline-dark border-2 rounded-circle"
                    >
                      <i class="bi bi-linkedin fs-5"></i>
                    </a>
                  </div>
                  <div class="col mt-3">
                    <a
                      href=""
                      class="btn btn-outline-dark border-2 rounded-circle"
                    >
                      <i class="bi bi-twitter fs-5"></i>
                    </a>
                  </div>
                  <div class="col my-3">
                    <a
                      href=""
                      class="btn btn-outline-dark border-2 rounded-circle"
                    >
                      <i class="bi bi-google fs-5"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-none d-lg-block col-lg-6 col-xl-6 p-5">
            <div class="row vh-100 p-5">
              <div class="col align-self-center p-5 text-center">
                <img src="assets/img/login.png" class="bounce" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container register__form">
        <div class="row vh-100 w-100 align-self-center">
          <div class="d-none d-lg-block col-lg-6 col-xl-6 p-5">
            <div class="row vh-100 p-5">
              <div class="col align-self-center p-5 text-center">
                <img src="assets/img/register.png" class="bounce" alt="" />
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6 col-xl-6 px-5">
            <div class="row vh-100">
              <div class="col align-self-center p-5 w-100">
                <h3 class="fw-bolder">REGISTER HERE !</h3>
                <p class="fw-lighter fs-6">
                  Have an account,{" "}
                  <span id="signIn" role="button" class="text-primary">
                    Sign In
                  </span>
                </p>
                <form action="" class="mt-5">
                  <div class="mb-3">
                    <label for="username" class="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      class="form-control text-indent shadow-sm bg-grey-light border-0 rounded-pill fw-lighter fs-7 p-3"
                      placeholder="name1"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="username" class="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      class="form-control text-indent shadow-sm bg-grey-light border-0 rounded-pill fw-lighter fs-7 p-3"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="username" class="form-label">
                      Password
                    </label>
                    <div class="d-flex position-relative">
                      <input
                        type="password"
                        class="form-control text-indent auth__password shadow-sm bg-grey-light border-0 rounded-pill fw-lighter fs-7 p-3"
                      />
                      <span class="password__icon text-primary fs-4 fw-bold bi bi-eye-slash"></span>
                    </div>
                  </div>
                  <div class="col text-center">
                    <button
                      type="submit"
                      class="btn btn-outline-dark btn-lg rounded-pill mt-4 w-100"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
                <p class="mt-5 text-center">Or Sign in with social platforms</p>
                <div class="row text-center">
                  <div class="col mt-3">
                    <a
                      href=""
                      class="btn btn-outline-dark border-2 rounded-circle"
                    >
                      <i class="bi bi-facebook fs-5"></i>
                    </a>
                  </div>
                  <div class="col mt-3">
                    <a
                      href=""
                      class="btn btn-outline-dark border-2 rounded-circle"
                    >
                      <i class="bi bi-linkedin fs-5"></i>
                    </a>
                  </div>
                  <div class="col mt-3">
                    <a
                      href=""
                      class="btn btn-outline-dark border-2 rounded-circle"
                    >
                      <i class="bi bi-twitter fs-5"></i>
                    </a>
                  </div>
                  <div class="col my-3">
                    <a
                      href=""
                      class="btn btn-outline-dark border-2 rounded-circle"
                    >
                      <i class="bi bi-google fs-5"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntryForm;
