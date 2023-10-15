import React from "react";
import Sidebar from "./sidebar";
import Navbars from "./navbar";
import SimpleTable from "./simpletable";

export default function Home() {
  return (
    <div style={{ width: "100%", display: "flex" }}>
      <div style={{ width: "17%" }}>
        <Sidebar />
      </div>
      <div style={{ width: "83%" }}>
        <Navbars />
        <SimpleTable />
      </div>
    </div>
  );
}
