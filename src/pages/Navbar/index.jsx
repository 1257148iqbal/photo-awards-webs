/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback } from "react";
import { User } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Label,
  UncontrolledDropdown
} from "reactstrap";
import herderImages from "../../assets/images/logo.png";
import { logout } from "../Login/store/action";

const Navbar = () => {
  //#endregion Hooks
  const { user } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const history = useHistory();
//#endregion

//#region Events
  const addContest = () => {
    history.push("/contest");
  };

  const onContestSection = () => {
    history.push("/contest-section-page");
  };

  const onParticipant = () => {
    history.push("/participant");
  };

  const logOut = useCallback(() => {
    history.push("/login");
    dispatch(logout());
  }, [dispatch, history]);
  //#endregion


  return (
    <div className="position-sticky top-0" style={{ zIndex: 999 }}>
      <div className="text-center bg-light">
        <img
          src={herderImages}
          className="img-fluid header-image"
          alt="headerImages"
        />
      </div>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse flex-grow-0 slide m-auto"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/entry-rules" className="nav-link">
                  Entry Rules
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/entry-form" className="nav-link">
                  Entry Form
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/payment" className="nav-link">
                  Payment
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/status" className="nav-link">
                  Status
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/results" className="nav-link">
                  Results
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/archive" className="nav-link">
                  Archive
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact-us" className="nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {user ? (
            <div className="navbar-nav ml-auto">
              <UncontrolledDropdown nav>
                <DropdownToggle nav>
                  <User className="icon-size" />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={addContest}>
                    <Label className="text-dark cursor-pointer">
                      Add Contest
                    </Label>
                  </DropdownItem>
                  <DropdownItem onClick={onContestSection}>
                    <Label className="text-dark cursor-pointer">
                      Contest Section
                    </Label>
                  </DropdownItem>
                  <DropdownItem onClick={onParticipant}>
                    <Label className="text-dark cursor-pointer">
                    Participant
                    </Label>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to={"/profile"} className="nav-link">
                      {`Profile: ${user.username}`}
                    </Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={logOut}>Logout</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
