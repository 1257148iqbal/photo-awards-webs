import React from "react";
import { useSelector } from "react-redux";
import { Link, Redirect } from 'react-router-dom';

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.authReducer);

  if (!currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container page-content  m-auto mt-5">
      <header className="jumbotron">
        <h3>
          <strong>Profile/UserName: {currentUser.username}</strong>
        </h3>
        {currentUser && (
          <div style={{ jestifyContent: "space-around" }}>
            <Link className="btn btn-primary mt-2" role="button" to="/contest">
              Add Contest
            </Link>
            <Link className="btn btn-primary mt-2" role="button" to="/contest-section-page">
              Contest Section
            </Link>
          </div>
        )}
        
      </header>
 
    </div>
  );
};

export default Profile;
