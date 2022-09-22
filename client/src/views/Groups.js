import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getAllGroups } from "../services/internalApiService";

// used to format date 
const moment = require("moment");

export const AllGroups = (props) => {
  const [groups, setGroups] = useState([]);

  const user = localStorage.getItem("token");
  console.log(user);

  useEffect(() => {
    getAllGroups()
      .then((data) => {
        console.log(data);
        setGroups(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center mb-4">
        <h1 className="navbar-brand mb-0">
          <h1>GroupUp⬆️</h1>
        </h1>
        <div className="navbar-nav justify-content-between">
          {!user && (
            <Link to="/login" className="btn btn-sm btn-outline-primary mx-1">
              Login/Register
            </Link>
          )}
          {user && (
            <Link
              to="/groups/new"
              className="btn btn-sm btn-outline-success mx-1"
            >
              Create a group
            </Link>
          )}
          {user && (
            <button
              className="btn btn-sm btn-outline-danger mx-1"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </div>
      </nav>
      <h2 className="text-center mb-4">Active Groups:</h2>
      <div className="">
        {groups.map((group) => {
          const {
            _id,
            groupName,
            groupDate,
            desc,
            src,
            location,
            creator,
            price,
            creatorToken,
          } = group;

          return (
            <div
              key={_id}
              className="shadow mb-4 rounded border"
            >
              <div className="">
                {src && (
                  <img
                    src={src}
                    alt={groupName}
                    className="shadow rounded mb-4"
                    width="100%"
                    height="250"
                  />
                )}
              </div>
              <div className="p-4 text-center">
                <Link to={`/groups/${_id}`}>
                  <h2>{groupName}</h2>
                </Link>
                <h3>Date: {moment(groupDate).format("MMMM Do, YYYY")}</h3>
                <h3>Description: {desc}</h3>
                <h3>Location: {location}</h3>
                {price && <h3>Price: ${price}</h3>}
                <h3>Posted by: {creator}</h3>
                <h3>Token: {creatorToken}</h3>

                <div className="">
                  <Link
                      to={`/groups/${_id}`}
                      className="btn btn-outline-primary mx-1"
                    >
                      View
                  </Link>
                  { user &&
                    <Link
                      to={`/groups/${_id}/edit`}
                      className="btn btn-outline-warning mx-1"
                    >
                      Edit
                    </Link>
                  }
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllGroups;
