import React, { useState, useEffect } from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [openclass, setOpenclass] = useState("");
  useEffect(() => {
    if (screenWidth <= 600) {
      setOpenclass("pro-sidebar toggled");
      document.getElementById("mainlogo").style.display = "none";
      document.getElementById("bars").style.display = "none";
    } else {
      setOpenclass("pro-sidebar");
      document.getElementById("mainlogo").style.display = "block";
      document.getElementById("bars").style.display = "block";
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        overflow: "scroll initial",
        position: "fixed",
        zIndex: "1",
        top: "0",
        left: "0",
      }}
    >
      <CDBSidebar
        textColor="#817E9F"
        className={openclass}
        style={{ backgroundColor: "#E0FFFF" }}
      >
        <CDBSidebarHeader
          prefix={<i className="fa fa-bars fa-large" id="bars"></i>}
        >
          <img
            src="/Assets/logo.png"
            alt="Inventora"
            id="mainlogo"
            style={{ width: "180px", height: "50px", marginTop: "-10px" }}
          />
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/">
              <CDBSidebarMenuItem>All Materials</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/products">
              <CDBSidebarMenuItem>Products</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px",
            }}
          >
            Manga's Manager
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
