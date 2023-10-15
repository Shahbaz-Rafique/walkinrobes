import React from "react";
import Sidebar from "./sidebar";
import Navbars from "./navbar";
import TablePage from "./table";

export default function Products() {
  return (
    <div style={{ width: "100%", display: "flex" }}>
      <div style={{ width: "17%" }}>
        <Sidebar />
      </div>
      <div style={{ width: "83%" }}>
        <Navbars />
        <TablePage />
      </div>
    </div>
  );
}
