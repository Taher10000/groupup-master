import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { createGroup } from "../services/internalApiService";

export const NewGroup = (props) => {
  const navigate = useNavigate();

  const [groupName, setGroupName] = useState("");
  const [groupDate, setGroupDate] = useState("");
  const [groupType, setGroupType] = useState("");
  const [location, setLocation] = useState("");
  const[locLink, setLocLink] = useState("");
  const [src, setSrc] = useState("");
  const [desc, setDesc] = useState("");
  const [creator, setCreator] = useState("");
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState(null);

  const handleNewGroupSubmit = (event) => {
    event.preventDefault();

    const newGroup = {
      groupName,
      groupDate,
      groupType,
      location,
      locLink,
      src,
      desc,
      creator,
      price,
    };

    createGroup(newGroup)
      .then((data) => {
        console.log("new group data:", data);
        navigate("/groups");
      })
      .catch((error) => {
        console.log(error);
        setErrors(error?.response?.data?.errors);
      });
  };

  return (
    <div className="mx-auto">
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center mb-4">
        <h1 className="navbar-brand mb-0">
          <h1>GroupUp⬆️</h1>
        </h1>
        <div className="navbar-nav justify-content-between">
          <Link to="/groups" className="btn btn-sm btn-outline-primary mx-1">
            Home
          </Link>
        </div>
      </nav>
      <div className="p-4 rounded mx-auto shadow">
        <form onSubmit={(e) => handleNewGroupSubmit(e)}>
          <div className="form-group">
            <label className="h6">Group Name: </label>
            {errors?.groupName && (
              <span style={{ color: "red" }}>
                {" "}
                {errors?.groupName?.message}
              </span>
            )}
            <input
              onChange={(event) => {
                setGroupName(event.target.value);
              }}
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label className="h6">Date: </label>
            {errors?.groupDate && (
              <span style={{ color: "red" }}>
                {" "}
                {errors?.groupDate?.message}
              </span>
            )}
            <input
              onChange={(event) => {
                setGroupDate(event.target.value);
              }}
              type="date"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label className="h6">Group Type: </label>
            {errors?.groupType && (
              <span style={{ color: "red" }}>
                {" "}
                {errors?.groupType?.message}
              </span>
            )}
            <input
              onChange={(event) => {
                setGroupType(event.target.value);
              }}
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label className="h6">Location: </label>
            {errors?.location && (
              <span style={{ color: "red" }}> {errors?.location?.message}</span>
            )}
            <input
              onChange={(event) => {
                setLocation(event.target.value);
              }}
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label className="h6">Google Maps Embed (optional)</label>
            <input
              onChange={(event) => {
                setLocLink(event.target.value);
              }}
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label className="h6">Media URL (optional)</label>
            <input
              onChange={(event) => {
                setSrc(event.target.value);
              }}
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label className="h6">Description: </label>
            {errors?.desc && (
              <span style={{ color: "red" }}> {errors?.desc?.message}</span>
            )}
            <input
              onChange={(event) => {
                setDesc(event.target.value);
              }}
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label className="h6">Creator: </label>
            {errors?.creator && (
              <span style={{ color: "red" }}> {errors?.creator?.message}</span>
            )}
            <input
              onChange={(event) => {
                setCreator(event.target.value);
              }}
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label className="h6">Price (if applicable): </label>
            <input
              onChange={(event) => {
                setPrice(event.target.value);
              }}
              type="text"
              className="form-control"
            />
          </div>
          <Link to="/groups" className="btn btn-outline-danger m-1">
            Cancel
          </Link>
          <button className="btn btn-outline-success">Create Group</button>
        </form>
      </div>
    </div>
  );
};

export default NewGroup;
