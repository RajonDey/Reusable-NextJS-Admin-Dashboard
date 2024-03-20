import React from "react";
import EditUserForm from "@/components/EditUserForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddUserPage = ({ params: { id } }) => {
  return (
    <div>
      <EditUserForm userId={id} />
      <ToastContainer />
    </div>
  );
};

export default AddUserPage;
