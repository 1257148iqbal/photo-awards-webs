import React, { useState } from "react";
import {
  Card,
  Col,
  Input,
  Label,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane
} from "reactstrap";
import "../../../src/assets/scss/custom-form.scss";
import "./style/entryForm.css";

const EntryForm = () => {
  const [active, setActive] = useState("1");

  const toggle = (tab) => {
    if (active !== tab) {
      setActive(tab);
    }
  };

  return (
    <div>
      <Card className="slide m-auto mt-5">
        <Row className="rounded rounded-3 p-1">
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Nav tabs>
              <NavItem>
                <NavLink
                  active={active === "1"}
                  onClick={() => {
                    toggle("1");
                  }}
                >
                  <span>Sign In</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={active === "2"}
                  onClick={() => {
                    toggle("2");
                  }}
                >
                  Registration
                </NavLink>
              </NavItem>
            </Nav>

            <TabContent activeTab={active} className="border p-3">
              <TabPane tabId="1">
                <section className="h-100">
                  <div className="container h-100">
                    <div className="row justify-content-sm-center h-100">
                      <div className="col-xl-5 col-lg-5 col-md-7 col-sm-9">
                        <div className="card shadow-lg w-100">
                          <div className="card-body p-5">
                            <form
                              method="POST"
                              className="needs-validation"
                              noValidate=""
                              autoComplete="off"
                            >
                              <div className="mb-3">
                                <label className="mb-2 text-muted">E-Mail</label>
                                <input
                                  id="email"
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  required
                                  autoFocus
                                />
                                <div className="invalid-feedback">
                                  Email is invalid
                                </div>
                              </div>

                              <div className="mb-3">
                                <div className="mb-2 w-100">
                                  <label className="text-muted">
                                    Password
                                  </label>
                                </div>
                                <input
                                  id="password"
                                  type="password"
                                  className="form-control"
                                  name="password"
                                  required
                                />
                                <div className="invalid-feedback">
                                  Password is required
                                </div>
                              </div>

                              <div className="d-flex align-items-center">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    name="remember"
                                    id="remember"
                                    className="form-check-input"
                                  />
                                  <label
                                    className="form-check-label"
                                  >
                                    Remember Me
                                  </label>
                                </div>
                                <button
                                  type="submit"
                                  className="btn btn-primary ms-auto"
                                >
                                  Login
                                </button>
                              </div>
                              <a href="/" className="text-center">
                                Forgot Password?
                              </a>
                            </form>
                          </div>
                          {/* <div className="card-footer py-3 border-0 bg-primary">
                            <div className="text-center text-white">
                              Don't have an account?
                              <a href="/" className="text-dark text-white">
                                {` Registration`}
                              </a>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </TabPane>

              <TabPane tabId="2">
                <form className="row g-3">
                <h3>Login Info</h3>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                  <div className="custom-form-main">
                    <Label className="custom-form-label">Username</Label>
                    <Label className="custom-form-colons"> : </Label>
                    <div className="custom-form-group">
                      <Input id="username" name="username" type="text" bsSize="sm" />
                    </div>
                  </div>
                  </Col>
                  
                  <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                  <div className="custom-form-main">
                    <Label className="custom-form-label">Email</Label>
                    <Label className="custom-form-colons"> : </Label>
                    <div className="custom-form-group">
                      <Input id="email" name="email" type="text" bsSize="sm" />
                    </div>
                  </div>
                  </Col>
                  
                  <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                  <div className="custom-form-main">
                    <Label className="custom-form-label">Password</Label>
                    <Label className="custom-form-colons"> : </Label>
                    <div className="custom-form-group">
                      <Input id="password" name="password" type="text" bsSize="sm" />
                    </div>
                  </div>
                  </Col>

                  <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                  <div className="custom-form-main">
                    <Label className="custom-form-label">Confirm Password</Label>
                    <Label className="custom-form-colons"> : </Label>
                    <div className="custom-form-group">
                      <Input id="password" name="password" type="text" bsSize="sm" />
                    </div>
                  </div>
                  </Col>

                  <h3>Personal details</h3>

                  <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                  <div className="custom-form-main">
                    <Label className="custom-form-label">First Name</Label>
                    <Label className="custom-form-colons"> : </Label>
                    <div className="custom-form-group">
                      <Input id="firstName" name="firstName" type="text" bsSize="sm" />
                    </div>
                  </div>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                  <div className="custom-form-main">
                    <Label className="custom-form-label">Last Name</Label>
                    <Label className="custom-form-colons"> : </Label>
                    <div className="custom-form-group">
                      <Input id="lastName" name="lastName" type="text" bsSize="sm" />
                    </div>
                  </div>
                  </Col>
                  
                  <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                  <div className="custom-form-main">
                    <Label className="custom-form-label">Phone</Label>
                    <Label className="custom-form-colons"> : </Label>
                    <div className="custom-form-group">
                      <Input id="phone" name="phone" type="text" bsSize="sm" />
                    </div>
                  </div>
                  </Col>
                  
                  <h3>Contact details</h3>
                  <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                  <div className="custom-form-main">
                    <Label className="custom-form-label">Address</Label>
                    <Label className="custom-form-colons"> : </Label>
                    <div className="custom-form-group">
                      <Input id="address" name="address" type="text" bsSize="sm" />
                    </div>
                  </div>
                  </Col>
                  
                  <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                  <div className="custom-form-main">
                    <Label className="custom-form-label">City/Town</Label>
                    <Label className="custom-form-colons"> : </Label>
                    <div className="custom-form-group">
                      <Input id="city" name="city" type="text" bsSize="sm" />
                    </div>
                  </div>
                  </Col>

                  <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                  <div className="custom-form-main">
                    <Label className="custom-form-label">Postal Code</Label>
                    <Label className="custom-form-colons"> : </Label>
                    <div className="custom-form-group">
                      <Input id="postalcode" name="postalcode" type="text" bsSize="sm" />
                    </div>
                  </div>
                  </Col>

                  <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                  <div className="custom-form-main">
                    <Label className="custom-form-label">Country</Label>
                    <Label className="custom-form-colons"> : </Label>
                    <div className="custom-form-group">
                      <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                        <option selected>Select One</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                      </select>
                    </div>
                  </div>
                  </Col>

                  <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                  <div className="custom-form-main">
                    <Label className="custom-form-label">Website</Label>
                    <Label className="custom-form-colons"> : </Label>
                    <div className="custom-form-group">
                      <Input id="website" name="website" type="text" bsSize="sm" />
                    </div>
                  </div>
                  </Col>

                  <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                  <div className="custom-form-main">
                    <Label className="custom-form-label">Honor</Label>
                    <Label className="custom-form-colons"> : </Label>
                    <div className="custom-form-group">
                      <Input id="honor" name="honor" type="text" bsSize="sm" />
                    </div>
                  </div>
                  </Col>

                  <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                  <div className="custom-form-main">
                    <Label className="custom-form-label">Organization</Label>
                    <Label className="custom-form-colons"> : </Label>
                    <div className="custom-form-group">
                      <Input id="organization" name="organization" type="text" bsSize="sm" />
                    </div>
                  </div>
                  </Col>

                  <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="invalidCheck"/>
                      <label className="form-check-label">
                        Agree to terms and conditions
                      </label>
                      <div className="invalid-feedback">
                        You must agree before submitting.
                      </div>
                    </div>
                  </Col>
                </form>
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default EntryForm;
