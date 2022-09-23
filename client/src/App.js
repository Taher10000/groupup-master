import "./App.css";

import { Navigate, Route, Routes } from "react-router-dom";

import { AllGroups } from "./views/Groups";
import { ViewGroup } from "./views/ViewGroup";
import { EditGroup } from "./views/EditGroup";
import { NewGroup } from "./views/NewGroup";
import  SignUp  from "./views/SignUp";
import  Login  from "./views/Login";
// import Logout  from "./views/Logout";



// import Chat from "./components/Chat"

function App() {
  // const user = localStorage.getItem("token");
  return (
    <div className="container">
      <Routes>
        {/* { User } */}
        {/* {user &&<Route path = "/" exact element = {<Logout/>} />} */}
        <Route path = "/signup" exact element = {<SignUp/>} />
        <Route path = "/login" exact element = {<Login/>} />
        {/* Groups */}
        <Route path="/" element={<Navigate to="/groups" replace />} />
        <Route path="/groups" element={<AllGroups />} />
        <Route path="/groups/:id/edit" element={<EditGroup />} />
        <Route path="/groups/:id" element={<ViewGroup />} />
        <Route path="/groups/new" element={<NewGroup />} />
      </Routes>
      
    </div>
  );
}

export default App;
