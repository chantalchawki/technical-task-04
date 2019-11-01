import React, { useState } from "react";
import { Link } from "react-router-dom";
import db from "./db";

const Create = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [committee, setCommittee] = useState("");

  const onChangeHandler = setter => event => {
    setter(event.target.value);
  };

  const onSubmitHandler = () => {
    db.push({ id, name, committee });
    setId("");
    setName("");
    setCommittee("");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        justifyContent: "center"
      }}
    >
      <h1>Create new member</h1>
      <input placeholder="id" value={id} onChange={onChangeHandler(setId)} />
      <input
        placeholder="name"
        value={name}
        onChange={onChangeHandler(setName)}
        style={{ margin: "10px" }}
      />
      <input
        placeholder="committee"
        value={committee}
        onChange={onChangeHandler(setCommittee)}
      />
      <button onClick={onSubmitHandler} style={{ margin: "10px" }}>
        Submit
      </button>
      <Link to="/members">Display members</Link>
    </div>
  );
};

export default Create;
