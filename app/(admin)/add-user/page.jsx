import React from "react";
import AddUserForm from "@/components/AddUser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddUserPage = () => {
  return (
    <div>
      <AddUserForm />
      <ToastContainer />
    </div>
  );
};

export default AddUserPage;
