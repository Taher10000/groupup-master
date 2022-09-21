import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

import { deleteGroupById, getGroupById } from "../services/internalApiService";

export const ViewGroup = (props) => {
  const [group, setGroup] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getGroupById(id)
      .then((data) => {
        console.log(data);
        setGroup(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (group === null) {
    return null;
  }

  const handleDeleteClick = () => {
    deleteGroupById(id)
      .then((deletedGroup) => {
        navigate("/groups");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const { groupName, groupDate, groupType, location, locLink, src, desc, creator, price } = group;

  return (
    <div className="mx-auto">
      {/* nav bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center mb-4">
        <h1 className="navbar-brand mb-0"><h1>GroupUp⬆️</h1></h1>
        <div className="navbar-nav justify-content-between">
          <Link to="/groups" className="btn btn-sm btn-outline-primary mx-1">
            Home
          </Link>
        </div>
      </nav>
      <h1>{groupName}</h1>
      <div className="mx-auto shadow mb-4 rounded border p-2">  
      {/* img */}
      {src && (
        <img src={src} alt={groupName} className="shadow rounded mb-4" width="100%" height="600" />
      )}

      {/* google maps embed */}
      { locLink && (
        <iframe
          title={location}
          src={locLink}
          width="100%"
          height="600"
          allowFullScreen=""
          loading="lazy"
          className="shadow rounded"
        ></iframe>
      )}
        <h4 className="mb-3">Location: {location}</h4>
        <h4 className="mb-3">Date: {groupDate}</h4>
        <h4 className="mb-3">Group Type: {groupType}</h4>
        <h4 className="mb-3">Description: {desc}</h4>
        {price && <h4 className="mb-3">Price: ${price}</h4>}
        <h4 className="mb-3">Posted By: {creator}</h4>
      </div>
      <button onClick={(e) => {
          handleDeleteClick();
        }}
        className="btn btn-outline-danger mb-2"
      >
        <h4>Delete Post</h4></button>
    </div>
  );
};

export default ViewGroup;
