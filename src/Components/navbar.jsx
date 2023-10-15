import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  MDBNavbarToggler,
  Collapse,
  MDBIcon,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  MDBInput,
} from "mdbreact";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBBtn,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar
        expand="md"
        style={{
          marginTop: "-10px",
          backgroundColor: "transparent",
          paddingLeft: "40px",
          padding: "25px",
        }}
      >
        <NavbarBrand>
          <h4
            className="font-weight-bold text-uppercase mb-0 ml-2"
            style={{ color: "black", fontWeight: "bold" }}
          >
            All Products
          </h4>
        </NavbarBrand>
        <MDBNavbarToggler
          type="button"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleCollapse}
        >
          <MDBIcon icon="bars" fas style={{ color: "white" }} />
        </MDBNavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <NavbarNav left></NavbarNav>
          <NavbarNav
            className="mx-auto"
            style={{ marginTop: "30px" }}
          ></NavbarNav>
          <NavbarNav className="ml-auto" right style={{ marginRight: "10px" }}>
            <NavItem>
              <div style={{ display: "flex", alignItems: "center" }}>
                <MDBDropdown>
                  <MDBDropdownToggle
                    style={{
                      backgroundColor: "#008598",
                      border: "none",
                      marginRight: "7px",
                    }}
                  >
                    <span>
                      <i className="fas fa-plus"></i> Add Product
                    </span>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link>Perform Audit</MDBDropdownItem>
                    <MDBDropdownItem link>Import CSV</MDBDropdownItem>
                    <MDBDropdownItem link>Download CSV</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
                <MDBBtn
                  style={{
                    backgroundColor: "#efefef",
                    color: "gray",
                    fontWeight: "bold",
                    border: "none",
                    lineHeight: "36px",
                    fontSize: "20px",
                    padding: "0 10px",
                  }}
                >
                  <i className="fas fa-ellipsis-h"></i>
                </MDBBtn>
              </div>
            </NavItem>
          </NavbarNav>
        </Collapse>
      </Navbar>
    </div>
  );
}
