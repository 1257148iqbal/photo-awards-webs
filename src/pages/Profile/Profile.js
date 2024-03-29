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
       <div className="p-3">
       <h3>
          <strong>Profile/UserName: {currentUser.username}</strong>
        </h3>
        {currentUser && (
          <div style={{ jestifyContent: "space-around" }}>
            <Link className="btn btn-primary mt-2" role="button" to="/contest">
              Add Contest
            </Link>
            <Link className="btn btn-primary mt-2" role="button" to="/contest-section">
              Contest Section
            </Link>
            <Link className="btn btn-primary mt-2" role="button" to="/participant">
            Participate
            </Link>
          </div>
        )}
       </div>
        
      </header>
 
    </div>
  );
};

export default Profile;
