import { useEffect, useState } from "react";
import { Link, useNavigate, useParams,} from "react-router-dom";

import { getAllGroups, deleteGroupById } from "../services/internalApiService";

export const AllGroups = (props) => {
  const [groups, setGroups] = useState([]);
  // const [group, setGroup] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

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

  const handleDeleteClick = () => {
    deleteGroupById(id)
      .then((deletedGroup) => {
        navigate("/groups");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mx-auto">
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4">
        <h1 className="navbar-brand mb-0">
          <h1>GroupUp⬆️</h1>
        </h1>
        <div className="navbar-nav justify-content-between">
          <Link
            to="/groups/login"
            className="btn btn-sm btn-outline-primary mx-1"
          >
            Login/Register
          </Link>
          <Link
            to="/groups/new"
            className="btn btn-sm btn-outline-success mx-1"
          >
            Create a group
          </Link>
        </div>
      </nav>
      <h2>Active Groups:</h2>

      {groups.map((group) => {
        const { _id, groupName, groupDate, desc, location, creator } = group;

        return (
          <div key={_id} className="shadow mb-4 rounded border p-4">
            <Link to={`/groups/${_id}`}>
              <h4>{groupName}</h4>
            </Link>
            <p>Date: {groupDate}</p>
            <p>Description: {desc}</p>
            <p>Location: {location}</p>
            <p>Posted by: {creator}</p>

            <div className="mt-2">
              <Link
                to={`/groups/${_id}/edit`}
                className="btn btn-sm btn-outline-warning mx-1"
              >
                Edit
              </Link>
              <button
                onClick={(e) => {
                  handleDeleteClick();
                }}
                className="btn btn-sm btn-outline-danger mx-1"
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllGroups;
