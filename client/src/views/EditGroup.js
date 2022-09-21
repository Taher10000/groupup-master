import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

import { getGroupById, updateGroupById } from "../services/internalApiService";

export const EditGroup = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [groupName, setGroupName] = useState("");
  const [groupDate, setGroupDate] = useState("");
  const [groupType, setGroupType] = useState("");
  const [location, setLocation] = useState("");
  const [desc, setDesc] = useState("");
  const [creator, setCreator] = useState("");
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    getGroupById(id)
      .then((data) => {
        setGroupName(data.groupName);
        setGroupDate(data.groupDate);
        setGroupType(data.groupType);
        setLocation(data.location);
        setDesc(data.desc);
        setCreator(data.creator);
        setPrice(data.price);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleEditGroupSubmit = (event) => {
    event.preventDefault();

    const editedGroup = {
      groupName,
      groupDate,
      groupType,
      location,
      desc,
      creator,
      price
    };

    updateGroupById(id, editedGroup)
      .then((updatedGroup) => {
        console.log("updatedGroup:", updatedGroup);
        navigate(`/groups`);
      })
      .catch((error) => {
        console.log(error);
        setErrors(error?.response?.data?.errors);
      });
  };

  return (
    <div className="mx-auto">
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4">
        <h1 className="navbar-brand mb-0"><h1>GroupUp⬆️</h1></h1>
        <div className="navbar-nav justify-content-between">
          <Link to="/groups" className="btn btn-sm btn-outline-primary mx-1">
            Home
          </Link>
        </div>
      </nav>
      <div className="p-4 rounded mx-auto shadow">
        <form onSubmit={(e) => handleEditGroupSubmit(e)}>
          <div className="form-group">
            <label className="h6">Group Name:</label>
            {errors?.groupName && (
              <span style={{ color: "red" }}> {errors?.groupName?.message}</span>
            )}
            <input
              onChange={(event) => {
                setGroupName(event.target.value);
              }}
              type="text"
              className="form-control"
              value={groupName}
            />
          </div>
          <div className="form-group">
            <label className="h6">Date:</label>
            {errors?.groupDate && (
              <span style={{ color: "red" }}> {errors?.groupDate?.message}</span>
            )}
            <input
              onChange={(event) => {
                setGroupDate(event.target.value);
              }}
              type="date"
              className="form-control"
              value={groupDate}
            />
          </div>
          <div className="form-group">
            <label className="h6">Group Type:</label>
            {errors?.groupType && (
              <span style={{ color: "red" }}> {errors?.groupType?.message}</span>
            )}
            <input
              onChange={(event) => {
                setGroupType(event.target.value);
              }}
              type="text"
              className="form-control"
              value={groupType}
            />
          </div>
          <div className="form-group">
            <label className="h6">Location:</label>
            {errors?.location && (
              <span style={{ color: "red" }}> {errors?.location?.message}</span>
            )}
            <input
              onChange={(event) => {
                setLocation(event.target.value);
              }}
              type="text"
              className="form-control"
              value={location}
            />
          </div>
          <div className="form-group">
            <label className="h6">Description:</label>
            {errors?.desc && (
              <span style={{ color: "red" }}> {errors?.desc?.message}</span>
            )}
            <input
              onChange={(event) => {
                setDesc(event.target.value);
              }}
              type="text"
              className="form-control"
              value={desc}
            />
          </div>
          <div className="form-group">
            <label className="h6">Creator:</label>
            {errors?.creator && (
              <span style={{ color: "red" }}> {errors?.creator?.message}</span>
            )}
            <input
              onChange={(event) => {
                setCreator(event.target.value);
              }}
              type="text"
              className="form-control"
              value={creator}
            />
          </div>
          <div className="form-group">
            <label className="h6">Price (if applicable):</label>
            <input
              onChange={(event) => {
                setPrice(event.target.value);
              }}
              type="text"
              className="form-control"
              value={price}
            />
          </div>
          <Link to="/groups" className="btn btn-outline-danger m-1">
            Cancel
          </Link>
          <button className="btn btn-outline-success">Edit Group</button>
        </form>
      </div>
    </div>
  );
};

export default EditGroup;
