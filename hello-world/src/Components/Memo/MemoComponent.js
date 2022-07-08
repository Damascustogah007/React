import React from "react";

const MemoComp = ({ name }) => {
  console.log("****Memo Component Render****");
  return <div>{name}</div>;
};

export default React.memo(MemoComp);
