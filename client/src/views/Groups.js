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
    <div className="mx-auto">
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
          } = group;

          return (
            <div
              key={_id}
              className="shadow mb-4 rounded border p-4 d-flex w-50"
            >
              <div>
                <Link to={`/groups/${_id}`}>
                  <h4>{groupName}</h4>
                </Link>
                <p>Date: {moment(groupDate).format("MMMM Do, YYYY")}</p>
                <p>Description: {desc}</p>
                <p>Location: {location}</p>
                {price && <p>Price: ${price}</p>}
                <p>Posted by: {creator}</p>

                <div className="mt-2 d-flex">
                  { user &&
                    <Link
                      to={`/groups/${_id}/edit`}
                      className="btn btn-sm btn-outline-warning mx-1"
                    >
                      Edit
                    </Link>
                  }
                </div>
              </div>
              <div className="mx-2">
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllGroups;
