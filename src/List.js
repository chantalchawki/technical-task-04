import React from "react";
import { Link } from "react-router-dom";
import db from "./db";

const List = () => (
  <div>
    <h1>Display all members</h1>
    <div>
      {db.map((member, index) => (
        <div key={index}>
          <p>Id: {member.id}</p>
          <p>Name: {member.name}</p>
          <p>Committee: {member.committee}</p>
          <Link to={`/members/${member.id}`}>Display member</Link>
        </div>
      ))}
    </div>
    <Link to="/members/create">Create member</Link>
  </div>
);

export default List;
