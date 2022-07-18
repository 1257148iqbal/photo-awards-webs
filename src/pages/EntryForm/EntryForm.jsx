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

            <TabContent
              activeTab={active}
              className="border p-3"
            >
              <TabPane tabId="1">
                <div className="container login__form active">
                  <div className="row vh-100 w-100 align-self-center">
                    <div className="col-12 col-lg-6 col-xl-6 px-5">
                      <div className="row vh-100">
                        <div className="col align-self-center p-5 w-100">
                          <h3 className="fw-bolder">WELCOME BACK !</h3>
                          <p className="fw-lighter fs-6">
                            Don't have an account,{" "}
                            <span
                              id="signUp"
                              role="button"
                              className="text-primary"
                            >
                              Sign Up
                            </span>
                          </p>
                          <form action="" className="mt-5">
                            <div className="mb-3">
                              <label  className="form-label">
                                Email
                              </label>
                              <input
                                type="email"
                                className="form-control text-indent shadow-sm bg-grey-light border-0 rounded-pill fw-lighter fs-7 p-3"
                                placeholder="name@example.com"
                              />
                            </div>
                            <div className="mb-3">
                              <label className="form-label">
                                Password
                              </label>
                              <div className="d-flex position-relative">
                                <input
                                  type="password"
                                  className="form-control text-indent auth__password shadow-sm bg-grey-light border-0 rounded-pill fw-lighter fs-7 p-3"
                                />
                                <span className="password__icon text-primary fs-4 fw-bold bi bi-eye-slash"></span>
                              </div>
                            </div>
                            <div className="col text-center">
                              <button
                                type="submit"
                                className="btn btn-outline-dark btn-lg rounded-pill mt-4 w-100"
                              >
                                Login
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPane>

              <TabPane tabId="2">
                <form className="row g-3">
                  <div className="custom-form-main">
                    <Label className="custom-form-label" >Name</Label>
                    <Label className="custom-form-colons"> : </Label>
                    <div className="custom-form-group">
                      <Input id="name" name="name" type="text" bsSize="sm" className="form-control form-control-sm"/>
                    </div>
                  </div>
                  <div className="custom-form-main">
                    <Label className="custom-form-label" >Email</Label>
                    <Label className="custom-form-colons"> : </Label>
                    <div className="custom-form-group">
                      <Input id="email" name="email" type="text" bsSize="sm" />
                    </div>
                  </div>
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
