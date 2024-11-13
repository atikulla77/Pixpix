import React from "react";
import PuffLoader from "react-spinners/PuffLoader";

function Lodding() {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <PuffLoader size={80}  color="#FBB03B" />
    </div>
  );
}

export default Lodding;
