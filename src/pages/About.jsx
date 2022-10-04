import React, { useContext } from "react";
import { UserContext } from "../UserContext";

export const About = () => {
  const msg = useContext(UserContext);
  return (
    <div>
      <h2>About</h2>
      <div>{msg}</div>
    </div>
  );
};
