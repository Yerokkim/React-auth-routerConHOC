import React from "react";
import requireAuth from "./requireAuth";

const Feature = () => {
  return <div>feature</div>;
};

export default requireAuth(Feature);
