import "./App.css";
import SignUp from "./views/SignUp";
import Login from "./views/Login"
import Logout from "./views/Logout"

import { Navigate, Route, Routes } from "react-router-dom";

import { AllGroups } from "./views/Groups";
import { ViewGroup } from "./views/ViewGroup";
import { EditGroup } from "./views/EditGroup";
import { NewGroup } from "./views/NewGroup";
import { LoginReg } from "./views/LoginReg";

import Chat from "./components/Chat"

function App() {
  return (
    <div className="container">
      <Routes>
        {/* {user &&<Route path = "/" exact element = {<Logout/>} />} */}
        <Route path = "/signup" exact element = {<SignUp/>} />
        <Route path = "/login" exact element = {<Login/>} />
        <Route path = "/" exact element = {<Navigate replace to="/login"/>} />

        <Route path="/" element={<Navigate to="/groups" replace />} />
        <Route path="/groups" element={<AllGroups />} />
        <Route path="/groups/:id/edit" element={<EditGroup />} />
        <Route path="/groups/:id" element={<ViewGroup />} />
        <Route path="/groups/new" element={<NewGroup />} />
        <Route path="/groups/login" element={<LoginReg />} />
      </Routes>
      {/* <Chat /> */}
    </div>
  );
}

export default App;
