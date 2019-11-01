import React from "react";
import db from "./db";

const Info = ({ match }) => {
  console.log(match.params.id);
  const [member] = db.filter(member => member.id === match.params.id);
  return (
    <div>
      <h1>Display one member</h1>
      <div>
        <p>Id:{member.id}</p>
        <p>Name:{member.name}</p>
        <p>Committee:{member.committee}</p>
      </div>
    </div>
  );
};

export default Info;
