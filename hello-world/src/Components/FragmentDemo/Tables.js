import React from "react";
import Colomns from "./Colomns";

const Tables = () => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Level</th>
          </tr>
          <tr>
            <Colomns />
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Tables;
