import React, { useState } from "react";
import classes from "./Admin.module.css";
import { Link } from "react-router-dom";
import { gluggiFunctions } from "../../../firebase/firebase";

import { Form, FormInput, Button } from "../../../shared/components";

function Admin() {
  const { container, AddProduct } = classes;

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const addAdminRole = gluggiFunctions.httpsCallable("addAdminRole");
    addAdminRole({ email })
      .then((result) => {
        setStatus(result.data.message);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div className={container}>
      <div className={AddProduct}>
        <Link to="/add-product">Add product</Link>
      </div>
      <Form onSubmit={handleSubmit} style={{ width: "370px" }}>
        <p style={{ color: "#33a1ad" }}>{status && status}</p>
        <FormInput
          label="User email:"
          name={email}
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button style={{ width: "370px" }}>MAKE ADMIN</Button>
      </Form>
    </div>
  );
}

export default Admin;
